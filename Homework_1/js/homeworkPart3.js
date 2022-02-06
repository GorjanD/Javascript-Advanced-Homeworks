$(document).ready(function () {


    let button = $("button");
    button.on("click", function () {
        $.ajax({
            url: "https://dog.ceo/api/breed/hound/images",
            success: function (result) {
                for (dog of result.message) {
                        $("#image").append(`<img src="${dog}" width="50px"> `)
                }
            }
        })
    })
})