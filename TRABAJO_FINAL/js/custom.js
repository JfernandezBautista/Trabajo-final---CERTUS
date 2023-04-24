const btnCart = document.querySelector('.container-cart-icon');
const containerCartproductos = document.querySelector(
    '.container-cart-productos'
);

btnCart.addEventListener('click', () => {
    containerCartproductos.classList.toggle('hidden-cart');
});
const cartInfo = document.querySelector('.cart-producto');
const rowproducto = document.querySelector('.row-producto');

/* Lista de todos los contenedores de productoos */
const productosList = document.querySelector(".contenedor-item");
/* Variable de arreglos de productoos */
let allproductos = [];

const valorTotal = document.querySelector('.total-pagar')

const countproductos = document.querySelector('#contador-productoos')

productosList.addEventListener('click', e => {
    if(e.target.classList.contains('btn-add-cart')){
        const producto = e.target.parentElement

        const infoproducto = {
            quantity: 1,
            title: producto.querySelector('h2').innerHTML,
            title: producto.querySelector('p').innerHTML,
        };

        const exits = allproductos.some(producto => producto.title === infoproducto.title)
        if(exits){
            const productos = allproductos.map(producto => {
                if(producto.title === infoproducto.title){
                    producto.quantity++
                    return producto
                }
                else{
                    return producto
                }
            })
            allproductos = [...productos]
        }else{
            allproductos = [...allproductos, infoproducto]
        }

        showHTML();
    }
})

/* Función para mostrar HTML */
const showHTML = () => {
    /* Limpiar html */
    rowproducto.innerHTML = '';

    let total = 0;
    let totalOfproductos = 0;



    allproductos.forEach(producto =>{
        const containerproducto = document.createElement('div')
        containerCartproductos.classList.add('cart-producto')
        
        containerproducto.innerHTML = `
            <div class="info-cart-producto">
                <span class="cantidad-productoo-carrito">${producto.quantity}</span>
                <p class="titulo-productoo-carrito">${producto.title}</p>
                <span class="precio-productoo-carrito">${producto.price}</span>
            </div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="icon-close"
        >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
        />
        </svg>
    `

    rowproducto.append(containerproducto)
    });

}

/* Me perdi D': */