console.log('test works');
console.log('OK-EKS');

function loop() {
    let c = confirm('przywrócić domyślne podstawy ?');
    console.log(`c = ${c}`);
    // set('20px', '20px');
    // set('20px', '800px');
    // set('600px', '20px');
    set('600px', '800px');
}

function set(top, left) {
    i = document.getElementById("img");
    i.style.top=top;
    i.style.left=left;
}