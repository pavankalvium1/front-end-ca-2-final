document.getElementById('start').addEventListener('click', function() {
    const names = document.getElementById('names').value;
    const nicks = document.getElementById('nicks').value;

    if(names && nicks){
        localStorage.setItem('names',names);
        localStorage.setItem('nicks',nicks);
        window.location.href = './game.html';
    }
    else{
        alert('Please Fill The Details Completely Before Proceeding');
        return;
    }
});