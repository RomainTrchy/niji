function generateTiles() {
  for (let i = 0; i < 38; i++) {
    const tiles = document.createElement("div");
    tiles.classList.add("tile");
    document.querySelector("#gallery").appendChild(tiles);
  }
}
generateTiles();

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

var quotes = new Map([
  ["Do the Right Thing", "“This ain't about money. I could give a fuck about money.”"],
  ["Sicario", "“You're asking me how a watch works. For now we'll just keep an eye on the time.”"],
  ["Out of the Furnace", "“I gave my life for this country and what's it done for me? Huh? What's it done for me?”"],
  ["The Town", "“No matter how much you change, you still have to pay the price for the things you've done.”"],
  ["Arrival", "“We don't know if they understand the difference between a weapon and a tool.”"],
  ["Vertigo", "“Only one is a wanderer; two together are always going somewhere.”"],
  [
    "The Assassination of Jesse James by the Coward Robert Ford",
    "“I can't believe I woke up this morning wondering if my daddy would loan me his overcoat, and here it is just past midnight and I've already robbed a railroad train and I'm sitting in a rocking chairchatting with none other than Jesse James.”",
  ],
  [
    "The Girl on the Train",
    "“Lying is like taking a trip. It's like having a secret. It's like touching yourself and no one else knows. Except you.”",
  ],
  ["Blade Runner 2049", "“Dying for the right cause. It's the most human thing we can do.”"],
  [
    "Interstellar",
    "“When I was a kid, it seemed like they made something new every day. Some, gadget or idea, like every day was Christmas.”",
  ],
  ["Nightcrawler", "“The price hasn't been negotiated yet.”"],
  ["The Tree of Life", "“Life only really has one beginning and one end, and the rest is just a whole lot of middle.”"],
  ["Moonlight", "“You ain't got to love me, but you gonna know that I love you.”"],
  ["How to Be Single", "“Men who kill without reason cannot be reasoned with.”"],
  ["The Assassination of Jesse James by the Coward Robert Ford", ""],
  ["The Place Beyond the Pines", "“If you ride like lightning, you're gonna crash like thunder.”"],
  ["Blade Runner 2049", "“Every leap of civilization was built on the back of a disposable workforce.”"],
  ["Dont Breathe", "“There is nothing a man cannot do once he accepts the fact that there is no God.”"],
  [
    "Moonlight",
    "“You the only man that's ever touched me. You're the only one. I haven't really touched anyone since.”",
  ],
  ["Nocturnal Animals", "“Do you ever feel like your life has turned into something you never intended?”"],
  ["Arrival", "“Trust me, you can, uh, understand communication and still end up single.”"],
  ["Seven", "“Nobody throws me my own guns and says run. Nobody.”"],
  ["How to Be Single", "“If you're a single man and you happen to be in this business, you're deemed a player.”"],
  ["The Place Beyond the Pines", "“You fucked up my son's life. Therefore, you fucked up my life.”"],
  ["Dont Breathe", "“She was pregnant with my child.”"],
  ["Blade Runner", "“Pain reminds you the joy you felt was real. More joy, then.”"],
  ["Nocturnal Animals", "“You can't just walk away from things all the time.”"],
  ["Eternal Sunshine of the Spotless Mind", ""],
  [
    "Spring Breakers",
    "“You know what it's like saving money in New York? It's like making it with your sister - it's just not done.”",
  ],
  ["Arrival", "“We're a world with no single leader. It's impossible to deal with just one of us.”"],
  ["No Country for Old Men", "“Age will flatten a man.”"],
  [
    "It Follows",
    "“I promise I'll never do it again. That's the one good thing about me. I never do the same wrong thing twice.”",
  ],
  [
    "The Ghost Writer",
    "“Forty thousand years of human language, and there's no word to describe our relationship. It was doomed.”",
  ],
  ["The Hangover Part II", "“When a monkey nibbles on a penis, it's funny in any language.”"],
  ["Nightcrawler", "“A friend is a gift you give yourself.”"],
  ["How to Be Single", "“That’s life, you know. We never end up where you thought you wanted to be.”"],
  [
    "The Grand Budapest Hotel",
    "“It's quite a thing, winning the loyalty of a woman like that for nineteen consecutive seasons.”",
  ],
]);

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
    rect.style.bottom = "calc(15%/1080 * 100)";
    rect.style.right = "calc(15%/1080 * 100)";
    rect.style.width = "500px";
    rect.style.height = "200px";
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
    desc.innerHTML = quotes.get(t.style.backgroundImage.split("/")[1].split(".")[0].split("%20").slice(2).join(" "));
    rect.appendChild(desc);
  });

  t.addEventListener("mouseout", function () {
    var rect = document.querySelector(".rect");
    rect.parentNode.removeChild(rect);
  });
});
