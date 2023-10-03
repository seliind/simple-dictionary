var apiCall = {
  query: function (word) {
    $.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
      function (data) {}
    ).done(function (data) {
      console.log(data[0].meanings);
      var data = data;
      grids.generateGrid(data[0].meanings);
    });
  },
};
