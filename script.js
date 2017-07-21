$(document).ready(function(){
	getNewQuote();

	var quote;
	var author;

	function getNewQuote(){
		var url = "https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en"

		$.getJSON(url, function(data){
			quote = data.quoteText;
			author = data.quoteAuthor;
			if (author === ''){
				author = 'Unknown';
			}

			$("#quote").html('"' + quote + '"');
			$("#author").html("- " + author);

		});

	}

	$('.get-quote').on("click", function(event){
		event.preventDefault();
		getNewQuote();
	});

	$('.share-quote').on('click', function(event){
		event.preventDefault();
		window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' - ' + author));
	});

});

		// $.ajax({ //for making api requests
		// 	url: 'https://cors-anywhere.kerokuapp.com/http://api.forismatic.com/api/1.0/',
		// 	// jsonp: 'jsonp',
		// 	dataType: 'json',
		// 	data: {
		// 		method: 'getQuote',
		// 		lang: 'en',
		// 		format: 'json'
		// 	}, // this is equivalent to url: http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en
		// 	success: function(response){
		// 		quote = response.quoteText;
		// 		author = response.quoteAuthor;
		// 		$('#quote').text(quote);
		// 		if (author){
		// 			$('#author').text('- ' + author);
		// 		} else {
		// 			$('#author').text('- Unknown');
		// 		}
		// 	}
		// });

