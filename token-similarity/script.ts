function fillAnswers() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Sesuaikan dengan row pertanyaan (tidak diawali dari header)
  var startRow = 2;
  var lastRow = sheet.getLastRow();
  var questionsRange = sheet.getRange("A" + startRow + ":A" + lastRow);
  var questions = questionsRange.getValues();
  var answers = [];
  var explanations = [];
  for (var i = 0; i < questions.length; i++) {
    var question = questions[i][0];
    answers.push([fetchData(question)["answer"]]);
    explanations.push([fetchData(question)["comment"]]);
  }
  var answersRange = sheet.getRange(
    "B" + startRow + ":B" + (answers.length + startRow - 1)
  );
  var explanationsRange = sheet.getRange(
    "C" + startRow + ":C" + (explanations.length + startRow - 1)
  );
  answersRange.setValues(answers);
  explanationsRange.setValues(explanations);
}

function fetchData(question) {
  var url = "https://automation-tpsa-api.app/ask"; // replace api
  var payload = JSON.stringify({ question: question });
  var options = {
    method: "post",
    contentType: "application/json",
    payload: payload,
  };

  var response = UrlFetchApp.fetch(url, options);
  var data = JSON.parse(response.getContentText());

  hasil = {
    answer: data.answer,
    comment: data.comment,
  };
  return hasil;
}
