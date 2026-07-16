function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    if (typeof renderCart === 'function') {
        renderCart();
    }
}

function updateCartCount() {
    const cart = getCart();
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => el.textContent = total);
}

function addToCart(bookId) {
    const book = booksData[bookId];
    if (!book) return;
    let cart = getCart();
    const existing = cart.find(item => item.id === bookId);
    if (existing) {
        existing.quantity += 1;
    } else {
        const image = book.images ? book.images[0] : (book.image || 'public/images/default.png');
        cart.push({
            id: book.id,
            title: book.title,
            author: book.author,
            price: book.price,
            image: image,
            quantity: 1
        });
    }
    saveCart(cart);
    alert(`"${book.title}" добавлена в корзину!`);
}

function removeFromCart(bookId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== bookId);
    saveCart(cart);
}

function changeQuantity(bookId, delta) {
    let cart = getCart();
    const item = cart.find(i => i.id === bookId);
    if (!item) return;
    const newQty = item.quantity + delta;
    if (newQty <= 0) {
        removeFromCart(bookId);
        return;
    }
    item.quantity = newQty;
    saveCart(cart);
}

function clearCart() {
    if (confirm('Очистить корзину?')) {
        saveCart([]);
    }
}

function getTotal(cart) {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function renderCart() {
    const container = document.getElementById('cartContent');
    if (!container) return;
    const cart = getCart();
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <div class="emoji">📚</div>
                <p>Корзина пуста. Добавьте книги из каталога.</p>
            </div>
        `;
        return;
    }
    let html = '<div class="cart-items">';
    cart.forEach(item => {
        html += `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.title}">
                <div class="info">
                    <div class="title">${item.title}</div>
                    <div class="author">${item.author}</div>
                </div>
                <div class="price">${item.price} ₽</div>
                <div class="qty-control">
                    <button onclick="changeQuantity('${item.id}', -1)">−</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity('${item.id}', 1)">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart('${item.id}')">Удалить</button>
            </div>
        `;
    });
    html += '</div>';
    const total = getTotal(cart);
    html += `
        <div class="cart-total">
            <span class="total-label">Итого:</span>
            <span class="total-price">${total} ₽</span>
        </div>
        <div class="cart-actions">
            <button class="btn-clear" onclick="clearCart()">Очистить корзину</button>
            <button class="btn-checkout" onclick="alert('Оформление заказа (демо)')">Оформить заказ</button>
        </div>
    `;
    container.innerHTML = html;
}