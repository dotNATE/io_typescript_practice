fetch('template.hbs')
    .then(response => response.text())
    .then(response => {
        const template = Handlebars.compile(response)
        console.log(template)
        fetch('https://api.github.com/search/repositories?q=language:js&sort=stars&per_page=3')
            .then(data => data.json())
            .then(data => {
                console.log(data)
            })
    })