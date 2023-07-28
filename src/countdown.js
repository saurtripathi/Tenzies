import Timer from './Timer'

const counter = {
    // (A) HELPER - CREATE HR/MIN/SEC CELL
    //  txt : text for the cell (all small letters)
    square : txt => {
      let cell = document.createElement("div")
      cell.className = `cell ${txt}`
      cell.innerHTML = `<div class="digits">0</div><div class="text">${txt}</div>`
      return cell
    },
  
    // (B) INITIALIZE COUNTDOWN TIMER
    //  target : target html container
    //  remain : seconds to countdown
    //  after : function, do this when countdown end (optional)
    attach : instance => {
      // (B1) GENERATE HTML
      instance.target.className = "countdown";
      if (instance.remain >= 86400) {
        instance.target.appendChild(counter.square("days"));
        instance.days = instance.target.querySelector(".days .digits");
      }
      if (instance.remain >= 3600) {
        instance.target.appendChild(counter.square("hours"));
        instance.hours = instance.target.querySelector(".hours .digits");
      }
      if (instance.remain >= 60) {
        instance.target.appendChild(counter.square("mins"));
        instance.mins = instance.target.querySelector(".mins .digits");
      }
      instance.target.appendChild(counter.square("secs"));
      instance.secs = instance.target.querySelector(".secs .digits");
  
      // (B2) TIMER
      instance.timer = setInterval(() => counter.ticker(instance), 1000);
    },
  
    // (C) COUNTDOWN TICKER
    ticker : instance => {
      // (C1) TIMER STOP
      instance.remain--;
      if (instance.remain<=0) {
        clearInterval(instance.timer);
        instance.remain = 0;
        if (typeof instance.after == "function") { instance.after(); }
      }
  
      // (C2) CALCULATE REMAINING DAYS/HOURS/MINS/SECS
      // 1 day = 60 secs * 60 mins * 24 hrs = 86400 secs
      // 1 hr = 60 secs * 60 mins = 3600 secs
      // 1 min = 60 secs
      let secs = instance.remain;
      let days = Math.floor(secs / 86400);
      secs -= days * 86400;
      let hours = Math.floor(secs / 3600);
      secs -= hours * 3600;
      let mins  = Math.floor(secs / 60);
      secs -= mins * 60;
  
      // (C3) UPDATE HTML
      instance.secs.innerHTML = secs;
      if (instance.mins !== undefined) { instance.mins.innerHTML = mins; }
      if (instance.hours !== undefined) { instance.hours.innerHTML = hours; }
      if (instance.days !== undefined) { instance.days.innerHTML = days; }
    },
  
    // (D) HELPER - CONVERT DATE/TIME TO REMAINING SECONDS
    //  till : (date object) countdown to this date/time
    toSecs : till => {
      till = Math.floor(till / 1000);
      let remain = till - Math.floor(Date.now() / 1000);
      return remain<0 ? 0 : remain;
    }
  }

  export default counter