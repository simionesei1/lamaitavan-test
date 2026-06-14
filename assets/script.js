const slider = document.querySelector('[data-slider]');
if (slider) {
  const track = slider.querySelector('.slider-track');
  const slides = Array.from(track.children);
  const prev = slider.querySelector('.prev');
  const next = slider.querySelector('.next');
  let index = 0;

  const update = () => {
    track.style.transform = `translateX(-${index * 100}%)`;
  };

  prev.addEventListener('click', () => {
    index = index === 0 ? slides.length - 1 : index - 1;
    update();
  });

  next.addEventListener('click', () => {
    index = index === slides.length - 1 ? 0 : index + 1;
    update();
  });

  setInterval(() => {
    index = index === slides.length - 1 ? 0 : index + 1;
    update();
  }, 3000);
}

const form = document.getElementById('bookingForm');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const message = [
      'Bună! Aș vrea să verific disponibilitatea pentru Lămâița Van.',
      '',
      `Nume: ${data.get('nume') || '-'}`,
      `Telefon: ${data.get('telefon') || '-'}`,
      `Email: ${data.get('email') || '-'}`,
      `Tip eveniment: ${data.get('eveniment') || '-'}`,
      `Data: ${data.get('data') || '-'}`,
      `Localitate: ${data.get('localitate') || '-'}`,
      `Invitați: ${data.get('invitati') || '-'}`,
      `Mesaj: ${data.get('mesaj') || '-'}`
    ].join('\n');

    const whatsappUrl = `https://wa.me/40751901132?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener');
  });
}
