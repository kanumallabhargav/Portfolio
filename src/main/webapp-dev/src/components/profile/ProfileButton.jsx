import React, {useState, useEffect} from "react";

export default function ProfileButton({children, clickHandler, isSelected}) {
    return (
        <li>
            <button
                onClick={clickHandler}
                className={`h-12 w-12 rounded-lg 
                hover:bg-slate-300/90 
                active:bg-slate-500 
                flex flex-col items-center justify-center 
                ${isSelected ? 'bg-red-400/50' : 'bg-slate-300/40'}`}>
                {children}
            </button>
        </li>
    );
}

