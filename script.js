const affirmations = [
  `Hi bub. You BUTT, if you're seeing this you didn't listen to my advice and checked the website. I haven't processed everything yet but I figured I'd write this just in case you checked. I've spent all day today after our call distracting myself. I just didn't feel like I'd be able to handle the feelings if I let them well up. But then, just now, as I finished the game I was using to distract myself, I suddenly said out loud, "Is she dead?! No?! Then there's still hope". I wrote in my journal, "the fight's not over until she closes the door. And I know I'm strong enough to keep fighting". You are my buddy, and I love you dearly. We both know you shouldn't wait for me, but if it's healthy for you to leave the door just slightly open, I'll fight with all the hope I have in me.`,
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
    `<span onclick="clickAffirmation()">I want an affirmation (updated 6/3).</span>`
  );

  menu.innerHTML = menuHtml.join("");
}

document.addEventListener("DOMContentLoaded", function () {
  injectMenu();
});
