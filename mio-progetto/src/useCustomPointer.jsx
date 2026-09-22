import { useState, useEffect } from "react";

function useCustomPointer(pointer) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Cleanup: rimuove il listener quando il componente viene smontato
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            className="custom-pointer"
            style={{
                position: "fixed",
                left: position.x,
                top: position.y,
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
                zIndex: 9999,
                fontSize: "2rem",
            }}
        >
            {pointer}
        </div>
    );
}

export default useCustomPointer;