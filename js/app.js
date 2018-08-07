$(function(){
	$('#rollno').on('blur',function(){
		if(!/(\d{2}((CO)|(DCO)|(EE)|(DEE)|(EX)|(ME)|(CE)|(DCE)|(CES)|(DCES)|(DME)|(DEX))\d{2,3})/i.test(this.value)){
			alert("INVALID ROLL NO");
			this.value="";
			$(this).focus();
		}
	});

	$('$sname').on('keypress', function(e){
		if(/[^a-zA-Z ]/.test(e.key))
		{
			alert("INVALID NAME");
			this.value="";
			return false;
		}
	});
});