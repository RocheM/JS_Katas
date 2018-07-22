function printerError(s) {
	// your code
	var length = s.length;
	var errors = 0;
	for(var i = 0; i < s.length; i++){
		if(s.charCodeAt(i) < 0 || s.charCodeAt(i) > 109){
			errors++;
		}
	}
	return errors+"/"+length;
}

module.exports={printerError};