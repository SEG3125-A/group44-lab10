import { data } from "../datastore.js";
import { switchTabs } from "../main.js";

class ShopTab {

    tab;               // Main div corresponding to the Products tab
    filtersDiv;        // Div containing the product filters
    sortOrder;
    productsDiv;       // Div containing the displayed products list
    applyRestrictionToggle = false;
    btnApplyFilters;

    // Gets called once on application startup
    constructor() {
        this.tab = document.getElementById('Shop');
        this.productsDiv = document.getElementById('visible-products');
        this.filtersDiv = document.getElementById('filtersContainer');
        this.btnAddToCart = document.getElementById('addCart');
        this.btnApplyFilters = document.getElementById('applyFilters');
        this.sortOrder = document.getElementById('sort-order-dropdown');
        this.applyRestrictionToggle = document.getElementById('applyRestrictionsFlag')

        this.sortOrder.addEventListener('change', () => {
            data.changeSortOrder(this.sortOrder.options[this.sortOrder.selectedIndex].value);
            this.displayProducts();
        });

        this.btnApplyFilters.addEventListener('click', () => {
            data.setMaxPrice(document.getElementById('rangeSlider').value);
        });

        this.applyRestrictionToggle.addEventListener('change',() =>{
            if(this.applyRestrictionToggle.checked){
                data.setApplyRestrictionsBool(true);
            }
            else if(this.applyRestrictionToggle.checked == false){
                data.setApplyRestrictionsBool(false);
            }
        });
        
        this.btnApplyFilters.addEventListener('click', () => {
            data.setMaxPrice(document.getElementById('rangeSlider').value);
            this.displayProducts();
        });

    }

    // Make this tab visible and active
    showTab() {
        this.tab.style.display = "flex";
        this.tab.classList.add('active');
        this.displayFilters();
        this.displayProducts();
    }

    displayFilters() {
        // var sliderContainer = document.createElement("div");
        // sliderContainer.setAttribute("class", "sliderContainer");

        // var sliderInput = document.createElement("input");
        // sliderInput.setAttribute("type", "range");
        // sliderInput.setAttribute("min", "1");
        // sliderInput.setAttribute("max", "20");
        // sliderInput.setAttribute("value", "20");
        // sliderInput.setAttribute("class", "slider");
        // sliderInput.setAttribute("id", "rangeSlider");

        // sliderContainer.appendChild(sliderInput);

        // var sliderValue = document.createElement("p");
        // sliderValue.textContent = sliderInput.value;
        // sliderValue.setAttribute("id", "sliderValue");

        // var priceFilterContainer = document.createElement("div");
        // priceFilterContainer.appendChild(sliderValue);
        // priceFilterContainer.appendChild(sliderContainer);

        // this.filtersDiv.innerHTML = "";
        // this.filtersDiv.appendChild(priceFilterContainer);

        let sliderInput = document.getElementById('rangeSlider');
        sliderInput.addEventListener('click', () => {
            sliderValue.textContent = sliderInput.value;
        });
    }

    // Generate a checkbox for each product to be displayed
    displayProducts() {

        data.updateProductList();

        this.productsDiv.innerHTML = "";        // Clear the current products list
        this.productsDiv.setAttribute("class", "products-div");
        let products = data.getProducts();      // Get list of products from the data store

        for (let i = 0; i < products.length; i++) {
            var productName = products[i].name;

            var productDiv = document.createElement("div");
            productDiv.setAttribute("class", "product-div");
            productDiv.addEventListener('click', (e) => {
                switchTabs('product', products[i].id);
            });

            var productImage = document.createElement("img");
            productImage.setAttribute("src", "./assets/" + productName.toLowerCase() + ".jpg");
            productImage.setAttribute("class", "product-image");
            productDiv.appendChild(productImage);

            const productLabel = document.createElement('p');
            productLabel.setAttribute("class", "product-label");
            productLabel.innerText = productName + " - $" + products[i].price.toFixed(2);
            productDiv.appendChild(productLabel);

            this.productsDiv.appendChild(productDiv);
            this.productsDiv.appendChild(document.createElement("br"));     // Add line break before moving on to next product
        }
    }

}

let shopTab = new ShopTab();
export { shopTab };
