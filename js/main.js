$(".btn").on("click", function() {
    var word = $("#word").val()
    console.log(word);
    apiCall.query(word);
})


