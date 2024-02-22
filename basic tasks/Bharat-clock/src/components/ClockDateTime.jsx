import { useEffect, useState } from "react";

function ClockDateTime() {
    const [time, settime] = useState(new Date());
    // console.log("current time period");
    useEffect(
        () => {
        const intervalId = setInterval(() => {
            settime(new Date());
        }, 1000);

            return () => {
                clearInterval(intervalId);
                // console.log("cancelled the interval");
            }
        }, [] );
    return <>
        <p>This is current date: {time.toLocaleDateString()} and time: {time.toLocaleTimeString()}</p>
    </>
}

export default ClockDateTime;