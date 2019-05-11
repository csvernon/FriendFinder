$("#submit").on("click", function (event) {
    event.preventDefault();
    $("#match-modal").modal("toggle");
    if ($("#name").val().trim() != "" && $("#photo").val().trim() != "") {
        var newfriend = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            answers: [
                $('#question1').val().trim(),
                $('#question2').val().trim(),
                $('#question3').val().trim(),
                $('#question4').val().trim(),
                $('#question5').val().trim(),
                $('#question6').val().trim(),
                $('#question7').val().trim(),
                $('#question8').val().trim(),
                $('#question9').val().trim(),
                $('#question10').val().trim()
            ]
        };
        clear();
        $.ajax("/api/friends", {
            type: "POST",
            url: "friends.js",
            data: newfriend
        }).then(function (res) {
            $("#matchModal").modal("show");
            $("#match-name").text(res.name);
            $("#match-image").attr("src", res.photo);
        });
    } else {
        alert("Please fill finish the survey")
    }
    function clear (){
        $("#name").val("");
        $("#photo").val("");
        $('#question1').val(""), $('#question2').val(""), $('#question3').val(""), $('#question4').val(""), $('#question5').val(""), $('#question6').val(""), $('#question7').val(""), $('#question8').val(""), $('#question9').val(""), $('#question10').val("")
    }
});
