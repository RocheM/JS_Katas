function sumDigiPow(rangeMin, rangeMax){
	var results = [];
	for(var i = rangeMin; i < rangeMax; i++){
		if(isSumOfPows(i)){
			results.push(i);
		}
	}
	return results;
}

function isSumOfPows(numberToCheck){
	var digits = numberToCheck.toString().split("");
	var count = 0;

	for(var i = 0; i < digits.length; i++){
		count += Math.pow(digits[i], i + 1);
	}
	
	return count == numberToCheck;
}

module.exports.sumDigiPow = sumDigiPow;