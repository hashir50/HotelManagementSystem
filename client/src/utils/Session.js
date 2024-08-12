import { jwtDecode } from 'jwt-decode'; // Adjust import for named export

// Key for localStorage
const SESSION_KEY = 'HMSToken';

export const saveSession = (token) => {
    localStorage.setItem(SESSION_KEY, token);
};

export const getSession = () => {
    const token = localStorage.getItem(SESSION_KEY);
    if (token) {
        try {
            const decoded = jwtDecode(token);
            return {
                token,
                username: decoded.username,
                role: decoded.role,
                expiresAt: decoded.exp // JWT expiration time
            };
        } catch (error) {
            console.error('Invalid token:', error);
            return null;
        }
    }
    return null;
};

export const clearSession = () => {
    localStorage.removeItem(SESSION_KEY);
};

export const isSessionExpired = () => {
    const session = getSession();
    if (session && session.expiresAt) {
        return Date.now() >= session.expiresAt * 1000; // Convert to milliseconds
    }
    return true; // If no session or expiration date, consider it expired
};

// Validate session and redirect if necessary
export const validateSession = (history) => {
    const session = getSession();

    if (!session || isSessionExpired()) {
        clearSession();
        history.push('/login');
        return false; // Session is not valid
    }
    return true; // Session is valid
};

export const isSessionValid = () => {
    const session = getSession();
    return session && !isSessionExpired();
};
export const logout = () => {
    clearSession();
    window.location.reload(); 
};
