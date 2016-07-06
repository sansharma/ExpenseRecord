/**
 * Created by l on 6/28/2016.
 */
$("#userlogin").on('click',function(e) {
    alert("Hello");
    var username = $("#username").val();
    var password = $("#password").val();

    if(username===''){
        alert("Please enter the username");
    }
    else if(password===''){
        alert("Please enter the password")
    }
    else{
        alert(username);
        alert(password);
        var formData = {
            username:username,
            password:password
        };
        console.log(formData);
        $.ajax({
            url:"http://192.168.0.136/testapp/index.php",
            type:"POST",
            data:formData,
            success: function(data){
                alert("Success");

                if(data==="error"){
                    alert(JSON.stringify(data));
                    alert("invalid username/password");

                }
                else {
                    alert("User logged in");
                    var value = JSON.parse(data);
                    var id = value[0].id;
                    var new_data='';
                    window.localStorage.setItem("id",id);
                    var message = "Welcome";
                    new_data += ' <h3>' + message +' '+ value[0].username + '</h3> ';
                    $('#user').html(new_data);
                    window.location.hash = "#pagetwo";
                }
            },
            error: function (e) {
                alert("Error: Network is not available.");
            }
        })
    }
});
