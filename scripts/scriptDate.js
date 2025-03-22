const anoSistema = new Date().getFullYear();

const direitos_reservados= document.querySelector('.direitos_reservados');
console.log(anoSistema)
direitos_reservados.innerText = `Ⓒ EconomizaAi, ${anoSistema}`