const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".givaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

// let futureDate = new Date(2022, 4, 24, 15, 25, 0, 0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const day = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

giveaway.textContent = `givaway ends on ${day}, ${date}-${month}-${year}, ${hours}:${minutes}`;

//future time in miliseconds
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  //values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const remainingDays = Math.floor(t / oneDay);
  const remainingHours = Math.floor((t % oneDay) / oneHour);
  const remainingMinutes = Math.floor(((t % oneDay) % oneHour) / oneMinute);
  const remainingSeconds = Math.floor(
    (((t % oneDay) % oneHour) % oneMinute) / 1000
  );

  const values = [
    remainingDays,
    remainingHours,
    remainingMinutes,
    remainingSeconds,
  ];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = values[index];
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired"> Sorry, this givaway has expired!</h4>`;
  }
}

//countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
