var tiles = document.querySelectorAll(".tile");
var images = [
  "images/1%20-%20Do%20the%20Right%20Thing.jpg",
  "images/2%20-%20Sicario.jpg",
  "images/3%20-%20Out%20of%20the%20Furnace.jpg",
  "images/4%20-%20The%20Town.jpg",
  "images/5%20-%20Arrival.jpg",
  "images/6%20-%20Vertigo.jpg",
  "images/7%20-%20The%20Assassination%20of%20Jesse%20James%20by%20the%20Coward%20Robert%20Ford.jpg",
  "images/8%20-%20The%20Girl%20on%20the%20Train.jpg",
  "images/9%20-%20Blade%20Runner%202049.jpg",
  "images/10%20-%20Interstellar.jpg",
  "images/11%20-%20Nightcrawler.jpg",
  "images/12%20-%20The%20Tree%20of%20Life.jpg",
  "images/13%20-%20Moonlight.jpg",
  "images/14%20-%20How%20to%20Be%20Single.jpg",
  "images/15%20-%20The%20Assassination%20of%20Jesse%20James%20by%20the%20Coward%20Robert%20Ford.jpg",
  "images/16%20-%20The%20Place%20Beyond%20the%20Pines.jpg",
  "images/17%20-%20Blade%20Runner%202049.jpg",
  "images/18%20-%20Dont%20Breathe.jpg",
  "images/19%20-%20Moonlight.jpg",
  "images/20%20-%20Nocturnal%20Animals.jpg",
  "images/21%20-%20Arrival.jpg",
  "images/22%20-%20Seven.jpg",
  "images/23%20-%20How%20to%20Be%20Single.jpg",
  "images/24%20-%20The%20Place%20Beyond%20the%20Pines.jpg",
  "images/25%20-%20Dont%20Breathe.jpg",
  "images/26%20-%20Blade%20Runner.jpg",
  "images/27%20-%20Nocturnal%20Animals.jpg",
  "images/28%20-%20Eternal%20Sunshine%20of%20the%20Spotless%20Mind.jpg",
  "images/29%20-%20Spring%20Breakers.jpg",
  "images/30%20-%20Arrival.jpg",
  "images/31%20-%20No%20Country%20for%20Old%20Men.jpg",
  "images/32%20-%20It%20Follows.jpg",
  "images/33%20-%20The%20Ghost%20Writer.jpg",
  "images/34%20-%20The%20Hangover%20Part%20II.jpg",
  "images/35%20-%20Nightcrawler.jpg",
  "images/36%20-%20How%20to%20Be%20Single.jpg",
  "images/37%20-%20The%20Grand%20Budapest%20Hotel.jpg",
];

tiles.forEach(function (t, a) {
  t.style.backgroundImage = "url(" + images[a] + ")";
});

setInterval(function () {
  tiles[25].style.backgroundImage = "url(" + images[Math.floor(Math.random() * images.length)] + ")";
}, Math.floor(Math.random() * 2000) + 500);

setInterval(function () {
  tiles[2].style.backgroundImage = "url(" + images[Math.floor(Math.random() * images.length)] + ")";
}, Math.floor(Math.random() * 2000) + 300);

tiles.forEach(function (t) {
  t.addEventListener("mouseover", function () {
    var rect = document.createElement("div");
    rect.classList.add("rect");
    rect.style.position = "fixed";
    rect.style.bottom = "15px";
    rect.style.right = "15px";
    rect.style.width = "500px";
    rect.style.height = "200px";
    rect.style.borderRadius = "var(--primary-border-radius)";
    rect.style.backgroundColor = "hsl(" + Math.floor(Math.random() * 360) + ", 100%, 90%)";
    document.body.appendChild(rect);

    var text = document.createElement("h3");
    text.classList.add("rect-text");
    text.style.position = "absolute";
    text.style.top = "15px";
    text.style.left = "15px";
    text.style.color = "var(--primary-color)";
    text.style.fontSize = "2rem";
    text.style.textTransform = "lowercase";
    text.innerHTML = t.style.backgroundImage.split("/")[1].split(".")[0].split("%20").slice(2).join(" ");
    rect.appendChild(text);

    var desc = document.createElement("p");
    desc.classList.add("rect-desc");
    desc.style.position = "absolute";
    desc.style.bottom = "15px";
    desc.style.left = "15px";
    desc.style.color = "var(--primary-color)";
    desc.style.fontSize = "1rem";
    desc.innerHTML = "Lorem";
    rect.appendChild(desc);
  });

  t.addEventListener("mouseout", function () {
    var rect = document.querySelector(".rect");
    rect.parentNode.removeChild(rect);
  });
});
