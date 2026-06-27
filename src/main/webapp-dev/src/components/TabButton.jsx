import React, {useState, useEffect} from "react";

export default function TabButton({children, clickHandler, isSelected}) {
    return (
        <li>
            <button
                onClick={clickHandler}
                className={`py-1 px-5 rounded-full ${isSelected ? 'bg-purple-800/80' : undefined}`}>
                {children}
            </button>
        </li>
    );
}

