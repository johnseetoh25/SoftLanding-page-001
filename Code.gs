function doGet(request) {
  return HtmlService.createTemplateFromFile('Index').evaluate();
  
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function processForm(formObject){
  var url="https://docs.google.com/spreadsheets/d/1ti-3TYy3luH5_9vEUYRSpBDuW6cwzaBo086Lv-WHGro/edit#gid=0";
  var ss= SpreadsheetApp.openByUrl(url);
  var ws=ss.getSheetByName("Data");

  ws.appendRow([
    formObject.Brands,
    formObject.Brands2,
    formObject.WinVersion,
    formObject.Name,

  ]);
}

