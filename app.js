// Mobile-first, только для мобильных, без приветствия
if (!window.Telegram) {
    window.Telegram = {
        WebApp: {
            initDataUnsafe: {
                user: {
                    id: 123456789,
                    first_name: "Нико",
                    username: "niko_user"
                }
            },
            ready: () => {},
            expand: () => {},
            setHeaderColor: (color) => {},
            setBackgroundColor: (color) => {}
        }
    };
}

Telegram.WebApp.ready();
Telegram.WebApp.expand();
Telegram.WebApp.setHeaderColor('#000');
Telegram.WebApp.setBackgroundColor('#000');

const user = Telegram.WebApp.initDataUnsafe.user;
const usernameEl = document.getElementById("username");
const pointsEl = document.getElementById("points");

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

function updatePoints(newPoints) {
    pointsEl.textContent = `${newPoints} баллов`;
}

function generateQRCode(data) {
    const qrContainer = document.getElementById("qr-code");
    qrContainer.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 200 200">
            <rect width="200" height="200" fill="#fff"/>
            <rect x="20" y="20" width="8" height="8" fill="#000"/>
            <rect x="40" y="20" width="8" height="8" fill="#000"/>
            <rect x="60" y="20" width="8" height="8" fill="#000"/>
            <rect x="80" y="20" width="8" height="8" fill="#000"/>
            <rect x="100" y="20" width="8" height="8" fill="#000"/>
            <rect x="120" y="20" width="8" height="8" fill="#000"/>
            <rect x="140" y="20" width="8" height="8" fill="#000"/>
            <rect x="160" y="20" width="8" height="8" fill="#000"/>
            <rect x="180" y="20" width="8" height="8" fill="#000"/>
            <rect x="20" y="40" width="8" height="8" fill="#000"/>
            <rect x="60" y="40" width="8" height="8" fill="#000"/>
            <rect x="100" y="40" width="8" height="8" fill="#000"/>
            <rect x="140" y="40" width="8" height="8" fill="#000"/>
            <rect x="180" y="40" width="8" height="8" fill="#000"/>
            <rect x="20" y="60" width="8" height="8" fill="#000"/>
            <rect x="40" y="60" width="8" height="8" fill="#000"/>
            <rect x="60" y="60" width="8" height="8" fill="#000"/>
            <rect x="80" y="60" width="8" height="8" fill="#000"/>
            <rect x="100" y="60" width="8" height="8" fill="#000"/>
            <rect x="120" y="60" width="8" height="8" fill="#000"/>
            <rect x="140" y="60" width="8" height="8" fill="#000"/>
            <rect x="160" y="60" width="8" height="8" fill="#000"/>
            <rect x="180" y="60" width="8" height="8" fill="#000"/>
            <rect x="20" y="80" width="8" height="8" fill="#000"/>
            <rect x="60" y="80" width="8" height="8" fill="#000"/>
            <rect x="100" y="80" width="8" height="8" fill="#000"/>
            <rect x="140" y="80" width="8" height="8" fill="#000"/>
            <rect x="180" y="80" width="8" height="8" fill="#000"/>
            <rect x="20" y="100" width="8" height="8" fill="#000"/>
            <rect x="40" y="100" width="8" height="8" fill="#000"/>
            <rect x="60" y="100" width="8" height="8" fill="#000"/>
            <rect x="80" y="100" width="8" height="8" fill="#000"/>
            <rect x="100" y="100" width="8" height="8" fill="#000"/>
            <rect x="120" y="100" width="8" height="8" fill="#000"/>
            <rect x="140" y="100" width="8" height="8" fill="#000"/>
            <rect x="160" y="100" width="8" height="8" fill="#000"/>
            <rect x="180" y="100" width="8" height="8" fill="#000"/>
            <rect x="20" y="120" width="8" height="8" fill="#000"/>
            <rect x="60" y="120" width="8" height="8" fill="#000"/>
            <rect x="100" y="120" width="8" height="8" fill="#000"/>
            <rect x="140" y="120" width="8" height="8" fill="#000"/>
            <rect x="180" y="120" width="8" height="8" fill="#000"/>
            <rect x="20" y="140" width="8" height="8" fill="#000"/>
            <rect x="40" y="140" width="8" height="8" fill="#000"/>
            <rect x="60" y="140" width="8" height="8" fill="#000"/>
            <rect x="80" y="140" width="8" height="8" fill="#000"/>
            <rect x="100" y="140" width="8" height="8" fill="#000"/>
            <rect x="120" y="140" width="8" height="8" fill="#000"/>
            <rect x="140" y="140" width="8" height="8" fill="#000"/>
            <rect x="160" y="140" width="8" height="8" fill="#000"/>
            <rect x="180" y="140" width="8" height="8" fill="#000"/>
            <rect x="20" y="160" width="8" height="8" fill="#000"/>
            <rect x="60" y="160" width="8" height="8" fill="#000"/>
            <rect x="100" y="160" width="8" height="8" fill="#000"/>
            <rect x="140" y="160" width="8" height="8" fill="#000"/>
            <rect x="180" y="160" width="8" height="8" fill="#000"/>
            <rect x="20" y="180" width="8" height="8" fill="#000"/>
            <rect x="40" y="180" width="8" height="8" fill="#000"/>
            <rect x="60" y="180" width="8" height="8" fill="#000"/>
            <rect x="80" y="180" width="8" height="8" fill="#000"/>
            <rect x="100" y="180" width="8" height="8" fill="#000"/>
            <rect x="120" y="180" width="8" height="8" fill="#000"/>
            <rect x="140" y="180" width="8" height="8" fill="#000"/>
            <rect x="160" y="180" width="8" height="8" fill="#000"/>
            <rect x="180" y="180" width="8" height="8" fill="#000"/>
        </svg>
    `;
}

function createHapticFeedback() {
    if ('vibrate' in navigator) navigator.vibrate(40);
}

document.addEventListener('DOMContentLoaded', function() {
    // Показываем first_name, если есть, иначе username
    if (user) {
        if (user.first_name) {
            usernameEl.textContent = user.first_name;  // Показываем имя: Niko
        } else if (user.username) {
            usernameEl.textContent = user.username;   // Если имени нет — юзернейм: Nikoniko94
        } else {
            usernameEl.textContent = `user_${user.id}`;
        }
    } else {
        usernameEl.textContent = 'Гость';
    }
    // Баллы
    updatePoints(150);
    // QR
    generateQRCode(`user_id:${user ? user.id : 'guest'}`);
    // Анимация появления
    [document.getElementById('logo'), usernameEl, pointsEl, document.getElementById('qr-code')].forEach((el, i) => animateElement(el, i*120));
    // Кнопки меню
    document.getElementById('history-btn').onclick = function() {
        createHapticFeedback();
        alert('История покупок будет доступна в следующем обновлении');
    };
    document.getElementById('cafe-btn').onclick = function() {
        createHapticFeedback();
        alert('Информация о кафе будет доступна в следующем обновлении');
    };
    document.getElementById('loyalty-btn').onclick = function() {
        createHapticFeedback();
        alert('Информация о системе лояльности будет доступна в следующем обновлении');
    };
    // QR tap
    document.getElementById('qr-code').addEventListener('click', function() {
        createHapticFeedback();
        this.style.transform = 'scale(0.96)';
        setTimeout(() => { this.style.transform = 'scale(1)'; }, 120);
    });
});