

$(function(){
	$("#login").click(function(){
		var user = $("#email").val();
		var pass = $("#password").val();

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