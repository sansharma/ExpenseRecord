/**
 * Created by l on 6/29/2016.
 */
$("#addexpense").on('click',function(e) {
    alert("Add expense");
    window.location.hash = "#addrecord"
});
$("#adddata").on('click',function(e) {
    var subject = $("#subject").val();
    var amount = $("#amount").val();
    if(subject === ''){
        alert("Enter the Subject");
    }
    else if(amount === ''){
        alert("Enter the amount");
    }
    else{
        alert(window.localStorage.getItem("id"));
        var formData = {
            id:window.localStorage.getItem("id"),
            subject:subject,
            amount:amount
        };
        $.ajax({
            url:"http://192.168.0.136/testapp/addrecord.php",
            type:"POST",
            data:formData,
            success: function(data){
                alert("Success");

                if(data==="ok"){
                    alert("Record Successfully inserted");
                    window.location.hash = "#pagetwo";
                }
                else if(data ==="error") {
                    alert("Couldnot insert values");

                }
            },
            error: function (e) {
                alert("Error: Network is not available.");
            }
        })
    }

});
