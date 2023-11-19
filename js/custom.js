const imageTeaching = document.querySelector("#teachingimg");
setInterval(function () {
  const randomGen = Math.floor(Math.random() * 11) + 1;
  const imG = `images/teachings/onlineclass${randomGen}.png`;
  imageTeaching.setAttribute("src", imG);
}, 4000);
