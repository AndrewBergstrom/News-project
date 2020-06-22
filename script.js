var APIkey = "vEBaIAK7ouqfdNIA6kemhIDx6XKGMO27"

var newsURL =`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${APIkey}`

$.ajax({
    url: newsURL,
    method:"GET"
}) .then(function(response){
    console.log(response)
})

