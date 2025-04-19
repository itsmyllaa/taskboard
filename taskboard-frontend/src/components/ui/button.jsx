import React from "react";

export function Button({ children, onClick, className = "" }) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 ${className}`}
        >
            {children}
        </button>
    );
}
