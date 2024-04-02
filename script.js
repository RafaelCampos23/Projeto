const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonReduceAll = document.querySelector('.reduce-all')
const buttonFilterAll = document.querySelector('.filter-all')

let miLy = ''

function formatCurrency(value) {
    return value.toLocaleString('pt-br', { 
        style: 'currency', 
        currency: 'BRL' });
}

function showAll(arrayProducts) {
    let miLy = ''
    arrayProducts.forEach(product => {
        miLy += `<li>
            <img src="${product.src}">
            <p>${product.name}</p>
            <p class="item-price">R$ ${formatCurrency(product.price)}</p>
        </li>`
    })

    list.innerHTML = miLy
}

function mapAllItens() {
    const newPrices = menuOptions.map(product => ({
        ...product,
        price: product.price * 0.9
    }))

    showAll(newPrices)
}


function reduceAllItens() {
    const totalValue = menuOptions.reduce((acc, value) => {
        return acc + value.price
    }, 0)

    list.innerHTML = `<li><p>A soma de todos os itens do menu é de R$ ${formatCurrency(totalValue)}</p>
    </li>`
}

function filterAllItens() {
    const veganItens = menuOptions.filter(product => product.vegan)

    showAll(veganItens)
}








buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItens)
buttonReduceAll.addEventListener('click', reduceAllItens)
buttonFilterAll.addEventListener('click', filterAllItens)









