import { useState, useEffect} from "react";
import "/src/CSS/index.css";

function DateComponent() {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date());
            
        }, 60000); // Update every minute
        return () => clearInterval(interval);
    }, []);

    const day = now.getDate();
    const month = now.toLocaleString("default", { month: "long" });
    const year = now.getFullYear();

    return (
        <div className="date">
            <h3>{day} {month}, {year}</h3>
        </div>
    );
}

export default DateComponent;