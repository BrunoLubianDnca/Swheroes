// Contagem regressiva até 5 de setembro de 2026, 18:00
(function() {
  const destino = new Date('2026-09-05T18:00:00-03:00').getTime();
  const el = document.getElementById('countdown-modern');
  if (!el) return;

  function formatar(num) {
    return num < 10 ? '0' + num : num;
  }

  function atualizarContador() {
    const agora = new Date().getTime();
    const distancia = destino - agora;
    if (distancia <= 0) {
      el.innerHTML = '<span>O evento começou!</span>';
      return;
    }
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);
    el.innerHTML = `
      <div class="countdown-modern-block"><strong>${formatar(dias)}</strong><label>Dias</label></div>
      <div class="countdown-modern-block"><strong>${formatar(horas)}</strong><label>Horas</label></div>
      <div class="countdown-modern-block"><strong>${formatar(minutos)}</strong><label>Min</label></div>
      <div class="countdown-modern-block"><strong>${formatar(segundos)}</strong><label>Seg</label></div>
    `;
  }

  atualizarContador();
  setInterval(atualizarContador, 1000);
})(); 