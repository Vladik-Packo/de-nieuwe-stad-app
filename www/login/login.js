

$(function(){
	$("#login").on('click', function (){
		var email = $("#email").val();
		var pass = $("#password").val();
console.log(email);
	var data = "user" + user + "&pass" + pass;


		$.ajax({
			method: "post",
			url: "login.php?",
			data: data,
			success: function(data){
				$("#login_error").html(data);
				console.log("test")
			}


			});

	})
});