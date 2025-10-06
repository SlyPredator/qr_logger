function doGet(e) {
  var template = HtmlService.createTemplateFromFile('confirmation');
  template.userName = e.parameter.name || '';
  return template.evaluate();
}

function logUser(userName, deviceUUID) {
  var ss = SpreadsheetApp.openById("1bPJuSc4EUNM6zJ4Jy3qSZmtuXasu1TMuVAdc7SCZvZg");
  var sheet = ss.getSheetByName("Scanned Data");
  sheet.appendRow([new Date(), userName, deviceUUID]);
}
