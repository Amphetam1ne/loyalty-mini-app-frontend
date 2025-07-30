// Эмуляция Telegram WebApp (для разработки)
if (!window.Telegram) {
    window.Telegram = {
        WebApp: {
            initDataUnsafe: {
                user: { id: 123456789, first_name: "Нико" }
            },
            ready: () => {},
            expand: () => {},
            setHeaderColor: (color) => {},
            setBackgroundColor: (color) => {}
        }
    };
}

// Инициализация Telegram WebApp с темной темой
Telegram.WebApp.ready();
Telegram.WebApp.expand();

// Устанавливаем цвета для темной темы
Telegram.WebApp.setHeaderColor('#000000');
Telegram.WebApp.setBackgroundColor('#000000');

// Получаем пользователя
const user = Telegram.WebApp.initDataUnsafe.user;
const userNameEl = document.getElementById("greeting");
const pointsEl = document.getElementById("points");

// Функция для анимации появления элементов
function animateElement(element, delay = 0) {
    if (!element) return;
    
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.8s ease-out';
    
    setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, delay);
}

// Функция для обновления баллов (без анимации)
function updatePoints(newPoints) {
    pointsEl.textContent = `${newPoints} баллов`;
}

// Функция для генерации QR кода
function generateQRCode(data) {
    const qrContainer = document.getElementById("qr-code");
    
    // Простая заглушка QR кода с темной темой
    qrContainer.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
            <rect width="200" height="200" fill="#ffffff"/>
            <rect x="20" y="20" width="8" height="8" fill="#000000"/>
            <rect x="40" y="20" width="8" height="8" fill="#000000"/>
            <rect x="60" y="20" width="8" height="8" fill="#000000"/>
            <rect x="80" y="20" width="8" height="8" fill="#000000"/>
            <rect x="100" y="20" width="8" height="8" fill="#000000"/>
            <rect x="120" y="20" width="8" height="8" fill="#000000"/>
            <rect x="140" y="20" width="8" height="8" fill="#000000"/>
            <rect x="160" y="20" width="8" height="8" fill="#000000"/>
            <rect x="180" y="20" width="8" height="8" fill="#000000"/>
            
            <rect x="20" y="40" width="8" height="8" fill="#000000"/>
            <rect x="60" y="40" width="8" height="8" fill="#000000"/>
            <rect x="100" y="40" width="8" height="8" fill="#000000"/>
            <rect x="140" y="40" width="8" height="8" fill="#000000"/>
            <rect x="180" y="40" width="8" height="8" fill="#000000"/>
            
            <rect x="20" y="60" width="8" height="8" fill="#000000"/>
            <rect x="40" y="60" width="8" height="8" fill="#000000"/>
            <rect x="60" y="60" width="8" height="8" fill="#000000"/>
            <rect x="80" y="60" width="8" height="8" fill="#000000"/>
            <rect x="100" y="60" width="8" height="8" fill="#000000"/>
            <rect x="120" y="60" width="8" height="8" fill="#000000"/>
            <rect x="140" y="60" width="8" height="8" fill="#000000"/>
            <rect x="160" y="60" width="8" height="8" fill="#000000"/>
            <rect x="180" y="60" width="8" height="8" fill="#000000"/>
            
            <rect x="20" y="80" width="8" height="8" fill="#000000"/>
            <rect x="60" y="80" width="8" height="8" fill="#000000"/>
            <rect x="100" y="80" width="8" height="8" fill="#000000"/>
            <rect x="140" y="80" width="8" height="8" fill="#000000"/>
            <rect x="180" y="80" width="8" height="8" fill="#000000"/>
            
            <rect x="20" y="100" width="8" height="8" fill="#000000"/>
            <rect x="40" y="100" width="8" height="8" fill="#000000"/>
            <rect x="60" y="100" width="8" height="8" fill="#000000"/>
            <rect x="80" y="100" width="8" height="8" fill="#000000"/>
            <rect x="100" y="100" width="8" height="8" fill="#000000"/>
            <rect x="120" y="100" width="8" height="8" fill="#000000"/>
            <rect x="140" y="100" width="8" height="8" fill="#000000"/>
            <rect x="160" y="100" width="8" height="8" fill="#000000"/>
            <rect x="180" y="100" width="8" height="8" fill="#000000"/>
            
            <rect x="20" y="120" width="8" height="8" fill="#000000"/>
            <rect x="60" y="120" width="8" height="8" fill="#000000"/>
            <rect x="100" y="120" width="8" height="8" fill="#000000"/>
            <rect x="140" y="120" width="8" height="8" fill="#000000"/>
            <rect x="180" y="120" width="8" height="8" fill="#000000"/>
            
            <rect x="20" y="140" width="8" height="8" fill="#000000"/>
            <rect x="40" y="140" width="8" height="8" fill="#000000"/>
            <rect x="60" y="140" width="8" height="8" fill="#000000"/>
            <rect x="80" y="140" width="8" height="8" fill="#000000"/>
            <rect x="100" y="140" width="8" height="8" fill="#000000"/>
            <rect x="120" y="140" width="8" height="8" fill="#000000"/>
            <rect x="140" y="140" width="8" height="8" fill="#000000"/>
            <rect x="160" y="140" width="8" height="8" fill="#000000"/>
            <rect x="180" y="140" width="8" height="8" fill="#000000"/>
            
            <rect x="20" y="160" width="8" height="8" fill="#000000"/>
            <rect x="60" y="160" width="8" height="8" fill="#000000"/>
            <rect x="100" y="160" width="8" height="8" fill="#000000"/>
            <rect x="140" y="160" width="8" height="8" fill="#000000"/>
            <rect x="180" y="160" width="8" height="8" fill="#000000"/>
            
            <rect x="20" y="180" width="8" height="8" fill="#000000"/>
            <rect x="40" y="180" width="8" height="8" fill="#000000"/>
            <rect x="60" y="180" width="8" height="8" fill="#000000"/>
            <rect x="80" y="180" width="8" height="8" fill="#000000"/>
            <rect x="100" y="180" width="8" height="8" fill="#000000"/>
            <rect x="120" y="180" width="8" height="8" fill="#000000"/>
            <rect x="140" y="180" width="8" height="8" fill="#000000"/>
            <rect x="160" y="180" width="8" height="8" fill="#000000"/>
            <rect x="180" y="180" width="8" height="8" fill="#000000"/>
        </svg>
    `;
}

// Функция для создания тактильной обратной связи (для мобильных)
function createHapticFeedback() {
    if ('vibrate' in navigator) {
        navigator.vibrate(50);
    }
}

// Обработчики для меню с улучшенной анимацией
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach((item, index) => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const menuText = this.querySelector('span').textContent;
            console.log(`Нажата кнопка: ${menuText}`);
            
            // Создаем тактильную обратную связь
            createHapticFeedback();
            
            // Анимация нажатия
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 150);
            
            // Добавляем эффект пульсации
            this.style.boxShadow = '0 0 20px rgba(74, 144, 226, 0.5)';
            setTimeout(() => {
                this.style.boxShadow = 'none';
            }, 300);
            
            // Обработка конкретных кнопок
            switch(menuText) {
                case 'История покупок':
                    showPurchaseHistory();
                    break;
                case 'Информация о кафе':
                    showCafeInfo();
                    break;
                case 'Система лояльности':
                    showLoyaltyInfo();
                    break;
            }
        });
        
        // Добавляем анимацию при наведении (только для десктопа)
        if (window.matchMedia('(hover: hover)').matches) {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        }
    });
    
    // Анимация появления элементов с задержкой
    const elements = [
        document.getElementById('logo'),
        document.getElementById('greeting'),
        document.getElementById('points'),
        document.getElementById('qr-code'),
        document.querySelector('.bottom-menu')
    ];
    
    elements.forEach((element, index) => {
        if (element) {
            animateElement(element, index * 200);
        }
    });
    
    // Добавляем анимацию для логотипа при загрузке
    const logo = document.getElementById('logo');
    if (logo) {
        logo.addEventListener('load', function() {
            this.style.animation = 'logoFloat 3s ease-in-out infinite';
        });
    }
});

// Функции для обработки нажатий на кнопки меню
function showPurchaseHistory() {
    console.log('Показываем историю покупок');
    // Здесь можно добавить логику для отображения истории покупок
    alert('История покупок будет доступна в следующем обновлении');
}

function showCafeInfo() {
    console.log('Показываем информацию о кафе');
    // Здесь можно добавить логику для отображения информации о кафе
    alert('Информация о кафе будет доступна в следующем обновлении');
}

function showLoyaltyInfo() {
    console.log('Показываем информацию о системе лояльности');
    // Здесь можно добавить логику для отображения информации о системе лояльности
    alert('Информация о системе лояльности будет доступна в следующем обновлении');
}

// Обработка данных пользователя
if (user) {
    userNameEl.textContent = `Привет, ${user.first_name}!`;

    // Отправляем данные на бэкенд
    fetch('http://5.129.203.99:8000/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            telegram_id: user.id,
            first_name: user.first_name,
            username: user.username || null
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Пользователь сохранён:', data);
        updatePoints(data.bonus || 150);
    })
    .catch(error => {
        console.error('Ошибка при сохранении:', error);
        // Устанавливаем значения по умолчанию
        updatePoints(150);
    });
} else {
    // Значения по умолчанию если нет пользователя
    userNameEl.textContent = 'Привет, пользователь!';
    updatePoints(150);
}

// Генерируем QR код
generateQRCode(`user_id:${user ? user.id : '12345'}`);

// Добавляем интерактивность для QR кода
document.getElementById("qr-code").addEventListener('click', function() {
    createHapticFeedback();
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
    
    // Здесь можно добавить функциональность копирования или сканирования
    console.log('QR код нажат');
});

// Оптимизация для мобильных устройств
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Добавляем поддержку жестов для мобильных устройств
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Свайп вверх
            console.log('Свайп вверх');
        } else {
            // Свайп вниз
            console.log('Свайп вниз');
        }
    }
}