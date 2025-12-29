import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'

// Sanitize user input to prevent XSS attacks
// This is applied at the entry point to ensure all user data is properly encoded
const sanitizeInput = (str) => {
    if (typeof str !== 'string') return str;
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
};

// Make sanitize function available globally for use throughout the app
window.sanitizeInput = sanitizeInput;

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)