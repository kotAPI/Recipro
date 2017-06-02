
// Test Object to see if ingredient populator is working
nutritionObj = {
	"Fiber": "7 g(28%)",
            "Polyunsaturated Fat": "3 g",
            "Sodium": "5 mg(0%)",
            "Carbohydrates": "32 g(11%)",
            "Calories": "164",
            "Fat": "4 g(6%)",
            "Saturated Fat": "0 g(2%)",
            "Monounsaturated Fat": "0 g",
            "Protein": "3 g(6%)"
}



// JS Wrapper for React that I've written to make things easy.
// Takes the object from the given recipieObject json and supplies it for the functions to use it
// @ params - recipieObject 
// returns - none
// Populates the DOM with updated React Elements, creates required DOM elements to inject into the document
// The object of this class is instantiated in 'main.js' inside the load function
var ReactRecipieWrapper = function(recipieObject){
	// Grab image source
	var foodImage = recipieObject["image"];
	// Original link to the recipe, this is given to the href attribute of the foodName
	var foodLink = recipieObject["recipe_link"];
	// Grab food name
	var foodName = recipieObject["name"];
	// Grab author of the recipie
	var authorName = recipieObject["author"];
	// Grab nutrition object and create required reactElements
	var nutritionalInfoObject = recipieObject["nutrition"];
	// Grab recipie description
	var description = recipieObject["desc"];
	// Grab insturctions
	var howToMake = recipieObject["preparation"];
	// Grab ingredients
	var ingredients = recipieObject["ingredients"]
	// Supply ingredientsInfo to ingredient populate DOM
	var ingredientsInfo = ingredients.join(", \n");

	
	// The total react DOM that is injected into the "react-app" Element on event of change of any particular DOM
	var reactlist = React.createElement('div', {id:"data-container",className:'row'},
	// Create parent class for the image container. image, authorname and foodname
	React.createElement('div',{id:"r-data-content-one", className:"columns small-12 medium-6 content-box"},
		React.createElement('img',{id:"r-image",src:foodImage},
		null),
		React.createElement('a',{id:"r-foodname",href:foodLink,target:"_blank"}, foodName),
		React.createElement('div',{id:"r-author"},"Author: "+authorName)
	),
	// Create elements for the nutrition tab
	// 
	// 
	// TODO :Too much repititive code, Map the objects to their names and create respective elements reducing the repititive code
	React.createElement('div',{id:"r-data-content-two",className:"columns small-12 medium-6 content-box"},
		React.createElement('div',{id:"r-nutritonal-info-title"}, "Nutritional Information"),
			React.createElement('div',{className:'r-nutrition-attr'},"Fiber:   " +nutritionalInfoObject["Fiber"]),
			React.createElement('div',{className:'r-nutrition-attr'},"Polyunsaturated Fat:   " +nutritionalInfoObject["Polyunsaturated Fat"]),
			React.createElement('div',{className:'r-nutrition-attr'},"Sodium:   " +nutritionalInfoObject["Sodium"]),
			React.createElement('div',{className:'r-nutrition-attr'},"Carbohydrates:   " +nutritionalInfoObject["Carbohydrates"]),
			React.createElement('div',{className:'r-nutrition-attr'},"Calories:   " +nutritionalInfoObject["Calories"]),
			React.createElement('div',{className:'r-nutrition-attr'},"Fat:   " +nutritionalInfoObject["Fat"]),
			React.createElement('div',{className:'r-nutrition-attr'},"Saturated Fat:   " +nutritionalInfoObject["Saturated Fat"]),
			React.createElement('div',{className:'r-nutrition-attr'},"Monounsaturated Fat:   " +nutritionalInfoObject["Monounsaturated Fat"]),
			React.createElement('div',{className:'r-nutrition-attr'},"Protein:   " +nutritionalInfoObject["Protein"])
		),
	// Grab description, ingredients, and how to make info.
	React.createElement('div',{className:'columns small-12'},
		React.createElement('div',{id:"r-description-title"},"Description"),
		React.createElement('div',{id:'r-description-body'},description)),
	React.createElement('div',{className:'columns small-12'},
		React.createElement('div',{id:"r-description-title"},"Ingredients"),
		React.createElement('div',{id:'r-description-body'},ingredientsInfo)),
	React.createElement('div',{className:'columns small-12'},
		React.createElement('div',{id:"r-howtomake-title"},"How to make"),
		React.createElement('div',{id:"r-howtomake-body"},howToMake))

	);
	// A private object that is returned to an instance when rendererRender function is invoked, this is used in "main.js"
	var obj = {
		rendererRender: function(){
			ReactDOM.render(reactlist,document.getElementById('react-app'))
		}
	}

	return obj
}

