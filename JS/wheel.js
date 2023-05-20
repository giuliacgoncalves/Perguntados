(function(){
    const wheel = document.querySelector(".wheel");
    const markerBtn = document.querySelector(".marker");
    let deg = 0;

    markerBtn.addEventListener('click', () => {
        markerBtn.style.pointerEvents = 'none';
        deg = Math.floor(5000 + Math.random()*3600);
        wheel.style.transition = 'all 10s ease-out';
        wheel.style.transform = `rotate(${deg}deg)`;
    })

    wheel.addEventListener('transitionend', ()=>{
        markerBtn.style.pointerEvents = 'auto';
        wheel.style.transition = 'none';
        const actualDeg = deg%360;
        wheel.style.transform = `rotate(${actualDeg}deg)`;
    })

})();