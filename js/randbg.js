let path = "url(\"img/backgrounds/background-{0}.jpg\")";
let random = Math.floor(Math.random() * 16);
document.getElementById("background").style.backgroundImage = path.replace("{0}", random.toString());