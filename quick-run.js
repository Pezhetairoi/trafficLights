window.onload = function() {
    changeLamps();
};

var red1 = document.getElementById('red1'),
    yellow1 = document.getElementById('yellow1'),
    green1 = document.getElementById('green1'),
    red2 = document.getElementById('red2'),
    yellow2 = document.getElementById('yellow2'),
    green2 = document.getElementById('green2'),
    Colours = ["rgb(255,0,0)", "rgb(255,179,0)", "rgb(5,255,13)"],
    log = document.getElementById('log'),
    c = 0;

//initial states
red1.style.background = Colours[0];
yellow1.style.background = 'rgb(122,92,0)';
green1.style.background = 'rgb(0,128,12)';
red2.style.background = 'rgb(122,0,0)';
yellow2.style.background = 'rgb(122,92,0)';
green2.style.background = Colours[2];

function timedCount() {

    document.getElementById('count').value = c;

    if(c < 10) {
        log.innerHTML = '';
        c++;
        setTimeout(function(){
            timedCount()
        }, 1000);
        red1.style.background = Colours[0];
        yellow1.style.background = 'rgb(122,92,0)';
        green1.style.background = 'rgb(0,128,12)';
        red2.style.background = 'rgb(122,0,0)';
        yellow2.style.background = 'rgb(122,92,0)';
        green2.style.background = Colours[2];

        if(c > 8) {
            red1.style.background = Colours[0];
            yellow1.style.background = 'rgb(122,92,0)';
            green1.style.background = 'rgb(0,128,12)';
            red2.style.background = 'rgb(122,0,0)';
            yellow2.style.background = Colours[1];
            green2.style.background = 'rgb(0,128,12)';
            log.innerHTML = '[E, W] street yellow light on';
        }
    }else{
        log.innerHTML = '';
        //console.log(c);
        c++;
        setTimeout(function(){
            timedCount()
        }, 1000);
        red1.style.background = 'rgb(122,0,0)';
        yellow1.style.background = 'rgb(122,92,0)';
        green1.style.background = Colours[2];
        red2.style.background = Colours[0];
        yellow2.style.background = 'rgb(122,92,0)';
        green2.style.background = 'rgb(0,128,12)';

        if(c > 18) {
            red1.style.background = 'rgb(122,0,0)';
            yellow1.style.background = Colours[1];
            green1.style.background = 'rgb(0,128,12)';
            red2.style.background = Colours[0];
            yellow2.style.background = 'rgb(122,92,0)';
            green2.style.background = 'rgb(0,128,12)';
            log.innerHTML = '[S, N] street yellow light on';
            if(c > 19) {
                c = 0;
            }
        }
    }
};

function changeLamps() {
    timedCount();
}

