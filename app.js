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
Telegram.WebApp.setHeaderColor('#1a1a2e');
Telegram.WebApp.setBackgroundColor('#0f3460');

// Получаем пользователя
const user = Telegram.WebApp.initDataUnsafe.user;
const userNameEl = document.getElementById("greeting");
const pointsEl = document.getElementById("points");

// Функция для анимации появления элементов
function animateElement(element, delay = 0) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease';
    
    setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, delay);
}

// Функция для обновления баллов с анимацией
function updatePoints(newPoints) {
    const currentPoints = parseInt(pointsEl.textContent.match(/\d+/)[0]);
    const difference = newPoints - currentPoints;
    
    if (difference > 0) {
        pointsEl.style.color = '#4CAF50';
        setTimeout(() => {
            pointsEl.style.color = '#4a90e2';
        }, 1000);
    }
    
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

// Обработчики для меню
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const menuText = this.querySelector('span').textContent;
            console.log(`Нажата кнопка: ${menuText}`);
            
            // Анимация нажатия
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 150);
        });
    });
    
    // Анимация появления элементов
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
});

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
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
    
    // Здесь можно добавить функциональность копирования или сканирования
    console.log('QR код нажат');
});