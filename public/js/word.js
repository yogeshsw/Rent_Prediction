/**
 * New node file
 */


	

$(document).ready(function() {
	$('#form5').submit(function() {
		var selectedRoom =$('#roomType').val();
		$.ajax({
			url : '/getWordData',
			type : 'post',
			dataType : 'json',
			data : {roomtype : selectedRoom} ,
			success : function(data) {
				console.log("the data"+JSON.stringify(data));
				var word_list = [];
				for(var i = 0; i < data.length; i++)
				{
				word_list.push({text: data[i].text, weight: data[i].size});
				}
				$("#bedroom").html("");
				 $("#bedroom").jQCloud(word_list);
			}
		});
		return false;
	});

});
