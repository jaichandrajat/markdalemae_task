function myFunction() {
  var s1 = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = s1.getSheetByName("example");
  var value1 = sheet.getRange('A1').getValue();
  var value2 = sheet.getRange('B1').getValue();
  
  var value3 = value1 + value2 + parseInt("10");
  sheet.getRange('C1').setValue(value3);
  debugger;
}
