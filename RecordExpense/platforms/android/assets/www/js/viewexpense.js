/**
 * Created by l on 6/29/2016.
 */
$("#viewexpense").on('click',function(e) {
    alert("View expense");
    var formData = {
      id : window.localStorage.getItem("id")
    };
    $.ajax({
        url:"http://192.168.0.136/testapp/viewrecord.php",
        type:"POST",
        data:formData,
        success: function(data){
            alert("Success");
            alert(JSON.stringify(data));
            var value = JSON.parse(data);
            var new_data = '';
            new_data+='<li><h2>'+ " ID "+' ' +"SUBJECT" +' '+"AMOUNT"+  '</h2></li>'
            if(value.length>0) {
                $.each(value, function (i, row) {
                        new_data += '<li ><h4>' + row.id + '  ' + row.subject + '  ' + row.amount + '</h4></br></li>';
                });
            }
            $('#expensedata').html(new_data);
            window.location.hash = "#viewrecord";
        },
        error: function (e) {
            alert("Error: Network is not available.");
        }
    })

});