const products = [
    { id: 1, title: 'Notebook', image: 'https://via.placeholder.com/200x150', price: 2000 },
    { id: 2, title: 'Mouse', image: 'https://via.placeholder.com/200x150', price: 20 },
    { id: 3, title: 'Keyboard', price: 200 },
    { id: 4, title: 'Gamepad', image: 'https://via.placeholder.com/200x150', price: 50 },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (title,image="https://via.placeholder.com/200x150", price) => {
    return `<div class="product-item">
                <img src=${image} alt="фото товара">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Добавить в корзину</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title,item.image,item.price));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);