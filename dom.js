
/*start stop watch*/
let interval = null;

function startIntarval() {
    interval = setInterval(() => {
        let secondsOnes = document.querySelector('.stopwatch .num-container .seconds .ones');
        let secondsTens = document.querySelector('.stopwatch .num-container .seconds .tens');

        let minutesOnes = document.querySelector('.stopwatch .num-container .minutes .ones');
        let minutesTens = document.querySelector('.stopwatch .num-container .minutes .tens');

        let houresOnes = document.querySelector('.stopwatch .num-container .houres .ones');
        let houresTens = document.querySelector('.stopwatch .num-container .houres .tens');        
        
        secondsOnes.textContent = Number(secondsOnes.textContent) + 1;

        if(Number(secondsOnes.textContent) > 9){
            secondsTens.textContent = Number(secondsTens.textContent) + 1;
            secondsOnes.textContent = Number(secondsOnes.textContent) % 10;
        }

        if(Number(secondsTens.textContent) > 5){
            minutesOnes.textContent = Number(minutesOnes.textContent) + 1;
            secondsTens.textContent = 0;
            secondsOnes.textContent = 0;
        }

        if(Number(minutesOnes.textContent) > 9){
            minutesTens.textContent = Number(minutesTens.textContent) + 1;
            minutesOnes.textContent = Number(minutesOnes.textContent) % 10;
        }

        if(Number(minutesTens.textContent) > 5){
            houresOnes.textContent = Number(houresOnes.textContent) + 1;
            minutesTens.textContent = 0;
            minutesOnes.textContent = 0;
        }

        if(Number(houresOnes.textContent) > 9){
            houresTens.textContent = Number(houresTens.textContent) + 1;
            houresOnes.textContent = Number(houresOnes.textContent) % 10;
        }
        
    }, 1000)
}

function stopIntarval() {
    clearInterval(interval);
}

function reset() {
    document.querySelector('.stopwatch #num-container .seconds .ones').textContent = 0;
    document.querySelector('.stopwatch #num-container .seconds .tens').textContent = 0;

    document.querySelector('.stopwatch #num-container .minutes .ones').textContent = 0;
    document.querySelector('.stopwatch #num-container .minutes .tens').textContent = 0;

    document.querySelector('.stopwatch #num-container .houres .ones').textContent = 0;
    document.querySelector('.stopwatch #num-container .houres .tens').textContent = 0;
    
    stopIntarval()
    document.querySelector('.stopwatch #start').classList.remove("hide");
    document.querySelector('.stopwatch #stop').classList.add("hide");
    document.querySelector('.stopwatch #start').textContent = 'start';
}


document.querySelector('.stopwatch #start').addEventListener('click', () => {
    document.querySelector('.stopwatch #start').classList.toggle("hide");
    document.querySelector('.stopwatch #stop').classList.toggle("hide");
})

document.querySelector('.stopwatch #stop').addEventListener('click', () => {
    document.querySelector('.stopwatch #start').classList.toggle("hide");
    document.querySelector('.stopwatch #stop').classList.toggle("hide");
    if(Number(document.querySelector('.stopwatch .num-container .seconds .ones').textContent) > 0){
        document.querySelector('.stopwatch #start').textContent = 'resume';
    }
})

document.querySelector('.stopwatch #start').addEventListener('click', startIntarval)

document.querySelector('.stopwatch #stop').addEventListener('click', stopIntarval)

document.querySelector('.stopwatch #reset').addEventListener('click', reset)
/*end stop watch*/