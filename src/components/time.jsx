import { useState, useEffect } from "react";
import "/src/CSS/index.css";

function Timecomponent() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const timestring = time.toLocaleTimeString([],{
         hour: 'numeric',
         minute: '2-digit'
    }).replace(/AM|PM/, '').trim();
    
    return (
        <div className="time">
            <h1>{timestring}</h1>
        </div>
    );

}

export default Timecomponent;