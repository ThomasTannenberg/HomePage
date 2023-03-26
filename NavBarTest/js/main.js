
function fibonacciGenerator (n) {
	var fibuLin = [];

	if (n==1) {
		fibuLin = [0];
	}
	else if (n==2) {
		fibuLin = [0, 1]
	}
	else {
		fibuLin = [0, 1]

		for (var i = 2; i < n; i++) {
			fibuLint.push(fibuLin[fibuLin.length - 2] + fibuLin[fibuLin.length - 1])
		}
	}

	return fibuLin;

}

fibuLin = fibonacciGenerator(1);
console.log(fibuLin)