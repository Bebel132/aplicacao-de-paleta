let nCor = document.querySelectorAll('.nCor');
let codCor = document.querySelectorAll('.codCor');

let paleta = [
    '#14213D',
    '#FCA311',
    '#E08A00',
    '#000000',
    '#FFFFFF',
]

for(let i=0; i<nCor.length; i++){
    nCor[i].append(document.createTextNode(paleta[i]));
    codCor[i].value = paleta[i];
}

function mudarInterface(pal){
    let tags = [
        document.querySelector(".header"),
        document.querySelector(".aside"),
        document.querySelector(".main"),
        document.querySelector(".footer"),
        document.querySelector(".container-layout")
    ]

    for(let i=0; i<tags.length; i++){
        if(i == tags.length-1){
            tags[tags.length-1].style.color = pal[4]
        } else {
            tags[i].style.background = pal[i];
        }
    }
}

mudarInterface(paleta)

codCor.forEach(e => {
    e.addEventListener('change', () => {
        e.parentNode.childNodes[1].innerHTML = "";
        e.parentNode.childNodes[1].append(document.createTextNode(e.value.toUpperCase()))
        paleta[e.id] = e.value.toUpperCase();
        mudarInterface(paleta)
    })
})

document.querySelector(".gerar").addEventListener('click', () => {
    let saidaPaleta = document.querySelector('.saidaPaleta')
    saidaPaleta.innerHTML = "";
    paleta.forEach(e => {
        let tag = document.createElement('p')
        tag.append(document.createTextNode(e))
        saidaPaleta.append(tag)
    })
})