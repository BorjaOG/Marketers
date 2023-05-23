let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(800)
  .typeString('The Sun City')
  .pauseFor(400)
  .deleteChars(10)
  .start();