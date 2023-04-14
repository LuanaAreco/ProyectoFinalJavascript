let list = document.querySelectorAll('.list .item');
list.forEach(item => {
    item.addEventListener('click', function(event){
        if(event.target.classList.contains('add')){
            var itemNew = item.cloneNode(true);
            let checkIsset  = false;

            let listCart = document.querySelectorAll('.cart .item');
            listCart.forEach(cart =>{
                if(cart.getAttribute('data-key') == itemNew.getAttribute('data-key')){
                    checkIsset = true;
                    cart.classList.add('danger');
                    setTimeout(function(){
                        cart.classList.remove('danger');
                    },1000)
                }
            })
            if(checkIsset == false){
                document.querySelector('.listCart').appendChild(itemNew);
            }

        }
    })
})
function Remove($key){
    let listCart = document.querySelectorAll('.cart .item');
    listCart.forEach(item => {
        if(item.getAttribute('data-key') == $key){
            item.remove();
            return;
        }
    })
}
const botonComprar = document.getElementById('boton-comprar');
botonComprar.addEventListener('click', function() {
  alert('¡Compra exitosa! Gracias por su compra.');
  const listCart = document.getElementById("cartId");
  while (listCart.firstChild) {
    listCart.removeChild(listCart.lastChild);
  }
});

function clearCart() {
    const listCart = document.getElementById("cartId");
  while (listCart.firstChild) {
    listCart.removeChild(listCart.lastChild);
  }
}
document.getElementById('clear-cart').addEventListener('click', clearCart);
