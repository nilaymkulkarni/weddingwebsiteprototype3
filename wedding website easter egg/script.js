function showDetails(city){
  const box=document.getElementById("details");
  if(city==="prayagraj"){
    box.innerHTML="<strong>PRAYAGRAJ · THE WEDDING</strong><br>29 January 2027 · 9:00 PM<br>Haldi · Mehendi · Sangeet · Wedding details can be added here.";
  }else{
    box.innerHTML="<strong>PUNE · THE RECEPTION</strong><br>04 February 2027 · 7:00 PM<br>Reception details, venue, parking and directions can be added here.";
  }
}
function chapter(n){
 const text={
  1:"Every story has a beginning. This chapter can contain childhood photographs and the years before their paths crossed.",
  2:"The chapter where two individual stories became one. Add how they met, their first memories and favourite moments.",
  3:"Two families, two backgrounds and one celebration. Add family photographs, messages and memories here.",
  4:"29 January 2027 — the day the next chapter officially begins in Prayagraj."
 };
 document.getElementById("chapterText").innerHTML=text[n];
}
const wedding=new Date("January 29, 2027 21:00:00").getTime();
setInterval(()=>{
 const now=Date.now(),d=wedding-now;
 const el=document.getElementById("countdown");
 if(d<=0){el.innerHTML="THE STORY HAS BEGUN ❤️";return}
 const days=Math.floor(d/86400000),hours=Math.floor(d/3600000)%24,mins=Math.floor(d/60000)%60,secs=Math.floor(d/1000)%60;
 el.innerHTML=`${days}D · ${hours}H · ${mins}M · ${secs}S`;
},1000);
function openModal(id){document.getElementById(id).classList.add("show")}
function closeModal(id){document.getElementById(id).classList.remove("show")}
function generatePass(){
 const name=document.getElementById("guestName").value.trim();
 document.getElementById("passResult").innerHTML=name?`<div class="pass"><h3>DEVI ♥ SHUBHAM</h3><p>WEDDING GUEST PASS</p><strong>${name}</strong><p>PRAYAGRAJ → PUNE</p><small>STATUS: VIP GUEST</small></div>`:"Please enter your name.";
}
function quizAnswer(correct){
 document.getElementById("quizResult").innerHTML=correct?"🎉 Correct! You know them well.":"😂 Wrong! Try again.";
}
function sendMessage(){
 const m=document.getElementById("message").value.trim();
 document.getElementById("messageResult").innerHTML=m?"❤️ Your message has been added to their story.":"Please write a message first.";
}
function secret(){
 alert("🔐 SECRET FOUND!\n\nWelcome to the inner circle. More surprises can be hidden here.");
}


// Secret birthday-click surprise. Change this number to the chosen click count.
let birthdayClicks = 0;
const secretClickCount = 14;

function birthdayClick(){
  birthdayClicks++;
  document.getElementById("birthdayCounter").textContent = `Clicks: ${birthdayClicks}`;
  if(birthdayClicks >= secretClickCount){
    document.getElementById("birthdaySurprise").hidden = false;
    const button = document.getElementById("birthdayButton");
    button.textContent = "💖 Surprise Unlocked!";
    button.disabled = true;
  }
}
