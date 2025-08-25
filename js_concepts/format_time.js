function formatTime(currentTime, totalTime) {
    // Helper function to pad a number with leading zeros
    const padWithZero = (num) => num.toString().padStart(2, "0");

    // Format current time in minutes:seconds
    const formattedCurrentTime = `${padWithZero(
        Math.floor(currentTime / 60)
    )}:${padWithZero(Math.floor(currentTime % 60))}`;

    // Format total time in minutes:seconds
    const formattedTotalTime = `${padWithZero(
        Math.floor(totalTime / 60)
    )}:${padWithZero(Math.floor(totalTime % 60))}`;

    // Combine formatted current time and total time with "of" in between
    return `${formattedCurrentTime} of ${formattedTotalTime}`;
}

// Example time values
const currentTimeInSeconds = 125; // Example of a current time in seconds
const totalTimeInSeconds = 3600; // Example of a total time in seconds

// Format the time and display the result
const formattedTime = formatTime(currentTimeInSeconds, totalTimeInSeconds);
console.log(formattedTime); // 02:05 of 60:00