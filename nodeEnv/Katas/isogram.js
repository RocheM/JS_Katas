function isIsogram(s){    
	var splitString = s.toLowerCase().split("");
	var uniqueList = new Set(splitString);

	return s.length == uniqueList.size;
}

module.exports.isIsogram = isIsogram;