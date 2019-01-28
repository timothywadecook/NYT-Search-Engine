const query = "houses"

const apiKey = "nqjPt1B0olMlGRLvicI7VQuw9ub082GM"

const filterQ = 


$.ajax ({
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=marathon&begin_date=20081103&api-key=nqjPt1B0olMlGRLvicI7VQuw9ub082GM",
    method: "GET"
}).then(function (response) {
    console.log(response)
    console.log(response.response.docs[0].byline.original) //grabs author
    console.log(response.response.docs[0].pub_date) //grabs pub date
    console.log(response.response.docs[0].headline.main) //article name
}); 