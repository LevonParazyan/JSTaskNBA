var ratings = [
		{
			name: "Stephen Curry",
			rate: 94,
		},
		{
			name: "Rodney Hood",
			rate: 92,
		},
		{
			name: "LeBron James",
			rate: 76,
		},
		{
			name: "Kyle Kuzma",
			rate: 75,
		},
		{
			name: "Kyrie Irving",
			rate: 87,
		},
		{
			name: "Andre Drummond",
			rate: 38,
		},
		{
			name: "Zach Lavine",
			rate: 81,
		},
		{
			name: "Deandre Jordan",
			rate: 45,
		}
	];
var chooseBaller = document.getElementById('choose');
var baller, ballerName;
for(var i = 0; i < ratings.length; i++) {
	baller = document.createElement('option');
	ballerName = document.createTextNode(ratings[i].name);
	baller.appendChild(ballerName);
	baller.value = ratings[i].rate;
	chooseBaller.appendChild(baller);
}
function toThrow() {
	var b = Math.random() * 100 ;
	var result = document.getElementById('result');
	chooseballer = document.getElementById('choose');
	if(b <= chooseBaller.value) {
		result.setAttribute('class','alert alert-success');
		result.classList.add('change');
		result.innerHTML = "Good";
	}
	else {
		result.setAttribute('class','alert alert-danger');
		result.classList.add('change');
		result.innerHTML = "Miss";
	}
	setTimeout(function() {
		result.classList.remove('change');
		result.style.display = "none";
	}, 1400)
}