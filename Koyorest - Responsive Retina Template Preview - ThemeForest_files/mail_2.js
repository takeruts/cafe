 $(document).ready(function(){
	$("#reservation_form").submit(function(e){
                e.preventDefault();
                dataString = $("#reservation_form").serialize();
                        $.ajax({
                                type: "POST",
                                url: "reservation.php",
                                data: dataString,
                                dataType: "json",
                                success: function(data) {
                                if (data.valid == "true")       {
                                        $("#reservationmsg").html('<span style="color: green;">'+data.msg+'<\/span>');
                                        $('#reservation_form')[0].reset();
                                } else
                                {
                                        $("#reservationmsg").html('<span style="color: red;">'+data.msg+'<\/span>');
                                } 
                                }
                        });                             
        });
		
});