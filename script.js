const affirmations = [
  `I got these jars of instant coffee these days that I love, and while putting them away I paused for a moment and reordered them so that they are ordered by height. I thought of all the places we went, and all the bathrooms where you neatly organized your skincare. I love you.`,
  `There is finally a new chapter out of that manga you like and always ask me about. I saw it and all I could think about was how much you would've liked reading it together. I love my reading buddy very much.`,
  `I don't know if I told you, but I told all my friends how much I love that we always experience life in lockstep. That our values align so much that we end up in the same place without even trying to. I met one of my friends recently and told him how I was SO excited to tell you about the social event I had been to that played those card games for making connections, because it seemed like exactly something you would love running, and it turns out you had already seen multiples of them and was completely unimpressed. It's ok though, I still love you.`,
  `I already told you this, but when I thought about what I would take for sentimental value if my apartment went up in flames, all I could think of to tell my friends was that Bojack picture you made for me. I love you.`,
  `I told you this, but I have a new way to make matcha! I got so excited, because after so many tries, I finally have a way that's easy so I can make as much matcha for you as you want, and show you that I do love you.`,
  `In my notes: "she put off work a little to go get me a scone because i never wake up early enough but i love scones and i love her". I love how thoughtful you are as a person.`,
  `In my notes: "the way that sarah likes me laughing, or likes me making dumb blee bloo blop blop noises, makes me love her". You are the most accepting partner I've ever had.`,
  `In my notes: "you know what it is, i think she's a really brave, that's what i mean by effort, it's that she feels fully the difficulty of what she faces but she tackles it nevertheless, every time." I love you.`,
  `I wish you could see how my therapist smiled when I told her that because you know I struggle with people pleasing, you kept asking me to think about what I want to do. I'm grateful for how caring you are as a person.`,
  `The time I went ziplining, I was so scared but I whispered "I love my girlfriend" and jumped. I just wanted to know that if I got into a freak accident that somebody there could still relay the message.`,
];

const menuItems = [
  { href: "./index.html", label: "Show me the first letter." },
  { href: "./birthday-1.html", label: "It's my birthday today!" },
  { href: "./airplane.html", label: "Thoughts on an airplane." },
  {
    href: "./birthday-2.html",
    label: "It's my birthday again!",
  },
  {
    href: "./reasons-to-love.html",
    label: "Reasons to love you.",
  },
  {
    href: "./proud-of-you.html",
    label: "I'm proud of you.",
  },
  {
    href: "./references-together.html",
    label: "Our references together.",
  },
  {
    href: "./you-love-me.html",
    label: "How much you love me.",
  },
  {
    href: "./parts-of-you.html",
    label: "Parts of you.",
  },
  {
    href: "./my-journal.html",
    label: "My journal for you (updated 11/18)",
  },
];

let count = 0;

function clickAffirmation() {
  const numberOfAffirmations = affirmations.length;
  alert(affirmations[count % numberOfAffirmations]);

  count++;
}

function injectMenu() {
  const menu = document.getElementById("menu");
  const menuHtml = menuItems.map(({ href, label }, index) => {
    return window.location.pathname.includes(href.slice(1))
      ? `<a href="${href}" class="active">${label}</a>`
      : `<a href="${href}">${label}</a>`;
  });

  menuHtml.push(
    `<span onclick="clickAffirmation()">I want an affirmation.</span>`
  );

  menu.innerHTML = menuHtml.join("");
}

document.addEventListener("DOMContentLoaded", function () {
  injectMenu();
});
