let LIMIT = 10000;
const expenses = [];

const inputNode = document.querySelector('.js-input');
const buttonNode = document.querySelector('.js-button');
const limitNode = document.querySelector('.js-limit');
const sumNode = document.querySelector('.js-sum');
const balanceNode = document.querySelector('.js-balance');
const statusNode = document.querySelector('.js-status');
const historyNode = document.querySelector('.js-history');

const limitInputNode = document.querySelector('.input-limit');
const limitButtonNode = document.querySelector('.limit-btn');
const fileNode = document.querySelector('.file');
const selectNode = document.querySelector('.select');

limitNode.innerText = LIMIT;

buttonNode.addEventListener('click', function () {
    // Получение введенного значения
    if (!inputNode.value) {
        alert('Введите сумму расхода');
        return;
    }

    const expense = parseInt(inputNode.value);
    const category = selectNode.value; // Сохраняем текущую категорию

    expenses.push({ 
        amount: expense, 
        date: new Date().toLocaleString(),
        category: category // Сохраняем категорию в объекте расхода
    });

    inputNode.value = '';

    // Подсчет суммы расходов
    let sum = expenses.reduce((acc, curr) => acc + curr.amount, 0);
    sumNode.innerText = sum;

    // Обновление баланса
    const balance = LIMIT - sum;
    balanceNode.innerText = balance;

    // Обновление статуса
    if (balance < 0) {
        statusNode.innerText = 'Over limit';
        statusNode.style.color = 'red';
    } else {
        statusNode.innerText = 'Normal';
        statusNode.style.color = 'green';
    }

    // Обновление истории
    updateHistory();

    // Изменение текста кнопки с анимацией
    buttonNode.textContent = 'Вы добавили';
    setTimeout(function () {
        buttonNode.textContent = 'Добавить расход';
    }, 1000);
});

function updateHistory() {
    let historyHTML = '';
    expenses.forEach((expense, index) => {
        historyHTML += `
            <div class="history-item">
                <strong>${index + 1}. ${expense.amount}P - Потрачено на: ${expense.category}</strong>
                <br>
                Дата добавления: ${expense.date}
            </div>
        `;
    });

    historyNode.innerHTML = historyHTML;
}

limitButtonNode.addEventListener('click', function () {
    if (!limitInputNode.value) {
        alert("Введите лимит");
        return;
    }

    LIMIT = parseInt(limitInputNode.value); // Убедимся, что это число
    limitNode.innerText = LIMIT;

    // Анимация текста кнопки
    limitButtonNode.textContent = 'Вы задали лимит';
    setTimeout(function () {
        limitButtonNode.textContent = 'Изменить лимит';
    }, 1000);
});
