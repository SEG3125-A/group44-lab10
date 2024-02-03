// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

const ALL_PRODUCTS = [
	{
        id: 1, 
		name: "Cut",
		vegetarian: true,
		glutenFree: true,
        dairyFree: true,
        organic: true,
		price: 30
	},
	{
        id: 2, 
		name: "Treatment",
		vegetarian: false,
		glutenFree: true,
        dairyFree: true,
        organic: true,
		price: 100
	},
	{
        id: 3, 
		name: "Color",
		vegetarian: false,
		glutenFree: true,
        dairyFree: true,
        organic: true,
		price: 50
	}
];

export { ALL_PRODUCTS };