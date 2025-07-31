// Инициализация Telegram WebApp
if (typeof Telegram !== 'undefined' && Telegram.WebApp) {
    Telegram.WebApp.ready();
    Telegram.WebApp.expand();
    Telegram.WebApp.setHeaderColor('#000');
    Telegram.WebApp.setBackgroundColor('#000');
} else {
    console.warn('Telegram WebApp не доступен');
}

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

// Получение данных пользователя из Telegram WebApp
function getUserData() {
    // Проверяем доступность Telegram WebApp
    if (typeof Telegram === 'undefined' || !Telegram.WebApp) {
        console.warn('Telegram WebApp недоступен');
        return null;
    }
    
    // Попробуем несколько способов получения данных пользователя
    const user = 
        Telegram.WebApp.initDataUnsafe?.user ||
        Telegram.WebApp.initData?.user ||
        null;
    
    console.log('Telegram WebApp data:', {
        initDataUnsafe: Telegram.WebApp.initDataUnsafe,
        initData: Telegram.WebApp.initData,
        user: user
    });
    
    return user;
}

// Получение имени пользователя
function getUserDisplayName(user) {
    if (!user) return 'Гость';
    
    console.log('User data:', user);
    
    if (user.first_name) {
        return user.first_name;
    } else if (user.username) {
        return `@${user.username}`;
    } else {
        return `user_${user.id}`;
    }
}

// Обновление имени пользователя
function updateUsername() {
    const user = getUserData();
    const displayName = getUserDisplayName(user);
    console.log('Display name:', displayName);
    usernameEl.textContent = displayName;
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM загружен');
    console.log('Telegram доступен:', typeof Telegram !== 'undefined');
    console.log('Telegram.WebApp доступен:', typeof Telegram !== 'undefined' && Telegram.WebApp);
    
    // Обновляем имя пользователя
    updateUsername();
    
    // Устанавливаем баллы
    updatePoints(150);
    
    // Генерируем QR-код
    const user = getUserData();
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
    
    // Попробуем обновить имя пользователя через небольшую задержку
    setTimeout(updateUsername, 1000);
    setTimeout(updateUsername, 2000);
    setTimeout(updateUsername, 3000);
});