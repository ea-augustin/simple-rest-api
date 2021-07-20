$.ajax({
    url: 'https://randomuser.me/api/?results=10 ',
    dataType: 'json',
    success: function(data) {
        data.results.forEach(result=>{
            console.log(result);
            let title = result.name.title;
            let firstname = result.name.first;
            let lastname = result.name.last;
            let image = result.picture.medium;
            let age = result.registered.age

            $('.here').append("<div class=\"card\ m-2\card-has-bg\" style=\"width: 18rem;\">\n" +
                "  <img src="+image+" class=\"card-img-top\\card-img-overlay\" alt=\"...\">\n" +
                "  <div class=\"card-body\">\n" +
                "    <h5 class=\"card-title\">"+title+"</h5>\n" +
                "    <p class=\"card-text\">"+ firstname +" " + lastname +"</p>\n" +
                "    <p class=\"card-text\">"+ age+ "</p>\n" +
                "    <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n" +
                "  </div>\n" +
                "</div>")
        })
    }
});
