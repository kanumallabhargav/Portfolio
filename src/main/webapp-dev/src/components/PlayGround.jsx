import { useEffect } from "react";

export default function PlayGround() {

    useEffect(() => {
        const blocks = document.querySelectorAll(".block");

        blocks.forEach(block => {
            const hue = Math.floor(Math.random() * 360);
            block.style.backgroundColor = `hsl(${hue}, 80%, 50%)`;
        });
    }, []);

    return (
        <div className="text-white border-amber-400/70 border-2 rounded-xl p-5">
            <h1 className="text-4xl mb-5">This is the Playground</h1>
            <div className="box mb-5"></div>
            <div className="loading-state mb-5"></div>
            <div className="scroll-element flex flex-col gap-5">
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
            </div>
        </div>
    )
}