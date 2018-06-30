// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid() {
    var gridHeight = $('#inputHeight').val();
    var gridWidth = $('#inputWidth').val();
    var canvas = $('#pixelCanvas');
    var newRow;
    var clickedCell;
    var colorPicked;

    canvas.children().remove();

    for (var rowCount = 0; rowCount < gridHeight; rowCount++) {
        // table row creation
        canvas.append('<tr></tr>');
    }

    newRow = $('tr');
    for (var cellCount = 0; cellCount < gridWidth; cellCount++) {
        // table cell creation <td>
        newRow.append('<td></td>');
    }

    clickedCell = canvas.find('td');

    // When td is clicked, change the color of td
    clickedCell.click(function () {
        // Select color input
        colorPicked = $('#colorPicker').val();
        if ($(this).attr('bgcolor')) {
            $(this).removeAttr('bgcolor')
        } else {
            $(this).attr('bgcolor', colorPicked);
        }
    });
}

// When the size is submitted, call makeGrid()
$(document).ready(function () {
    var createGrid = $('input[type="submit"]');
    createGrid.click(function (event) {
        event.preventDefault();
        makeGrid();
    });
});
