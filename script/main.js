var public_actual_JSON;

$(document).ready(function(){
	 console.log(load());
	 console.log(public_actual_JSON)

	 
    
})


function loadJSON(file, callback) {   

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }
 

function load() {
   

    loadJSON("../assets/data/data.json", function(response) {  
        public_actual_JSON = JSON.parse(response);
        //console.log(public_actual_JSON)

        var arrayNames =[];

        for(key in public_actual_JSON){
        	arrayNames[key] = public_actual_JSON[key].name;
        }
        

        $('.autocomplete').autocomplete({
	    lookup:arrayNames ,
	    lookupLimit: 10,
	    onSelect: function (suggestion) {

	    	var selectedObject;

	         for(key in public_actual_JSON){
	         	if(public_actual_JSON[key].name==suggestion.value){
	         		selectedObject = public_actual_JSON[key];
	         		console.log(selectedObject)
	         		//window.location = "/"+selectedObject[key].name;
	         		break;
	         	}
	         }

	         var wrapperObj = ReactRecipieWrapper(selectedObject);
			 wrapperObj.rendererRender();
	    }
	  });

       
    });
    
    
}