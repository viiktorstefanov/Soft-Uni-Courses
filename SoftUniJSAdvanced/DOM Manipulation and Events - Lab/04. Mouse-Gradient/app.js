function attachGradientEvents() {
    let resultElement = document.getElementById('result');
    let gradientElement = document.getElementById('gradient');

    
    let mouseMoveEvent = (e) => {
     
        let percent = Math.floor((e.offsetX / e.target.clientWidth) * 100)
        resultElement.textContent = `${percent}%`;
    }

    gradientElement.addEventListener('mousemove', mouseMoveEvent);


}