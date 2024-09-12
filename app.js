document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("products-container");

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");

        // Додаємо зображення товару
        const img = document.createElement("img");
        img.src = `photos/${product.photo}`;
        img.alt = product.name;

        // Назва товару
        const title = document.createElement("h2");
        title.textContent = product.name;

        // Ціна товару
        const price = document.createElement("p");
        price.classList.add("price");
        price.textContent = `${product.price} грн`;

        // Додаємо елементи в контейнер товару
        productElement.appendChild(img);
        productElement.appendChild(title);
        productElement.appendChild(price);

        // Додаємо клік подію для переходу на сторінку товару
        productElement.addEventListener('click', () => {
            window.location.href = `product.html?id=${product.id}`;
        });

        // Додаємо товар у контейнер сторінки
        container.appendChild(productElement);
    });
});
