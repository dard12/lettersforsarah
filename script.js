const affirmations = [
  `I wrote in my notes: "she put off work a little to go get me a scone because i never wake up early enough but i love scones and i love her". I love how thoughtful you are.`,
  ``,
];

const menuItems = [
  { href: "./index.html", label: "Show me the first letter." },
  { href: "./birthday-1.html", label: "It's my birthday today!" },
  { href: "./airplane.html", label: "Thoughts on an airplane." },
];

function clickAffirmation() {
  const numberOfAffirmations = affirmations.length;
  const random = Math.floor(Math.random() * numberOfAffirmations);

  alert(affirmations[random]);
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
