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

// Плавная анимация появления элемента
function animateElement(element, delay = 0) {
    if (!element) return;
    element.style.opacity = '0';
    element.style.transform = 'translateY(40px)';
    element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, delay);
}

// Обновление баллов с анимацией
function updatePoints(points) {
    pointsEl.textContent = `${points} баллов`;
    pointsEl.style.transform = 'scale(1.1)';
    setTimeout(() => {
        pointsEl.style.transform = 'scale(1)';
    }, 200);
}

// Создание QR-кода
function generateQRCode(data) {
    qrCodeEl.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #333; font-size: 16px; font-weight: 500;">
            QR-код<br>${data}
        </div>
    `;
}

// Тактильная обратная связь
function createHapticFeedback() {
    if ('vibrate' in navigator) navigator.vibrate(30);
}

// Получение данных пользователя из Telegram WebApp
function getUserData() {
    if (typeof Telegram === 'undefined' || !Telegram.WebApp) {
        console.warn('Telegram WebApp недоступен');
        return null;
    }
    
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
    
    // Проверяем элементы
    const cafeBtn = document.getElementById('cafe-btn');
    const cafeInfoEl = document.getElementById('cafeInfo');
    console.log('Кнопка cafe-btn найдена:', cafeBtn);
    console.log('Элемент cafeInfo найден:', cafeInfoEl);
    
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
    elements.forEach((el, i) => animateElement(el, i * 150));
    
    // Обработчики кнопок
    if (cafeBtn) {
        cafeBtn.onclick = async function() {
            console.log('Кнопка "О кафе" нажата!');
            createHapticFeedback();

            console.log('Элемент cafeInfo найден:', cafeInfoEl);
            
            cafeInfoEl.style.display = 'block';
            cafeInfoEl.textContent = 'Загрузка...';
            cafeInfoEl.style.padding = '32px';
            cafeInfoEl.style.color = '#fff';
            cafeInfoEl.style.fontSize = '18px';
            cafeInfoEl.style.borderRadius = '20px';
            cafeInfoEl.style.backgroundColor = 'rgba(0,0,0,0.95)';
            cafeInfoEl.style.border = '1px solid rgba(255,255,255,0.1)';
            cafeInfoEl.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5)';
            cafeInfoEl.style.backdropFilter = 'blur(30px)';

            try {
                console.log('Отправляем запрос к API...');
                const response = await fetch('http://localhost:8000/api/cafe');
                console.log('Ответ получен:', response.status);
                
                if (!response.ok) throw new Error('Сервер вернул ошибку');

                const data = await response.json();
                console.log('Данные получены:', data);
                cafeInfoEl.textContent = data.text;
                
                setTimeout(() => {
                    cafeInfoEl.style.display = 'none';
                }, 4000);
            } catch (error) {
                console.error('Ошибка загрузки данных о кафе:', error);
                cafeInfoEl.textContent = 'Не удалось загрузить информацию';
                
                setTimeout(() => {
                    cafeInfoEl.style.display = 'none';
                }, 4000);
            }
        };
        console.log('Обработчик для cafe-btn установлен');
    } else {
        console.error('Кнопка cafe-btn не найдена!');
    }

    // Остальные кнопки
    ['history-btn', 'loyalty-btn'].forEach(id => {
        document.getElementById(id).onclick = function() {
            createHapticFeedback();
            alert('Этот раздел будет доступен в следующем обновлении');
        };
    });
    
    // Анимация при клике на QR-код
    qrCodeEl.addEventListener('click', function() {
        createHapticFeedback();
        this.style.transform = 'scale(0.95)';
        setTimeout(() => { 
            this.style.transform = 'scale(1)'; 
        }, 150);
    });
    
    // Обновление имени пользователя с задержкой
    setTimeout(updateUsername, 1000);
    setTimeout(updateUsername, 2000);
    setTimeout(updateUsername, 3000);
});