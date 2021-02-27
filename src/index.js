module.exports = function toReadable (number) {
    const lenghtNumber = findLengthNumber(number);

	if(lenghtNumber == 1){
		return makeFirstDigitReadableNumber(number);
	}
	else if(lenghtNumber == 2){
		return makeSecondDigitReadableNumber(number);
	}
	else if(lenghtNumber == 3){
		return makeThirdDigitsNumber(number);
	}
}
const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const firstTens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const dozens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function findLengthNumber(number){
	const numberString = ''+ number;
	return numberString.length;	
}

function makeFirstDigitReadableNumber(number){
	const readableValue = units[number];
	return readableValue;
}

function makeSecondDigitReadableNumber(number){
	const amountTens = Math.floor(number / 10);
	const amountUnits = number % 10;
	if(amountTens < 2){
		return firstTens[amountUnits];
	}
	return amountUnits > 0 ? `${dozens[amountTens]} ${units[amountUnits]}` : `${dozens[amountTens]}`;
}

function makeThirdDigitReadableNumber(number){
	const amountHundreds = Math.floor(number / 100);

	return `${units[amountHundreds]} hundred`;
}

function makeThirdDigitsNumber(number){
	const thirdDigitNumber = makeThirdDigitReadableNumber(number);
	if(number % 100 == 0)
	{
		return `${thirdDigitNumber}`;
	}
	else if(number % 100 < 10){
		const firstDigitNumber = makeFirstDigitReadableNumber(number % 100);
		return `${thirdDigitNumber} ${firstDigitNumber}`;
	}
	else{
		const secondDigitNumber = makeSecondDigitReadableNumber(number % 100);
		return `${thirdDigitNumber} ${secondDigitNumber}`;
	}
}
