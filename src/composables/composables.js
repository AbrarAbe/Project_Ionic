export function getGreetings() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  // hours = hours % 12;
  // hours = hours ? hours : 12;
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  let strTime = hours + ":" + minutes;
  console.log(strTime);
  if (strTime > "00:00" && strTime < "11:00") {
    return "Good Morning";
  } else if (strTime > "11:00" && strTime < "18:01") {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}
export function getRandomInt() {
  return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
}
export function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}
export function range2Years(startYear) {
  var toYear = new Date().getFullYear() + 2,
    years = [];
  startYear = startYear || 1980;
  while (startYear <= toYear) {
    years.push(startYear++);
  }
  return years;
}
export const FullMonth = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export function formatAMPM(dates) {
  let date = new Date(dates);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

export function ConvertFullDate(dates) {
  const date = new Date(dates);
  const months = new Array(
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des"
  );
  let dd = String(date.getDate()).padStart(2, "0");
  let yyyy = date.getFullYear();
  let month = months[date.getMonth()];
  return dd + " " + month + " " + yyyy;
}

export function getToday() {
  let date = new Date();
  let dd = String(date.getDate()).padStart(2, "0");
  let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = date.getFullYear();
  const setToday = yyyy + "-" + mm + "-" + dd;
  return setToday;
}
export function getFirstDayMonth() {
  let date = new Date(),
    y = date.getFullYear(),
    m = date.getMonth();
  let firstDay = new Date(y, m, 1);
  let dd = String(firstDay.getDate()).padStart(2, "0");
  let mm = String(firstDay.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = firstDay.getFullYear();
  const setToday = yyyy + "-" + mm + "-" + dd;
  return setToday;
}
export function getLast30Day() {
  let now = new Date();
  let last30days = new Date(now.setDate(now.getDate() - 30));
  let dd = String(last30days.getDate()).padStart(2, "0");
  let mm = String(last30days.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = last30days.getFullYear();
  const setToday = yyyy + "-" + mm + "-" + dd;
  return setToday;
}
export function getLastDayMonth() {
  let date = new Date(),
    y = date.getFullYear(),
    m = date.getMonth();
  let lastDay = new Date(y, m + 1, 0);
  let dd = String(lastDay.getDate()).padStart(2, "0");
  let mm = String(lastDay.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = lastDay.getFullYear();
  const setToday = yyyy + "-" + mm + "-" + dd;
  return setToday;
}
export function get7daysAgo() {
  let date = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  let dd = String(date.getDate()).padStart(2, "0");
  let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = date.getFullYear();
  const setToday = yyyy + "-" + mm + "-" + dd;
  return setToday;
}
export function getMonday() {
  let d = new Date();
  var day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
  return convertYYYYMMDD(new Date(d.setDate(diff)));
}
export function convertYYYYMMDD(dates) {
  let date = new Date(dates);
  let dd = String(date.getDate()).padStart(2, "0");
  let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = date.getFullYear();
  const setToday = yyyy + "-" + mm + "-" + dd;
  return setToday;
}
export const Status = [
  "Plan & To Do",
  "Today's Plan",
  "Working",
  "On Hold",
  "Quality Assurance",
  "Done",
  "Archived",
];
export const iconTaskStatus = [
  {
    Value: "to-do.png",
  },
  {
    Value: "presentation.jpg",
  },
  {
    Value: "working.png",
  },
  {
    Value: "on-hold.png",
  },
  {
    Value: "qa.png",
  },
  {
    Value: "completed.png",
  },
  {
    Value: "archived.png",
  },
];
