let nCor = document.querySelectorAll('.nCor');
let codCor = document.querySelectorAll('.codCor');

let root = document.querySelector(':root');

let paleta = [
    '#008b8b',
    '#60dada',
    '#4E4E4E',
    '#7D7D7D',
    '#FFFFFF',
]

for(let i=0; i<nCor.length; i++){
    nCor[i].append(document.createTextNode(paleta[i]));
    codCor[i].value = paleta[i];
}

function mudarInterface(pal){
    for(let i=0; i<pal.length; i++){
        root.style.setProperty(`--cor-${i}`, `${paleta[i]}`)
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