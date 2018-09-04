$(function(){

// 	$("#cpass").change(function (e) {
// 		e.preventDefault();
// 		var cpass = $(this).val();
// 		var pass = document.getElementById("pass");

// 		if(pass.value!=cpass)
// 		{
// 			$(this).val("");
// 			$("#cpasserr").html("<font color='red'")
// 		}
// 	})
// })


$("#user").on('keypress',function(e){
	var user = $(this).val();
	var dataString = 'user='+user+'$pass='+pass;

	$.ajax({
		type:'POST',
		url:'php/checkpass.php',
		data:dataString,
		cache:false,
		success:function(available)
		{
			var msg = null;
			if(available=="false"){
				$('#usererr').html('<span class="alert alert-danger" Username not available</span>');
			}
			else{
				$('#usererr').html('<span class="alert alert-success" Good</span>');
			}
		}
	});
});
})