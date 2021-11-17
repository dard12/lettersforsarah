function clickAffirmation() {
  const numberOfAffirmations = 3;
  const random = Math.floor(Math.random() * numberOfAffirmations) + 1;

  window.location.href = "/affirmation-" + random + ".html";
}
