function loadCurrencies(){
	let from = document.getElementById('from');
	let to = document.getElementById('to');
	let xHttp = new XMLHttpRequest();
	xHttp.onreadystatechange = function(){
		if(xHttp.readyState == 4 && xHttp.status == 200){
			let obj = JSON.parse(this.responseText);
			let options = '';
			for(key in obj.rates){
				options = options + '<option>'+key+'</option>';
			}
			from.innerHtml = options;
			to.innerHtml = options;
		}
	}
	xHttp.open('GET','https://api.fixer.io/latest', true);
	xHttp.send();
}

function convertCurrency(){
	let from = document.getElementById('from').value;
	let to = document.getElementById('to').value;
	let amount = document.getElementById('amount').value;
	let result = document.getElementById('result');
	if(from.length>0 && to.length>0 && amount.length>0){
		let xHttp = new XMLHttpRequest();
		xHttp.onreadystatechange = function(){
			if(xHttp.readyState == 4 && xHttp.status == 200){
				let obj = JSON.parse(this.responseText);
				let fact = obj.rates[to];
				if(fact!=undefined){
					result.innerHtml = parseFloat(amount)*parseFloat(fact);
				}
			}
	}
	xHttp.open('GET','https://api.fixer.io/latest'+from+'&symbols'+to, true);
	xHttp.send();
}