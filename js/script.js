const setBackground = () => {
  let p1 = document.querySelector('.first');
  let p2 = document.querySelector('.last');

  p1.style.setBackgroundColor = 'red';
  p2.style.setBackgroundColor = 'yellow';

/*   p1.classList.toggle('bg-red');
  p2.classList.toggle('bg-yellow'); */
}


let btnSetBackground = document.getElementById('set-background');

btnSetBackground.addEventListener('click', setBackground);