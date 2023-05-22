const fruits =[
    {id: 1, title: 'Яблоки', price: 20, img: 'https://f.vividscreen.info/soft/d3308e332baf787700ec74e2fe310f4d/Darth-Vader-1024x1024.jpg'},
    {id: 2, title: 'Апельсины', price: 30, img: 'https://f.vividscreen.info/soft/d3308e332baf787700ec74e2fe310f4d/Darth-Vader-1024x1024.jpg'},
    {id: 3, title: 'Манго', price: 40, img: 'https://f.vividscreen.info/soft/d3308e332baf787700ec74e2fe310f4d/Darth-Vader-1024x1024.jpg'}

]

const toHTML = fruit => `
<div class="col">
    <div class="card">
        <img class="card-img-top" style="height: 300px;" src="${fruit.img}" alt="${fruit.title}">
        <div class="card-body">
            <h5 class="card-title">${fruit.title}</h5>
            <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Посмотреть цену</a>
            <a href="#" class="btn btn-danger">Удалить</a>
        </div>
    </div>
</div>`

function render(){
    const html = fruits.map(toHTML).join('')
    document.querySelector('#fruits').innerHTML = html
}

render()

const priceModal = $.modal({
    title: `Цена на товар`,
    closable: true,
    width:'400px',
    footerButtons: [
        {text: 'Закрыть', type: 'primary', handler(){
            priceModal.close()
        }}
    ]
})

document.addEventListener('click', event => {
    const btnType = event.target.dataset.btn
    const id = +event.target.dataset.id

    if(btnType === 'price'){        
        const fruit = fruits.find(f => f.id === id)

        priceModal.setContent(`
            <p>Цена на ${fruit.title}: <strong>${fruit.price}$</strong></p>
        `)
        priceModal.open()

        console.log(id,fruit)
    }
})