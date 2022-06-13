console.log("This is tutorial 54");
const alarmSubmit = document.getElementById("alarmSubmit");
//add an event listner to the alarmSubmit
alarmSubmit.addEventListener("click", setAlarm);
var audio = new Audio(
  "https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3"
);

//function to play the alarm ring tone
function ringBell() {
  audio.play();
}

//this function will run when alarm is set from the UI
function setAlarm(e) {
  e.preventDefault();
  const alarm = document.getElementById("alarm");
  alarmDate = new Date(alarm.value);
  console.log(`setting alarm for ${alarmDate}....`);
  now = new Date();

  let timeToAlarm = alarmDate - now;
  console.log(timeToAlarm);

  if (timeToAlarm >= 0) {
    setTimeout(() => {
      console.log("ringing alarm");
      ringBell();
    }, timeToAlarm);
  }
}
