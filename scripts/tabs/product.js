import { data } from "../datastore.js";
import { switchTabs } from "../main.js";

class ProductTab {

    tab;               // Main div corresponding to the Product tab
    productName;       // Header containing the product name
    productsDiv;       // Div containing the displayed product
    btnAddToCart;      // "Add to Cart" button

    // Gets called once on application startup
    constructor() {
        this.tab = document.getElementById('Product');
        this.productName = document.getElementById('product-name');
        this.displayProduct = document.getElementById('current-product');
        this.btnAddToCart = document.getElementById('add-product');
        
        this.btnAddToCart.addEventListener('click', () => { 
            this.addToCart();
        });
    }

    // Make this tab visible and active
    showTab(productID) {
        this.tab.style.display = "flex";
        this.tab.classList.add('active');
        this.switchProduct(productID);
    }
    
    switchProduct(productID) {
        data.switchProduct(productID);
        const currentProduct = data.getCurrentProduct();

        this.productName.innerHTML = currentProduct.name + " - $" + currentProduct.price;

        const productImage = document.createElement("img");
        productImage.setAttribute("src", "./assets/" + currentProduct.name.toLowerCase() + ".jpg");
        productImage.setAttribute("class", "product-image-main");

        this.displayProduct.innerHTML = "";
        this.displayProduct.appendChild(productImage);
    }


    // Updates the data store with the selected cart items
    addToCart() {
        data.addCurrentToCart();
    }

}

let productTab = new ProductTab();
export { productTab };