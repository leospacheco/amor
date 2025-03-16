const dataInicio = new Date('2019-09-28T20:24:15'); // Substitua pela sua data de início
const heartContainer = document.querySelector('.heart-container');
function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicio;

    const segundos = Math.floor(diferenca / 1000) % 60;
    const minutos = Math.floor(diferenca / (1000 * 60)) % 60;
    const horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24)) % 30; // Aproximação de meses
    const meses = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 30)) % 12; // Aproximação de anos
    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));

    const texto = `${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
    document.getElementById('contador').textContent = texto;
}
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';
    heart.style.left = `${Math.random() * 100}vw`; // Posição horizontal aleatória
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`; // Duração aleatória da animação
    heartContainer.appendChild(heart);

    // Remove o emoji após a animação terminar
    heart.addEventListener('animationiteration', () => {
        heart.remove();
    });
}
atualizarContador(); // Atualiza imediatamente
setInterval(atualizarContador, 1000); // Atualiza a cada segundo
setInterval(createHeart, 200); // Cria um coração a cada 200 milissegundos

