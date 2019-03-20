console.log("Hallo World");
// alert("Moin Welt");
document.write("Servus Welt");

var webworker = 1;
var erfolg = "in Arbeit";
if(webworker) {
	for (var i=0; i<14; i++) {
		document.writeln(i + "Tach");	
		if(i==5){
			erfolg = "erledigt";
			document.writeln("Work done");
		}
	}
	
	//return erfolg;
}