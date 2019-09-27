document.onkeydown = loop;

async function loop(e) {
    if(e.code != 'ArrowDown' && e.code != 'Space' && e.code != 'ArrowUp') return;
    clear();
    await sleep(7000);
    let shots = getTable(e);
    for(i = 0; i < shots.length; i++){
        showReady();
        await sleep(170);
        show(shots[i]);
        await sleep(800);
        hide('ready');
        hide('img');
        await sleep(getInterval(e));
    }
    success();
}

function clear() {
    hide('ready');
    hide('img');
    hide('success');
}

function getInterval(e){
    let factor = 1.1;
    let interval = 2500;
    if(e.code === 'ArrowDown'){
        interval = 2700;
    }
    if(e.code === 'ArrowUp'){
        interval = 2500;
    }
    return interval * factor;
}

function getTable(e) {

    let x0 = 1;
    let xk = 4;
    console.log(e);
    if(e.code === 'ArrowDown'){
        x0 = 3;
    }
    if(e.code === 'ArrowUp'){
        xk = 2;
    }
    let n = 12;
    let t = [];
    for( i = 0; i < n; i++){
        let a = getRandomInt(x0, xk+1);
        t.push(a);
    }

    console.log(t);
    // let t = [1, 3, 2, 4, 4, 1, 3];
    return t;
}

function showReady() {
    const img = document.getElementById("ready");
    img.style.visibility = 'visible';
    img.style.top = '100px';
    img.style.left = '400px';
}

function show(i) {
    console.log(i);

    let top = '';
    let left = '';
    if(i === 1){
        top='20px';
        left='20px';
    } else if (i === 2) {
        top='20px';
        left='1100px';
    } else if (i === 3) {
        top='500px';
        left='1100px';
    } else if (i === 4) {
        top='500px';
        left='20px';
    }
    const img = document.getElementById("img");
    img.style.visibility = 'visible';
    img.style.top = top;
    img.style.left = left;
}

function hide(id) {
    const img = document.getElementById(id);
    img.style.visibility = 'hidden';
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function success() {
    const img = document.getElementById("success");
    img.style.visibility = 'visible';
    img.style.top = '20px';
    img.style.left = '300px';
  }