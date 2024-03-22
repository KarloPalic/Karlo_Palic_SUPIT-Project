$(function() {
  if(sessionStorage.getItem("token") == null) {
    window.location = "index.html";
  }

  let _token = sessionStorage.getItem("token");
  let allData = [];

  $.ajax({
    "url": "https://www.fulek.com/data/api/supit/curriculum-list/en",
    "method": "GET",
    "headers": {
      "Authorization": "Bearer " + _token
    }
  })
  .done(function(data) {
    if(data.isSuccess === true){
      allData = data.data;
    } else {
      alert("Failed to fetch.");
    }
  })
  .fail(function(error) {
    alert(error);
  })

  $('#curriculum-search').on('input', function() {
    let searchTerm = $(this).val().toLowerCase();
    let filteredData = allData.filter(curriculum => curriculum.course.toLowerCase().includes(searchTerm));

    let html = '<ul>';
    filteredData.forEach((curriculum) => {
      html += '<li>' + curriculum.course + '</li>';
    });
    html += '</ul>';

    $('#search-results').html(html);
  });
  
  $(document).on('click', '#search-results li', function() {
    let selectedCurriculum = $(this).text();

    let isAlreadyAdded = $('#boxes').text().includes(selectedCurriculum);

    if (isAlreadyAdded) {
      alert("You have already added this course.");
      return;
    }

    let curriculumData = allData.find(curriculum => curriculum.course === selectedCurriculum);
    if (curriculumData) {
      let html = appendAllData([curriculumData]);
      $("#boxes").append(html);
    }
  });
});


function appendAllData(data) {
  let htmlRows = $.map(data, function (item) {
    let html = "<tr>";
    html += "<td>" + item.course + "</td>";
    html += "<td>" + item.ects + "</td>";
    html += "<td>" + item.exercises + "</td>";
    html += "<td>" + item.hours + "</td>";
    html += "<td>" + item.lectures + "</td>";
    html += "<td>" + item.semester + "</td>";
    html += "<td>" + item.type + "</td>";
    html += "</tr>"
    return html;
  })

  let htmlHEader = "<tr>";

  htmlHEader += "<th>course</th>"
  htmlHEader += "<th>ects</th>"
  htmlHEader += "<th>exercises</th>"
  htmlHEader += "<th>hours</th>"
  htmlHEader += "<th>lectures</th>"
  htmlHEader += "<th>semester</th>"
  htmlHEader += "<th>type</th>"
  htmlHEader += "</tr>"

  const htmlTable = "<table>" + htmlHEader + htmlRows.join("") + "</table>";
  return htmlTable;
}