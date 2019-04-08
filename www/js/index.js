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
 	confirm("weet u zeker dat u notificaties uit wilt zetten");
 }

