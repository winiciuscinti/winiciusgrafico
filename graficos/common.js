const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const tickConfig = {
    color: getCSS('--secundary-color'), // Alterado para a cor secundária
    size: 18, // Tamanho aumentado para melhor visibilidade
    family: 'Arial, sans-serif' // Fonte alterada
}

export { getCSS, tickConfig }
