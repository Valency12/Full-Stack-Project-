// Base de datos local en JavaScript para PlusZone
// Simula una base de datos simple con almacenamiento en localStorage

const Database = {
    // Inicializar base de datos
    init() {
        if (!localStorage.getItem('pluszone_db')) {
            const initialData = {
                users: [
                    {
                        id: 1,
                        email: 'admin@pluszone.com',
                        password: 'admin123', // En producción debe estar hasheada
                        name: 'Administrador',
                        user_type: 'admin',
                        image_url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop',
                        description: 'Usuario administrador del sistema',
                        tech_stack: ['Admin', 'Management', 'System'],
                        created_at: new Date().toISOString(),
                        is_active: true
                    },
                    {
                        id: 2,
                        email: 'admin2@pluszone.com',
                        password: 'admin123',
                        name: 'Admin Secundario',
                        user_type: 'admin',
                        image_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
                        description: 'Segundo usuario administrador',
                        tech_stack: ['Admin', 'Management'],
                        created_at: new Date().toISOString(),
                        is_active: true
                    }
                ],
                profiles: [],
                swipes: [],
                matches: [],
                messages: []
            };
            this.save(initialData);
        }
    },

    // Obtener todos los datos
    getAll() {
        const data = localStorage.getItem('pluszone_db');
        return data ? JSON.parse(data) : null;
    },

    // Guardar datos
    save(data) {
        localStorage.setItem('pluszone_db', JSON.stringify(data));
    },

    // Obtener usuarios
    getUsers() {
        const db = this.getAll();
        return db ? db.users : [];
    },

    // Buscar usuario por email
    getUserByEmail(email) {
        const users = this.getUsers();
        return users.find(user => user.email === email);
    },

    // Buscar usuario por ID
    getUserById(id) {
        const users = this.getUsers();
        return users.find(user => user.id === id);
    },

    // Verificar credenciales de admin
    validateAdmin(email, password) {
        const user = this.getUserByEmail(email);
        if (!user) return null;
        
        if (user.user_type === 'admin' && user.password === password && user.is_active) {
            // No retornar la contraseña
            const { password: _, ...userWithoutPassword } = user;
            return userWithoutPassword;
        }
        
        return null;
    },

    // Crear nuevo usuario
    createUser(userData) {
        const db = this.getAll();
        if (!db) return null;

        const newUser = {
            id: db.users.length > 0 ? Math.max(...db.users.map(u => u.id)) + 1 : 1,
            ...userData,
            created_at: new Date().toISOString(),
            is_active: true
        };

        db.users.push(newUser);
        this.save(db);
        
        const { password: _, ...userWithoutPassword } = newUser;
        return userWithoutPassword;
    },

    // Actualizar usuario
    updateUser(userId, updates) {
        const db = this.getAll();
        if (!db) return null;

        const userIndex = db.users.findIndex(u => u.id === userId);
        if (userIndex === -1) return null;

        db.users[userIndex] = {
            ...db.users[userIndex],
            ...updates,
            updated_at: new Date().toISOString()
        };

        this.save(db);
        
        const { password: _, ...userWithoutPassword } = db.users[userIndex];
        return userWithoutPassword;
    },

    // Obtener todos los admins
    getAdmins() {
        const users = this.getUsers();
        return users.filter(user => user.user_type === 'admin' && user.is_active);
    },

    // Desactivar/activar usuario
    toggleUserActive(userId) {
        const db = this.getAll();
        if (!db) return null;

        const userIndex = db.users.findIndex(u => u.id === userId);
        if (userIndex === -1) return null;

        db.users[userIndex].is_active = !db.users[userIndex].is_active;
        this.save(db);
        
        return db.users[userIndex];
    },

    // Agregar swipe
    addSwipe(userId, profileId, direction) {
        const db = this.getAll();
        if (!db) return null;

        const swipe = {
            id: db.swipes.length > 0 ? Math.max(...db.swipes.map(s => s.id)) + 1 : 1,
            user_id: userId,
            profile_id: profileId,
            direction: direction,
            swiped_at: new Date().toISOString()
        };

        db.swipes.push(swipe);
        this.save(db);
        return swipe;
    },

    // Agregar match
    addMatch(userId, profileId) {
        const db = this.getAll();
        if (!db) return null;

        // Verificar si ya existe
        const exists = db.matches.find(
            m => m.user_id === userId && m.profile_id === profileId
        );
        if (exists) return exists;

        const match = {
            id: db.matches.length > 0 ? Math.max(...db.matches.map(m => m.id)) + 1 : 1,
            user_id: userId,
            profile_id: profileId,
            matched_at: new Date().toISOString()
        };

        db.matches.push(match);
        this.save(db);
        return match;
    },

    // Obtener estadísticas (para admin)
    getStats() {
        const db = this.getAll();
        if (!db) return null;

        return {
            total_users: db.users.length,
            active_users: db.users.filter(u => u.is_active).length,
            admin_users: db.users.filter(u => u.user_type === 'admin').length,
            total_swipes: db.swipes.length,
            total_matches: db.matches.length,
            total_profiles: db.profiles.length
        };
    },

    // Exportar datos (para backup)
    exportData() {
        return this.getAll();
    },

    // Resetear base de datos (cuidado!)
    reset() {
        localStorage.removeItem('pluszone_db');
        this.init();
    }
};

// Inicializar al cargar
Database.init();

// Exportar para uso global
if (typeof window !== 'undefined') {
    window.Database = Database;
}

