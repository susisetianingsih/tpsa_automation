function fillAnswers() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Sesuaikan dengan row pertanyaan
  var startRow = 19;
  var lastRow = sheet.getLastRow();
  var questionsRange = sheet.getRange("A" + startRow + ":A" + lastRow);
  var questions = questionsRange.getValues();
  var answers = [];
  var explanations = [];
  for (var i = 0; i < questions.length; i++) {
    var question = questions[i][0];
    var result = getAnswerAndExplanationForQuestion(question);
    answers.push([result.answer]);
    explanations.push([result.explanation]);
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

// Gunakan Google Drive API untuk mengambil file
function getKeywordAnswersFile() {
  var fileId = "asdfghjklpoiuytrewqzxcv"; // ID file keyword_answers.json di Google Drive Anda
  var file = DriveApp.getFileById(fileId);
  var data = file.getBlob().getDataAsString();
  return JSON.parse(data);
}

// Mengakses file keyword_answers.json
function getAnswerAndExplanationForQuestion(question) {
  var keywordAnswersData = getKeywordAnswersFile();

  // Ubah pertanyaan menjadi lowercase untuk pencocokan yang tidak case-sensitive
  var lowerCaseQuestion = question.toLowerCase();

  // Periksa apakah pertanyaan mengandung salah satu keyword, dan kembalikan jawaban dan penjelasan yang sesuai
  for (var keyword in keywordAnswersData) {
    if (lowerCaseQuestion.includes(keyword)) {
      return {
        answer: keywordAnswersData[keyword].answer,
        explanation: keywordAnswersData[keyword].explanation,
      };
    }
  }

  // Jika pertanyaan tidak cocok dengan keyword apapun, kembalikan jawaban 'No' dan penjelasan default
  return {
    answer: "no",
    explanation: "No specific information available for this question.",
  };
}
