jQuery(document).ready(function() {
    var id = "#multiTable";

    jQuery(id).stupidtable();

    var table = jQuery(id).stupidtable({
    });

    table.on('aftertablesort', function (event, data) {
        // data.column - the index of the column sorted after a click
        // data.direction - the sorting direction (either asc or desc)

        var th = jQuery(this).find("th");
        th.find(".arrow").remove();
        var arrow = data.direction === "asc" ? " &darr;" : " &uarr;";
        th.eq(data.column).append('<span class="arrow">' + arrow +'</span>');
    });
});

