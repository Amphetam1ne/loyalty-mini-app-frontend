// Проверяем, в Telegram ли мы (для разработки)
if (!window.Telegram) {
    window.Telegram = {
        WebApp: {
            initDataUnsafe: {
                user: { id: 123456789, first_name: "Тестовый", username: "test" }
            },
            ready: () => console.log("Telegram WebApp ready (mock)"),
            expand: () => console.log("Telegram WebApp expanded (mock)")
        }
    };
}

// Получаем данные пользователя
const user = Telegram.WebApp.initDataUnsafe.user;

// Находим элементы на странице
const userNameEl = document.getElementById("user-name");
const userIdEl = document.getElementById("user-id");

if (user) {
    // Показываем имя
    userNameEl.textContent = user.first_name;

    // Показываем ID
    userIdEl.textContent = "ID: " + user.id;

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
    })
    .catch(error => {
        console.error('Ошибка при сохранении:', error);
    });
} else {
    userNameEl.textContent = "Гость";
    userIdEl.textContent = "ID: —";
}

// Готовим интерфейс Telegram
Telegram.WebApp.ready();
Telegram.WebApp.expand();