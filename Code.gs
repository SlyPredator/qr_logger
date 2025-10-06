function doGet(e) {
  var template = HtmlService.createTemplateFromFile('confirmation');
  template.userName = e.parameter.name || '';
  return template.evaluate();
}

function logUser(userName, deviceUUID) {
  var ss = SpreadsheetApp.openById("ADD SHEET ID HERE");
  var sheet = ss.getSheetByName("Scanned Data");
  sheet.appendRow([new Date(), userName, deviceUUID]);
}
