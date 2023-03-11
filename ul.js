'use strict';
const log = console.log;// Лог
const list = document.querySelector('.list'); // Список 
log(list);

const createList = () => {
	let array = [];

	while(true) {
		const userChoice = prompt(`'Введите сообщение: ,`); // Выбор пользователя
		if(userChoice === 'exit' || userChoice === null) {
			break;
		}

		if(!userChoice.trim()) {
			continue;
		}

		if(userChoice === 'del') {
			array.pop();
			continue;
		 }

		 if(userChoice === 'clear') {
			array = [];
			continue;
		}

		array.push(userChoice);
	}

	return array;
}

const showList = (array) => {
	for (let i = 0; i < array.length; i++) {
		const li = document.createElement('li'); // Создаём элеменет li 
		li.append(array[i]);// Добавляем текст во внутрь li
		list.append(li) // Добавляем li в начале списка
	}
}

showList(createList());


