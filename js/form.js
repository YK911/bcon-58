const bookingForm = document.querySelector('.booking-form');

bookingForm.addEventListener('submit', event => {
  event.preventDefault();
  console.log('🚀 ~ Form name:', event.target.name);

  event.target.reset();
});
