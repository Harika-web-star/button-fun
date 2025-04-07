const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const button4 = document.getElementById("btn4");
const button5=document.getElementById("btn5");
const moveX = 230;
const moveY = 80;


let x = true, y = true, z = true, a = true,b=true;

button1.addEventListener("mouseenter", function () {
  if (x) button1.innerText = "why can't u click🤷‍♀️";
});
button1.addEventListener("mouseleave", function () {
  if (x) button1.innerText = "HELLO🙋‍♀️";
});

button1.addEventListener("click", function () {
    if (x) {
      button1.style.left = `${moveX}px`;
      button1.style.top = `${moveY}px`;
      button1.innerText = "HELLO"; 
      x=false;
      document.body.style.backgroundImage = "url('https://th.bing.com/th/id/R.65e3599a7860b3e7a313a0b836f006ac?rik=IGuo7pl7sBq%2bhg&riu=http%3a%2f%2fs3.amazonaws.com%2frapgenius%2fspiral.gif&ehk=UP5poKO1V45afX6AoWg4Ks4302x1EPSbx1DxtlDiYGY%3d&risl=&pid=ImgRaw&r=0')";
    } else {
      button1.innerText = "HELLO🙋‍♀️";
      document.body.style.backgroundImage="none";
      resetAll();
    }
  });
  
button2.addEventListener("click", function () {
  if (y) {
    button2.style.zIndex = 5;
    button1.style.zIndex = 4;
    button2.style.left = `${moveX}px`;
    button2.style.top = `${moveY}px`;
    y = false;
    document.body.style.backgroundImage = "url('https://media1.tenor.com/images/499db62c8a5f381b724567ea039ac98e/tenor.gif?itemid=11616484')";
  } else {
    resetAll();
    document.body.style.backgroundImage="none";
  }
});

button3.addEventListener("click", function () {
  if (z) {
    button3.style.zIndex = 5;
    button2.style.zIndex = 4;
    button1.style.zIndex = 3;
    button3.style.left = `${moveX}px`;
    button3.style.top = `${moveY}px`;
    z = false;
    document.body.style.backgroundImage="url('https://media1.tenor.com/m/1gK7bLpSeSoAAAAd/samsung-one-ui.gif')";
  } else {
    resetAll();
    document.body.style.backgroundImage="none";
  }
});

button4.addEventListener("click", function () {
  if (a) {
    button4.style.zIndex = 5;
    button3.style.zIndex = 4;
    button2.style.zIndex = 3;
    button1.style.zIndex = 2;
    button4.style.left = `${moveX}px`;
    button4.style.top = `${moveY}px`;
    a = false;
    document.body.style.backgroundImage="url('https://i.pinimg.com/originals/3a/8c/bb/3a8cbb35f409e66579932bed43733278.gif')";
  } else {
    resetAll();
    document.body.style.backgroundImage="none";
  }
});
button5.addEventListener("click", function () {
    if (b) {
      button5.style.zIndex=5;
      button4.style.zIndex = 4;
      button3.style.zIndex = 3;
      button2.style.zIndex = 2;
      button1.style.zIndex = 1;
      button5.style.left = `${moveX}px`;
      button5.style.top = `${moveY}px`;
      button5.innerText = "Click Me it will END and go bruhh study well😎";
      button5.style.fontSize=`45px`;
      b = false;
      document.body.style.backgroundImage="url('https://th.bing.com/th/id/OIP.LNa8OBNTDJLr0xcpvZpBvAHaHa?w=1200&h=1200&rs=1&pid=ImgDetMai')";
    } else {
      resetAll();
      document.body.style.backgroundImage="none";
      
    }
  });
function resetAll() {
  button1.style.left = `528px`;
  button1.style.top = `283.5px`;
  button1.style.zIndex = 5;
  button1.innerText = "HELLO";

  button2.style.left = `528px`;
  button2.style.top = `283.5px`;
  button2.style.zIndex = 4;

  button3.style.left = `528px`;
  button3.style.top = `283.5px`;
  button3.style.zIndex = 3;

  button4.style.left = `528px`;
  button4.style.top = `283.5px`;
  button4.style.zIndex = 2;

  button5.style.left = `528px`;
  button5.style.top = `283.5px`;
  button5.style.zIndex = 1;

  x = true;
  y = true;
  z = true;
  a = true;
  b=true;
}
