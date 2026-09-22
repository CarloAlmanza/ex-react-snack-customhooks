import { useState, useEffect } from "react";

function useDate() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        // Cleanup: ferma l'intervallo quando il componente viene smontato
        return () => clearInterval(intervalId);
    }, []);

    return currentDate;
}

export default useDate;