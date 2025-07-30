// Эмуляция (для разработки)
if (!window.Telegram) {
    window.Telegram = {
        WebApp: {
            initDataUnsafe: {
                user: { id: 123456789, first_name: "Нико" }
            },
            ready: () => {},
            expand: () => {}
        }
    };
}

// Готовим интерфейс
Telegram.WebApp.ready();
Telegram.WebApp.expand();

// Получаем пользователя
const user = Telegram.WebApp.initDataUnsafe.user;
const userNameEl = document.getElementById("user-name");
const bonusEl = document.getElementById("bonus");

if (user) {
    userNameEl.textContent = `Привет, ${user.first_name}!`;

    // Здесь позже будем получать бонусы с бэкенда
    // Пока статика
    // bonusEl.textContent = "💎 Бонусы: 10";

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
        // bonusEl.textContent = `💎 Бонусы: ${data.bonus || 0}`;
    })
    .catch(error => {
        console.error('Ошибка при сохранении:', error);
    });
}

// QR-код (заглушка)
// Позже: генерация QR с user.id
document.getElementById("qr-code").innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="220" height="220" viewBox="0 0 220 220">
        <rect width="220" height="220" fill="white"/>
        <rect x="40" y="40" width="20" height="20" fill="black"/>
        <rect x="80" y="40" width="20" height="20" fill="black"/>
        <rect x="160" y="40" width="20" height="20" fill="black"/>
        <rect x="40" y="80" width="20" height="20" fill="black"/>
        <rect x="160" y="80" width="20" height="20" fill="black"/>
        <rect x="40" y="160" width="20" height="20" fill="black"/>
        <rect x="80" y="160" width="20" height="20" fill="black"/>
        <rect x="160" y="160" width="20" height="20" fill="black"/>
    </svg>
`;