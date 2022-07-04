function clickAffirmation() {
  const numberOfAffirmations = 1;
  const random = Math.floor(Math.random() * numberOfAffirmations) + 1;

  window.location.href = "./affirmation-" + random + ".html";
}
