$(document).ready(function(){
    // Get value on button click and show alert
    $(".message").hide();
    $("#add").click(function(){
        var str = $("#data").val();
                if(str == ""){
        	$(".message").show();
        }
        else{
        	$(".message").hide();
        var matched = $(".countOf th");
        number = parseInt(matched.length)+1;
        $(".newData").append("<tr class='table-primary "+number+"'>\
					      		<th class='number' scope='row'>"+number+"</th>\
							      <td class='title-"+number+"'>"+str+"</td>\
							      <td align='center'>Waiting</td>\
							      <td align='center'><button type='button' class='btn btn-warning change -"+number+"'>Take In-Process</button></td>\
							    </tr>");
    	}
    });
    //Chage values on the list
    $('.table').on("click",".change",function() {
      var trCounter = $(".countOf tr");
	  var index = $(this).index('.change');
	  var trHtml = $("tr").get(index+1);
	  var valueInButton = $(this).text()
	  var titleOfRow = 	$(".title-"+(index+1).toString()).text()
	  //IF Button is Deliver then, it means this row will delete and this will cause mess. 
	  //Because of that this if reorder all list that bottom side on the deleted list.
	  if(valueInButton == "Deliver"){
	  	for(var i = index+2; i<=trCounter.length; i++){
	  		if($(".-"+i.toString()).text() == "Complete"){
	  			$("tr").get(index+1).remove();
	  			var itWill = "<tr class='table-warning "+(i-1)+"'>\
					      <th class='number' scope='row'>"+(i-1)+"</th>\
					      <td class='title-"+(i-1)+"'>"+$(".title-"+(i).toString()).text()+"</td>\
					      <td align='center'>In-Process</td>\
					      <td align='center'><button type='button' class='btn btn-success change -"+(i-1)+"'>Complete</button></td>\
					    </tr>"
				$(".countOf").append(itWill)	    
	  		}
	  		else if($(".-"+i.toString()).text() == "Take In-Process"){
	  			$("tr").get(index+1).remove();
	  			var itWill = "<tr class='table-primary "+(i-1)+"'>\
					      		<th class='number' scope='row'>"+(i-1)+"</th>\
							      <td class='title-"+(i-1)+"'>"+$(".title-"+(i).toString()).text()+"</td>\
							      <td align='center'>Waiting</td>\
							      <td align='center'><button type='button' class='btn btn-warning change -"+(i-1)+"'>Take In-Process</button></td>\
							    </tr>"
				$(".countOf").append(itWill)

	  		}else if($(".-"+i.toString()).text() == "Deliver"){
	  			$("tr").get(index+1).remove();
	  			var itWill = "<tr class='table-success "+(i-1)+"'>\
					      <th class='number' scope='row'>"+(i-1)+"</th>\
					      <td class='title-"+(i-1)+"'>"+$(".title-"+(i).toString()).text()+"</td>\
					      <td align='center'>Completed</td>\
					      <td align='center'><button type='button' class='btn btn-danger change -"+(i-1)+"'>Deliver</button></td>\
					    </tr>"
				$(".countOf").append(itWill)
	  		}
	  	}
	  	$("tr").get(index+1).remove()
	  	//Listcounter variable is used to count under lists element.
	  	var listCounter = $(".listElementCount td");
	  	$(".listData").append("<tr class='table-success'>\
					      <td style='width:100%;'>"+titleOfRow+"</td>\
					    </tr>")
	  		$(".totalNumber").html("Title (Total:"+(listCounter.length+1).toString()+")")
	  }
	  else if (valueInButton == "Complete"){
	  	var newHtml = "<tr class='table-success "+(index+1)+"'>\
					      <th class='number' scope='row'>"+(index+1)+"</th>\
					      <td class='title-"+(index+1)+"'>"+titleOfRow+"</td>\
					      <td align='center'>Completed</td>\
					      <td align='center'><button type='button' class='btn btn-danger change -"+(index+1)+"'>Deliver</button></td>\
					    </tr>"
		$( "."+(index+1).toString()).replaceWith(newHtml)
						    
	  }
	  else if (valueInButton == "Take In-Process"){
	  	var newHtml = "<tr class='table-warning "+(index+1)+"'>\
					      <th class='number' scope='row'>"+(index+1)+"</th>\
					      <td class='title-"+(index+1)+"'>"+titleOfRow+"</td>\
					      <td align='center'>In-Process</td>\
					      <td align='center'><button type='button' class='btn btn-success change -"+(index+1)+"'>Complete</button></td>\
					    </tr>"
		$( "."+(index+1).toString()).replaceWith(newHtml)
	  }
	});
});


						