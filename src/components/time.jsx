function Timecomponent() {

    return (
        <div id="time">
            <h1>{updateTime}</h1>
        </div>
    );
}  

function updateTime() {
    const now = new Date();
    let timestring = now.toLocaleTimeString([],
        { hour: 'numeric', minute: '2-digit' });
    document.getElementById("time").innerHTML = `<h1>${timestring}</h1>`;
}
setInterval(updateTime, 60000);

export default Timecomponent;

