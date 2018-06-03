/*TEST3*/
function f3(hostName) {
 	let parts = hostName.split(".");
 	let count=0;

 	for (var i = 0; i < parts.length; i++) { 
    	if(/^[\da-zA-Z_-]+$/.test(parts[i]))
 		 	count++;
 		else
 			return 0 ; 
	}
 	return count;
 }

 console.log(f3("hh-1ag.jgsj1_414.1755"));