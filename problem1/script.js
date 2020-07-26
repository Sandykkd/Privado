window.onload = function () {

  checkbtn = document.getElementById("check-btn");

  let Interval;

  let min = 00;
  let sec = 00;
  let ten = 00;
  let appendsec = document.getElementById("sec");
  let appendmin = document.getElementById("min");
  let appenddot = document.getElementById("dot");

  checkbtn.onclick = function () {
    if (checkbtn.innerHTML === "Start") {
      clearInterval(Interval);
      Interval = setInterval(checktimer, 10);
      checkbtn.innerHTML = "Pause";
    } else if (checkbtn.innerHTML === "Pause") {
      checkbtn.innerHTML = "Start";
      clearInterval(Interval);
    } else if (checkbtn.innerHTML === "Reset") {
      checkbtn.innerHTML = "Start";
      clearInterval(Interval);
      min = "00";
      ten = "00";
      sec = "00";
      appendsec.innerHTML = sec;
      appendmin.innerHTML = min;
      appenddot.style.color = "black";
      appendmin.style.color = "black";
      appendsec.style.color = "black";
    }
  };
  function checktimer() {
    ten++;
    if (ten > 99) {
      console.log("seconds");
      sec++;
      appendsec.innerHTML = "0" + sec;
      ten = 0;
    }
    if (sec > 9) {
      appendsec.innerHTML = sec;
    }
    if (sec > 59) {
      min++;
      appendmin.innerHTML = "0" + min;
      sec = 0;
      appendsec.innerHTML = "0" + 0;
    }
    if (min === 1) {
      appendmin.innerHTML = "0" + min;
      checkbtn.innerHTML = "Reset";
      clearInterval(Interval);
      appenddot.style.color = "red";
      appendmin.style.color = "red";
      appendsec.style.color = "red";
    }
  }

  
};
