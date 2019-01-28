console.log('test works');
console.log('OK-EKS');

async function loop() {
    let test = getTable(8);
    for(i = 0; i < test.length; i++){
        show(test[i]);
        await sleep(200);
        hide();
        await sleep(600);
    }
    success();
}

function getTable(n) {

    let t = [];
    for( i = 0; i < n; i++){
        let a = getRandomInt(1, 5);
        t.push(a);
    }

    console.log(t);
    // let t = [1, 3, 2, 4, 4, 1, 3];
    return t;
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
        left='800px';
    } else if (i === 3) {
        top='600px';
        left='800px';
    } else if (i === 4) {
        top='600px';
        left='20px';
    }
    const img = document.getElementById("img");
    img.style.visibility = 'visible';
    img.style.top = top;
    img.style.left = left;
}

function hide() {
    const img = document.getElementById("img");
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
  }