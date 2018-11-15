$(document).ready(function(){
	var unit = 'imperial';

function getWeather(unit){
	$.ajax({
		url:"https://api.openweathermap.org/data/2.5/find?",
		type:"GET",
		dataType:"JSON",
		data:{
			q:"New York",
			units:unit,
			appid:"5bb22714a08c3c5316ba025775e800a7",
		},

		success: function(data){
			console.log(data);
			console.log(data.list[0].main.temp);
			$("h1").html("The tempurature is: " +  data.list[0].main.temp +" degrees");

   			var temp = data.list[0].main.temp;
  			 if(temp < "40"){
  			 	$("div").show();
     		} else if ("40" < temp < "100"){ 
     			$("div").show();
     			$("div").css("background-color", "red");
     		} else {
     			$("div").show();
     			$("div").css("background-color", "black");
     		}

		},

		error: function(){
			console.log("error")
		},
	});
}
	$('#metric').on('click',function(){
		getWeather('metric',function(){
		var unit = 'metric';
		console.log("clicked");
		});
	});
	$("#imperial").click(function(){
		getWeather('imperial', function(){
		var unit= 'imperial';
		console.log("iclicked");
		});
	});

})