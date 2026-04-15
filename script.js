const inicio = new Date('2022-04-11T00:00:00');
function contar() {
    const agora = new Date();
    const diff = agora - inicio;
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById('contador').innerText = `${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
}
setInterval(contar, 1000);
contar();

