 $(document).ready(function(){
	$("#contactform").submit(function(e){
                e.preventDefault();
                dataString = $("#contactform").serialize();
                        $.ajax({
                                type: "POST",
                                url: "mail.php",
                                data: dataString,
                                dataType: "json",
                                success: function(data) {
                                if (data.valid == "true")       {
                                        $("#contactmsg").html('<span style="color: green;">'+data.msg+'<\/span>');
                                        $('#contactform')[0].reset();
                                } else
                                {
                                        $("#contactmsg").html('<span style="color: red;">'+data.msg+'<\/span>');
                                } 
                                }
                        });                             
        });
		
});