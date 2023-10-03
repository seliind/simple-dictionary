var grids = {
  generateGrid: function (data) {
    console.log("GRİD OLUŞTURULDU");
    $('#gridContainer').dxDataGrid({
        dataSource: data,
        keyExpr: 'partOfSpeech',
        columns: [
            {
                dataField: "partOfSpeech",
                caption: "Part of Speech"
            },
            {
                dataField: "definitions[0].definition",
                caption: "Definition"
            },
        ],
        showBorders: true,
        columnAutoWidth: true,
      });
  },
};
