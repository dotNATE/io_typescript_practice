var divBox = document.querySelector('#container');
fetch('template.hbs')
    .then(function (response) { return response.text(); })
    .then(function (response) {
    var template = Handlebars.compile(response);
    fetch('https://api.github.com/search/repositories?q=language:js&sort=stars&per_page=3')
        .then(function (data) { return data.json(); })
        .then(function (data) {
        var html = template(data);
        console.log(html);
    });
});
