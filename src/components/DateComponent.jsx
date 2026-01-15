function DateComponent() {
    const now = new Date();
    const day = now.getDate();
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const monthName = month[now.getMonth()];
    const year = now.getFullYear();

    return (
        <div id="date">
            <h2>{day} {monthName}, {year}</h2>
        </div>
    );
}

export default DateComponent;