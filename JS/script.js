import {recomend, sales, think, more_info, footer} from './data.js'



const container = document.querySelector('.cont')

for(let item of recomend) {
    container.innerHTML += `
        <div class="box">
            <div class="${item.img}">
                <div class="like">
                    <img src="./img/like.svg" alt="">
                </div>
            </div>
            <div class="display">
                <p class="title">${item.desc}</p>
                <p class="price">${item.price}грн</p>
            </div>
        </div>
    `
}

const conrainer_2 = document.querySelector('.cont2')

for(let item of sales){
    let sale = item.price / item.sale
    sale = item.price - sale
    conrainer_2.innerHTML += `
            <div class="box">
                <div class="${item.img}">
                    <div class="like">
                        <img src="./img/like.svg" alt="">
                    </div>
                    <p class="sale">SALE</p>
                </div>
                <div class="display">
                    <p class="title">${item.desc}</p>
                    <div class="price_div">
                        <div></div>
                        <p class="l_price">${item.price} грн</p>
                        <p class="s_price">${sale} грн</p>
                    </div>
                </div>
            </div>
    `
}


let conrainer_3 = document.querySelector('.cont3')

for(let item of think) {

    conrainer_3.innerHTML += `
            <div class="block">
                <img src="./img/${item.img}.png">
                <p class="name">${item.name}</p>
                <p class="dsc">${item.desc}</p>
                <p class="data">${item.date}</p>
            </div>
    `
}


let conrainer_4 = document.querySelector('.cont4')

for(let item of more_info) {
    conrainer_4.innerHTML += `
        <div class="karopka">
            <div class="img"></div>
            <p class="title_2">${item.title}</p>
            <p class="dsc_2">${item.desc}</p>
            <a href="#" class="link">Читать больше</a>
        </div>
    `
}

let right = document.querySelector('.right')

for(let item of footer){
    right.innerHTML += `
    <div class="row">
        <p class="title">${item.title}</p>
        <a href="#">${item.p1}</a>
        <a href="#">${item.p2}</a>
        <a href="#">${item.p3}</a>
        <a href="#">${item.p4}</a>
        <a href="#">${item.p5}</a>
    </div>
    `
}



