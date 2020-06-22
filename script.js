var searchTerm = "";
var noRecords = "";
var startYear = "";
var endYear = "";
var newsURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchTerm+"&api-key=q1R81jah5Sd6I97amYyvHSrBYA1yWzV5"

gatherData()

function query(){
$.ajax({
    url:newsURL,
    method:"GET"
}).then(function(response){
    console.log(response)
})
}

function gatherData(x) {
    $("#searchBtn").on("click", function (event) {
        event.preventDefault();
        searchTerm = $("#searchTerm").val()
        noRecords = $("#noRecords").val();
        startYear = $("#startYear").val();
        endYear = $("#endYear").val();
        console.log(searchTerm)
        console.log(noRecords)
        console.log(startYear)
        console.log(endYear)
    });
    //query();
}
