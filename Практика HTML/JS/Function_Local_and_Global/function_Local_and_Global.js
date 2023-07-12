// <!-- Локальная переменная в функции -->
var message = 'За пределами функций';
function warning() {
	var message = 'Внутри функции';
	alert(message);
}

// <!-- Глобальная переменная в функции  -->
var message_1 = 'За пределами функций';
function warning_1() {
	message_1 = 'Inside the function';
	alert(message_1); // 'Внутри функции'
}