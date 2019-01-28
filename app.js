const apiKey = "nqjPt1B0olMlGRLvicI7VQuw9ub082GM";

$("#search").on("click", function(e) {
  e.preventDefault();
  console.log("searching..");
  queryApi();
});

$("#clear").on("click", function(e) {
  e.preventDefault();
  $("#query").val(" ");
  $("#begin_date").val(" ");
  $("#end_date").val(" ");
  $("#numRecords").val(" ");
});

const render = function(data) {
  console.log(data);

  data.forEach(function(doc) {
    // console.log(doc)
    $("#results").append(`
        <li class="media my-4">
            <img src="https://static01.nyt.com/${doc.multimedia[2].url}" class="mr-3" alt="Article Image">
            <div class="media-body">
                <h5 class="mt-0">
                ${doc.headline.main}
                <span class="badge badge-pill badge-info mr-1">${doc.word_count} Words</span>
                </h5>
                <p>${doc.snippet}</p>
                <p class="mb-0">Full article <a target="_blank" href="${doc.web_url}">here</a></p>
            </div>
        </div>
    `);
  });
};

const queryApi = function() {
  const query = $("#query").val();
  const begin_date = $("#begin_date").val();
  const end_date = $("#end_date").val();
  const numRecords = $("#numRecords").val();

  $.ajax({
    url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&begin_date=${begin_date}&end_date=${end_date}&api-key=${apiKey}`,
    method: "GET"
  }).then(function({ response }) {
    render(response.docs);
  });
};
