var TAX = 0.18; //18% НДС

function calculateTotal(quantity, price) {
	var total = quantity * price * (1 + TAX);
	var formattedTotal = total.toFixed(2);
	return formattedTotal;
}


function sumTotal(quantity, price) {
	var totalTAX = quantity * price * TAX;
	var formattedTotal = totalTAX.toFixed(2);
	return formattedTotal;
}

// <!-- Переменная в качестве параметров -->
var message = 'За пределами функциии';
function warning(message) {
	alert(message);
}
// <!-- Переменная, созданная внутри функции -->
var message1 = 'За пределами функциии';
function warning_1() {
	var message1 = 'Внутри функции';
	console.log(message1);
}

// <!-- Глобальная переменная -->
var message_2 = 'Глобальная переменная';
function warning_2() {
	alert(message_2);
}
