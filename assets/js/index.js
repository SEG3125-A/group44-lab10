document.addEventListener('DOMContentLoaded', function () {
    // Get the current date and time
    const currentDateUTC = new Date();

    // Calculate the time difference between UTC and US East (EST) in minutes
    const offsetMinutes = -new Date().getTimezoneOffset();

    // Adjust the time by adding the offset
    const usEastTime = new Date(currentDateUTC.getTime() + offsetMinutes * 60000);

    // Format the date as 'YYYY-MM-DDTHH:mm'
    const formattedDate = usEastTime.toISOString().slice(0, 16);

    // Set current date and time as the default value
    // document.getElementById('dateTimeInput').valueAsDate = currentDate;
    document.getElementById('dateTimeInput').value = formattedDate;
  });
