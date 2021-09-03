const secondhand = document.querySelector('.second-hand');
const minutehand = document.querySelector('.minute-hand');
const hourhand = document.querySelector('.hour-hand');


function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegree = ((seconds/60)*360)+90;
  secondhand.style.transform = `rotate(${secondsDegree}deg)`;

  const minute = now.getMinutes();
  const minuteDegree = ((minute/60)*360)+90;
  minutehand.style.transform = `rotate(${minuteDegree}deg)`;

  const hour = now.getHours();
  const hourDegree = ((hour/12)*360)+ ((minute/60)*30)+90;
  hourhand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate,1000);
setDate();
