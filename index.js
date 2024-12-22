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

limitNode.innerText = LIMIT;

buttonNode.addEventListener('click', function () {
    // Получение введенного значения
    if (!inputNode.value) {
        alert('Введите сумму расхода');
        return;
    }

    const expense = parseInt(inputNode.value);





    expenses.push({ amount: expense, date: new Date().toLocaleString() });


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
});

function updateHistory() {
    let historyHTML = '';
    expenses.forEach((expense, index) => {

        setTimeout(function  () {

            buttonNode.textContent = 'Добавить расход';


        }, 1000)




        get = () => {
            return buttonNode.textContent = 'Вы добавили';
        }
        get()





        historyHTML += `
                    <div class="history-item">
                        <strong>${index + 1}. ${expense.amount}$</strong>
                        <br>
                        Дата добавления: ${expense.date}
                    </div>
                `;
    });

    historyNode.innerHTML = historyHTML;


}


limitButtonNode.addEventListener('click', function () {


  if(!limitInputNode.value){
    alert("Введите лимит")
    return
  }


    LIMIT = limitInputNode.value;

    limitNode.innerText = LIMIT;

    setTimeout(function () {
        limitButtonNode.textContent = 'Добавить'
    }, 500)

    return limitButtonNode.textContent = 'Вы задали лимит'
    

})



//Использовал Chat gpt в некторых моментах но 90% написано мной


