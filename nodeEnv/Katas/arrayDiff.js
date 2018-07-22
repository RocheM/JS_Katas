function checkDiff(arr1, arr2) {    	
	return arr1.filter(i => !arr2.includes(i));
}

module.exports.checkDiff = checkDiff;