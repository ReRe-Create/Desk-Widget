function DateComponent() {
    const now = new Date();
    const day = now.getDate();
    const monthName = now.toLocaleString("default", { month: "long" });
    const year = now.getFullYear();

    return (
        <div id="date">
            <h2>{day} {monthName}, {year}</h2>
        </div>
    );
}

export default DateComponent;