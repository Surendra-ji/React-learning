function ClockDateTime() {

    let current_time = new Date();
    return <>
        <p>This is current date: {current_time.toLocaleDateString()} and time: {current_time.toLocaleTimeString()}</p>
    </>
}

export default ClockDateTime;