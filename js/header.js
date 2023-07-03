window.onscroll = () => changeHeaderBackground();

function changeHeaderBackground() {
  const header = document.querySelector('[data-header]');
  const headerOffsetTrigger = header.offsetHeight;
  console.log(headerOffsetTrigger);
  const pageOffsetY = window.pageYOffset;
  console.log(pageOffsetY);

  if (pageOffsetY > headerOffsetTrigger) {
    header.classList.add('no-transparency');
  } else {
    header.classList.remove('no-transparency');
  }
}
