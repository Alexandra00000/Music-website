// declar variabilele pentru song si icon ptc pe astea le voi folosi

let mySong = document.getElementById('mySong');
let icon = document.getElementById('icon');

// folosesc event-ul pe icon pt click ori in modul de mai jos sau in modul de si mai jos si fac o functie
icon.onclick = function(){
    // am nevoie de un if ptc daca song ul este paused trebuie sa folosesc play method
    if(mySong.paused){
        mySong.play();
        // mai jos schimb imaginea
        icon.src = "media/pause.png";
    }else{
        mySong.pause();
        icon.src = "media/play.png";
    }
}

// icon.addEventListener('click', function() {
//     if(mySong.paused){
//         mySong.play();
//         icon.src = "media/pause.png";
//     }else{
//         mySong.pause();
//         icon.src = "media/play.png"
//     }
// })