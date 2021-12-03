form = document.forms['Form'];

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    level = document.getElementById('lv').value;
    xp = document.getElementById('xp').value;
    if(level <= 25){
        var limitexp = level * 50 - 750;
    }
    if (level > 25){
        var limitexp = level * 100 - 2000;
    }
    
    while (xp >= limitexp) {
        level++;
        xp = xp - limitexp;
        limitexp = level * 100;
    }

    console.log(level);
    console.log(xp);
    console.log(limitexp);

    var formatado = document.getElementById('formatado');

    formatado.innerHTML = level + " (" + xp + "/" + limitexp + ")";
})