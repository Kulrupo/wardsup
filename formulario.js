 emailjs.init('XiMT-3D48_4wG57j2');

  const btn = document.querySelector('.submit-btn');
  const form = document.getElementById('form-contato');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const captchaResponse = grecaptcha.getResponse();
    if (!captchaResponse) {
      alert('Por favor, verifique que você não é um robô.');
      return;
    }

    btn.textContent = 'Enviando...';

    const serviceID = 'service_kjl9b4w';
    const templateID = 'template_1etufi4';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        document.querySelector('.contact-card').innerHTML = `
          <div class="contact-success">
            <h3 class="success-title">Mensagem enviada com sucesso!</h3>
            <p class="success-message">Obrigado por entrar em contato. Em breve responderemos por email.</p>
          </div>
        `;
        grecaptcha.reset();
      }, (err) => {
        btn.textContent = 'Enviar Mensagem';
        alert('Erro ao enviar: ' + JSON.stringify(err));
      });
  });