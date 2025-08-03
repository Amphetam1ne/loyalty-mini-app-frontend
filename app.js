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
    document.getElementById('cafe-btn').onclick = async function() {
        createHapticFeedback();

        const cafeInfoEl = document.getElementById('cafeInfo');
        cafeInfoEl.style.display = 'block';
        cafeInfoEl.textContent = 'Загрузка...';
        cafeInfoEl.style.padding = '20px';
        cafeInfoEl.style.color = '#fff';
        cafeInfoEl.style.fontSize = '16px';
        cafeInfoEl.style.borderRadius = '16px';
        cafeInfoEl.style.backgroundColor = 'rgba(0,0,0,0.95)';
        cafeInfoEl.style.border = '2px solid #f093fb';
        cafeInfoEl.style.boxShadow = '0 8px 32px rgba(240, 147, 251, 0.3)';

        try {
            const response = await fetch('http://localhost:8000/api/cafe');
            if (!response.ok) throw new Error('Сервер вернул ошибку');

            const data = await response.json();
            cafeInfoEl.textContent = data.text;
            
            setTimeout(() => {
                cafeInfoEl.style.display = 'none';
            }, 3000);
        } catch (error) {
            console.error('Ошибка загрузки данных о кафе:', error);
            cafeInfoEl.textContent = 'Не удалось загрузить информацию';
            
            setTimeout(() => {
                cafeInfoEl.style.display = 'none';
            }, 3000);
        }
    };

// Остальные кнопки пока оставим с alert
['history-btn', 'loyalty-btn'].forEach(id => {
    document.getElementById(id).onclick = function() {
        createHapticFeedback();
        alert('Этот раздел будет доступен в следующем обновлении');
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