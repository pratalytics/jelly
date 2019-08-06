function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Bayer QA')
      .addItem('Run QA', 'myFunction')
      .addToUi();
  
}
