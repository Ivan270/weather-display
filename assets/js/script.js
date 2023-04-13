let interruptor = document.querySelector('#input');
let bigTemp = document.getElementById('bigTemp');
let bigTempValue = document.getElementById('bigTemp').getAttribute('value');
let sun = document.getElementById('sun');
let mon = document.getElementById('mon');
let tue = document.getElementById('tue');
let wed = document.getElementById('wed');
let thu = document.getElementById('thu');
let fri = document.getElementById('fri');
let sat = document.getElementById('sat');
let week = [sun, mon, tue, wed, thu, fri, sat];

// Convertidor de Unidad celsius a fah
let toFah = (celsius) => {
	let fahrenheit = parseFloat((celsius * 1.8 + 32).toFixed(1));
	return fahrenheit;
};
// Inyecta al documento unidad de temperatura convertida dependiendo de si recibe 'fah' o 'celsius'
let asignTemp = (tempUnit) => {
	week.forEach((day) => {
		if (tempUnit == 'fah') {
			day.innerText = toFah(day.getAttribute('value'));
		} else if (tempUnit == 'celsius') {
			day.innerText = day.getAttribute('value');
		}
	});
};
// Asigna unidad de temperatura dependiendo de posicion del toggle
let convert = (user, checkbox) => {
	if (checkbox.checked) {
		// FAHRENHEIT
		bigTemp.innerText = toFah(bigTempValue);
		asignTemp('fah');
	} else {
		// CELSIUS
		bigTemp.innerText = bigTempValue;
		asignTemp('celsius');
	}
};
