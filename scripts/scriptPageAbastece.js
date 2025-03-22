const formulario = document.querySelector(".formulario__container");
const textoRespostaResultado = document.querySelector('.textoRespostaFormularioResultado');
const textoRespostaFormularioCombustivel = document.querySelector('.textoRespostaFormularioCombustivel');
const btnLimparCampos = document.querySelector('.btnLimparCampos');

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const valorEtanol = Number(document.querySelector('#inValorEtanol').value.replace(',','.'));
    const valorGasolina = Number(document.querySelector('#inValorGasolina').value.replace(',','.'));

    console.log(`Valor do etanol: ${valorEtanol}`)
    console.log(`Valor da gasolina: ${valorGasolina}`)

    const resultadoCalculo = Number((valorEtanol / valorGasolina).toFixed(2));

    console.log(resultadoCalculo)
    textoRespostaResultado.innerHTML = `O cálculo deu ${resultadoCalculo}`

    if (resultadoCalculo < 0.7) {
        textoRespostaFormularioCombustivel.innerHTML = `O que garante que o <span class="destaqueFormulario">ETANOL</span> é o mais vantajoso!`
    } else {
        textoRespostaFormularioCombustivel.innerHTML = `O que garante que a <span class="destaqueFormulario">Gasolina</span> é a mais vantajosa!`
    }
})

btnLimparCampos.addEventListener('click', () => {
    // window.location.reload();
    formulario.inValorEtanol.value = '';
    formulario.inValorGasolina.value = '';
})