var wowhead_tooltips = {
	"colorlinks": true,
	"iconizelinks": true,
	"renamelinks": true
};

$(function () {
	$("table.sorted").tablesorter({
		sortList: [[0, 0], [1, 0]],
		usNumberFormat: false,
		sortReset: true,
		sortRestart: true,
		headers: {
			0: {
				sorter: "digit"
			},
			1: {
				sorter: "text"
			},
			2: {
				sorter: "digit"
			},
			3: {
				sorter: "url"
			}
		}
	});
});
