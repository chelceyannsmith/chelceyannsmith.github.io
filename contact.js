function contact() {
    var script_url = "https://script.google.com/macros/s/AKfycbxix1DpcjBn_Vxh05LfIBbPnAOua5QgnuVOBalHfQBlYoaBwqxanYHH0KNsj4R0IgkOGA/exec";
    //get data from form
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
    //send data
    var url = script_url + "?callback=thank you&name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&subject=" + encodeURIComponent(subject) + "&message=" + encodeURIComponent(message);
    jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });
}
function thanks() {
    //confirmation
    alert("Thank you, I will get back to you soon:)");
}
