const time = document.querySelector("#time");

setInterval(displayTime, 1000);
displayTime();

function displayTime() {
  const now = new Date();
  const hour = String(now.getHours()).padStart(2, "0");
  const min = String(now.getMinutes()).padStart(2, "0");

  time.innerText = `${hour}:${min}`;
}
