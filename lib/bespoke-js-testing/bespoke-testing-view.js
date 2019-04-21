var render = {
  toHTML: function(resultsArray) {
    htmlString = '<ol>'
    resultsArray.forEach(function(result) {
      testColour = result['result'] === 'PASSED' ? "green" : "red"
      htmlString += `<li style='color:${testColour}'>${result['desc']} - ${result['result']}</li>`
    });
    return htmlString + '</ol>'
  }
};
