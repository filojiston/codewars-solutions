function formatDuration(seconds) {

  if (seconds === 0) return 'now';

  const oneYear = 365 * 24 * 60 * 60;
  const oneDay = 24 * 60 * 60;
  const oneHour = 60 * 60;
  const oneMinute = 60;

  const time = [0, 0, 0, 0, 0];

  time[0] = Math.floor(seconds / oneYear);
  seconds -= time[0] * oneYear;

  time[1] = Math.floor(seconds / oneDay);
  seconds -= time[1] * oneDay;

  time[2] = Math.floor(seconds / oneHour);
  seconds -= time[2] * oneHour;

  time[3] = Math.floor(seconds / oneMinute);
  seconds -= time[3] * oneMinute;

  time[4] = seconds;
  seconds -= seconds;

  let result = [];
  const [years, days, hours, mins, secs] = time;

  if (years > 0) {
    if (years > 1) {
      result.push(years + ' years');
    } else {
      result.push(years + ' year');
    }
  }

  if (days > 0) {
    if (days > 1) {
      result.push(days + ' days');
    } else {
      result.push(days + ' day');
    }
  }

  if (hours > 0) {
    if (hours > 1) {
      result.push(hours + ' hours');
    } else {
      result.push(hours + ' hour');
    }
  }

  if (mins > 0) {
    if (mins > 1) {
      result.push(mins + ' minutes');
    } else {
      result.push(mins + ' minute');
    }
  }

  if (secs > 0) {
    if (secs > 1) {
      result.push(secs + ' seconds');
    } else {
      result.push(secs + ' second');
    }
  }

  result = result.join(', ');
  const lastIndex = result.lastIndexOf(',');

  result = lastIndex !== -1 ? result.substring(0, lastIndex) + ' and' + result.substring(lastIndex + 1) : result;
  return result;
}

// change if statements and my code shortened by 35 lines. wow
function formatDuration(seconds) {

  if (seconds === 0) return 'now';

  const oneYear = 365 * 24 * 60 * 60;
  const oneDay = 24 * 60 * 60;
  const oneHour = 60 * 60;
  const oneMinute = 60;

  const time = [0, 0, 0, 0, 0];

  time[0] = Math.floor(seconds / oneYear);
  seconds -= time[0] * oneYear;

  time[1] = Math.floor(seconds / oneDay);
  seconds -= time[1] * oneDay;

  time[2] = Math.floor(seconds / oneHour);
  seconds -= time[2] * oneHour;

  time[3] = Math.floor(seconds / oneMinute);
  seconds -= time[3] * oneMinute;

  time[4] = seconds;
  seconds -= seconds;

  let result = [];
  const [y, d, h, m, s] = time;

  if (y) result.push(y + " year" + (y > 1 ? 's' : ''));
  if (d) result.push(d + " day" + (d > 1 ? 's' : ''));
  if (h) result.push(h + " hour" + (h > 1 ? 's' : ''));
  if (m) result.push(m + " minute" + (m > 1 ? 's' : ''));
  if (s) result.push(s + " second" + (s > 1 ? 's' : ''));

  result = result.join(', ');
  const lastIndex = result.lastIndexOf(',');

  result = lastIndex !== -1 ? result.substring(0, lastIndex) + ' and' + result.substring(lastIndex + 1) : result;
  return result;
}


console.log(formatDuration(1), "1 second");
console.log(formatDuration(62), "1 minute and 2 seconds");
console.log(formatDuration(120), "2 minutes");
console.log(formatDuration(3600), "1 hour");
console.log(formatDuration(3662), "1 hour, 1 minute and 2 seconds");