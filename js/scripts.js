$(document).ready(function() {
	
	
	//Get Zip
	$('button').click(function(){

  		var getZip = $('input').val();
  		console.log(getZip);
		
	//Simple Weather
		$.simpleWeather({  
			zipcode: getZip,
			location: '',
			unit: 'f',
			success: function(weather) {
				
			//Get weather data
				html = '<h3>'+weather.city+', '+weather.region+'</h3>';
				html += '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
				html += '<ul><li><img src="img/'+weather.code+'.png"></li>';
				html += '<li><h5>'+weather.currently+'</h5></li></ul>';
				
				//html += '<h5>'+weather.currently+'</h5>';
				//html += '<img src="img/'+weather.code+'.svg">';
				
				
				//html += '<img width="300px" src="'+weather.image+'">';
				//html += '<h3>'+weather.tempAlt+'&deg;C</h3>';
				//html += '<p>'+weather.code+'</p>';
				//
				
				$('body').addClass('bg' + weather.code);
		  
			//Put weather data, calling simple weather
			  $("#weather").html(html);
			},
			error: function(error) {
			  $("#weather").html('<p>'+error+'</p>');
			}
		  });

	}); //Button click function *end*
	
		
	  
}); //Doc ready *end*