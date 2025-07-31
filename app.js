// Инициализация Telegram WebApp
Telegram.WebApp.ready();
Telegram.WebApp.expand();
Telegram.WebApp.setHeaderColor('#000');
Telegram.WebApp.setBackgroundColor('#000');

// Получаем элементы DOM
const usernameEl = document.getElementById("username");
const pointsEl = document.getElementById("points");
const logoEl = document.getElementById("logo");
const qrCodeEl = document.getElementById("qr-code");

// Анимация появления элемента
function animateElement(element, delay = 0) {
    if (!element) return;
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.7s cubic-bezier(.4,1.4,.6,1)';
    setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, delay);
}

// Обновление баллов
function updatePoints(points) {
    pointsEl.textContent = `${points} баллов`;
}

// Создание QR-кода (заглушка)
function generateQRCode(data) {
    qrCodeEl.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #333; font-size: 14px;">
            QR-код<br>${data}
        </div>
    `;
}

// Тактильная обратная связь
function createHapticFeedback() {
    if ('vibrate' in navigator) navigator.vibrate(40);
}

// Получение имени пользователя
function getUserDisplayName(user) {
    if (!user) return 'Гость';
    
    if (user.first_name) {
        return user.first_name;
    } else if (user.username) {
        return `@${user.username}`;
    } else {
        return `user_${user.id}`;
    }
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    // Получаем данные пользователя из Telegram
    const user = window.Telegram?.WebApp?.initDataUnsafe?.user || null;
    
    // Устанавливаем имя пользователя
    usernameEl.textContent = getUserDisplayName(user);
    
    // Устанавливаем баллы
    updatePoints(150);
    
    // Генерируем QR-код
    const userId = user ? user.id : 'guest';
    generateQRCode(`user_id:${userId}`);
    
    // Анимация появления элементов
    const elements = [logoEl, usernameEl, pointsEl, qrCodeEl];
    elements.forEach((el, i) => animateElement(el, i * 120));
    
    // Обработчики кнопок
    const buttons = {
        'history-btn': 'История покупок будет доступна в следующем обновлении',
        'cafe-btn': 'Информация о кафе будет доступна в следующем обновлении',
        'loyalty-btn': 'Информация о системе лояльности будет доступна в следующем обновлении'
    };
    
    Object.entries(buttons).forEach(([id, message]) => {
        document.getElementById(id).onclick = function() {
            createHapticFeedback();
            alert(message);
        };
    });
    
    // Анимация при клике на QR-код
    qrCodeEl.addEventListener('click', function() {
        createHapticFeedback();
        this.style.transform = 'scale(0.96)';
        setTimeout(() => { 
            this.style.transform = 'scale(1)'; 
        }, 120);
    });
});