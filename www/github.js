var API_BASE_URL = "http://147.83.7.200:8080/entrega.api/myresource";


/*
Details about repository of GitHub API 
https://developer.github.com/v3/repos/
*/

$("#button_got_it").click(function(e) {
	e.preventDefault();
	getMensaje();
});




function getMensaje() {
	var url = API_BASE_URL;
	$("#result").text('');

	$.ajax({
		url : url,
		type : 'GET',
		crossDomain : true
	}).done(function(data, status, jqxhr) {

				var repo = data;

				$("#result").text(repo);
				
				
			}).fail(function() {
				$('<div class="alert alert-danger"> <strong>Oh!</strong> Repository not found </div>').appendTo($("#result"));
	});

}

