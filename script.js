document.getElementById('botones').style.display = 'none'

//Comprobar que el navegador soporta esta API
if(window.File && window.FileReader && window.FileList){
    console.log("API'S soportada");
}else{
    alert("Este navegador no soporta la API");
}

function ficheroSeleccionado(event){
    let files = event.target.files;
    let f = files[0];

    //Si es video
    if(!f.type.match('video.*')){
        alert("NO ES UN VIDEO");
        return;
    }

    let reader = new FileReader();

    reader.onload = (function(theFile){
        alert("Cargando.....")
        return function(e){
            document.getElementById('botones').style.display = 'block'
            video = document.getElementById("video");

            video.setAttribute("src",e.target.result);
            video.setAttribute("title",escape(theFile.name));
            video.setAttribute('autoplay', 'autoplay');
            video.setAttribute('controls','');
            video.setAttribute('loadding', 'lazy')
        }
    })
    (f);

    reader.readAsDataURL(f);
}

function reproducirVideo(){
    video = document.getElementById("video");
    video.play();
}

function pausarVideo(){
    video = document.getElementById("video");
    video.pause();
}

function subirVolumen(){
    video = document.getElementById("video");
    if(video.volume < 1){
        video.volume = video.volume + 0.1;
        console.log(video.volume);
    }
}

function bajarVolumen(){
    video = document.getElementById("video");

    if(video.volume > 0){
        video.volume = video.volume - 0.1;
        console.log(video.volume);
    }
   
}


document.getElementById("fichero").addEventListener("change",ficheroSeleccionado, false);
document.getElementById("reproducir").addEventListener("click",reproducirVideo , false);
document.getElementById("pausar").addEventListener("click",pausarVideo , false);
document.getElementById("subirV").addEventListener("click",subirVolumen , false);
document.getElementById("bajarV").addEventListener("click",bajarVolumen , false);