//Marquee function
function makeMarquee() {
  const title = 'FIFTY Music Festival — November 10–12, Desert Valley';
  const marqueeText = new Array(50).fill(title).join(' — ');
  const marquee = document.querySelector('.marquee span');
  marquee.innerHTML = marqueeText;
  console.log(marquee);
}
//Calls marquee function
makeMarquee();

//Random number function
function random(min, max) {
  return Math.floor(Math.random() * (min - max) + min);
}

//Circles animation
const circles = document.querySelectorAll('.circle');

circles.forEach((circle, index) => {
  console.log(300 * index);
  circle.animate(
    [
      //keyframes
      {transform: 'scale(1)'},
      {transform: 'scale(1.2)'},
      {transform: 'scale(1)'}
    ],
    {
      //staggered animation delay
      delay: 300 * index,
      duration: 3000,
      iterations: Infinity
    }
  );
});

//Squiggles animation
const squiggles = document.querySelectorAll('.squiggle');

squiggles.forEach((squiggle, index) => {
  //generate a random number using randomNumber function
  const randomNumber = random(0, 45);

  console.log(randomNumber);
  squiggle.animate(
    [
      //keyframes
      {transform: 'rotate(0deg)'},
      //Calculates a random degree to animate
      {transform: 'rotate(' + randomNumber + 'deg)'},
      {transform: 'rotate(0deg)'}
    ],
    {
      //staggered animation delay
      delay: 300 * index,
      duration: 5000,
      iterations: Infinity
    }
  );
});

//Viewport transition script - add class of 'in-viewport' when in view.
inView('.section')
  .on('enter', section => {
    section.classList.add('in-viewport');
  })
  .on('exit', section => {
    section.classList.remove('in-viewport');
  });

inView.threshold(0.2);

//Transition delays - shapes fade in after artists
const sections = document.querySelectorAll('.section');

sections.forEach((section, index) => {
  const artists = section.querySelectorAll('.lineup li');
  const shapes = section.querySelectorAll('.shape');

  artists.forEach((artist, index) => {
    //fades artists in in relation to index number
    const delay = index * 100;
    artist.style.transitionDelay = delay + 'ms';
  });
  shapes.forEach((shapes, index) => {
    //transition starts once artists have been faded in
    const delay = (artists.length + index) * 100;
    shapes.style.transitionDelay = delay + 'ms';
  });
});

//Enabling smooth crolling from anchor tags
const scrollLinks = document.querySelectorAll('.js-scroll');

scrollLinks.forEach(link => {
  link.addEventListener('click', event => {
    //blocks default browser behaviour (jumping to href attribute)
    event.preventDefault();
    //adds smooth scrolling to href attribute
    const href = link.getAttribute('href');
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
