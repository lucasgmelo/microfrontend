import faker from 'faker';

const mount = (el) => {
  const carText = `<div>You have ${faker.datatype.number()} items in your cart</div>`

  el.innerHTML = carText;
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#cart-dev');

  if (el) {
    mount(el)
  }
}

export { mount }