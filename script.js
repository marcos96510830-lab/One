function mostrarTempo() {
    const dataInicio = new Date('2022-04-11T00:00:00');
    const agora = new Date();
    
    let diff = agora - dataInicio;
    
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / 1000 / 60) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    document.getElementById('contador').innerHTML = 
        `Juntos há:<br><strong>${dias} dias, ${horas}h ${minutos}m ${segundos}s</strong>`;
}

// Atualiza a cada 1 segundo
setInterval(mostrarTempo, 1000);
mostrarTempo();

