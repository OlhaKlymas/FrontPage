export default {
	render: function(data) {
		let	bodyS = document.getElementsByClassName('salaryBox')[0],
			bodyC = document.getElementsByClassName('currency')[0];

			let div = document.createElement('div'),
				input1 = document.createElement('input'),
				input2 = document.createElement('input'),
				res1 = document.createElement('input'),
				res2 = document.createElement('input'),
				p1 = document.createElement('p'),
				p2 = document.createElement('p'),
				p3 = document.createElement('p'),
				p4 = document.createElement('p');
			input1.setAttribute('type', 'text');
			input1.setAttribute('id', 'mySalary');
			input1.setAttribute('value', 400);
			input1.setAttribute('readonly', 'readonly');
			res1.setAttribute('type', 'text');
			res1.setAttribute('id', 'myRes');
			input2.setAttribute('type', 'text');
			input2.setAttribute('id', 'salary');
			res2.setAttribute('type', 'text');
			res2.setAttribute('id', 'res');
			p1.classList.add('currencyP');
			p2.classList.add('currencyP');
			p3.classList.add('currencyP');
			p4.classList.add('currencyP');
			p1.innerHTML = "Желаемая зарплата в USD";
			p2.innerHTML = "Это будет";
			p3.innerHTML = "Вы можете мне предложить зарплату в USD";
			p4.innerHTML = "Это будет";
			div.appendChild(p1);
			div.appendChild(input1);
			div.appendChild(p2);
			div.appendChild(res1);
			div.appendChild(p3);
			div.appendChild(input2);
			div.appendChild(p4);
			div.appendChild(res2);
			div.classList.add('currencyDiv');
			bodyS.appendChild(div);

		data.map(el => {
			let input = document.createElement('input'),
				label = document.createElement('label');
			label.innerHTML = el.ccy;
			input.setAttribute('type', 'radio');
			input.setAttribute('name', 'curr');
			input.classList.add('curr');
			input.setAttribute('id', el.ccy);
			input.setAttribute('value', el.buy);
			label.appendChild(input);
			return label;
		}).forEach(function(el){
				bodyC.appendChild(el);
		});

		let inputUSD = document.getElementById('USD'),
			inputBTC = document.getElementById('BTC');
		inputUSD.setAttribute('checked', 'checked');
    	inputBTC.value = inputBTC.value * inputUSD.value;
	}
}