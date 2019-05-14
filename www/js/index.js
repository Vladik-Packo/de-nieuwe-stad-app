 function showAlert(){
 	navigator.notification.alert(
 		//message
 		"dit is een test",
 		//callback
 		showJSAlert,
 		//title
 		"this is a alert",
 		//button
 		"ok"
 	)
 }
 function showJSAlert(){
 	alert("normale alert")
 }





 //functies voor instellingen

 

 function Changecolor(){
 	var r = confirm("weet u zeker dat u notificaties uit wilt zetten");
 if (r == true){
 	alert("notificaties uitgeschakeld");
 }
 }

function Locatievoorzieninginstellingen(){
	
var r = confirm("wilt u uw locatievoorziening uitzetten?? Let op!! de app kan niet goed functioneren zonder locatiesvoorziening");
if (r == true) {
   alert("locatiesvoorziening uitgeschakeld");
  } else {
 
}
}