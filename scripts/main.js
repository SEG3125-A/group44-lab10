import { shopTab } from "./tabs/shop.js";
import { productTab } from "./tabs/product.js";
import { cartTab } from "./tabs/cart.js";
import { clientTab } from "./tabs/client.js";


const tabs = {
    shop: shopTab,
    product: productTab,
    cart: cartTab,
    client: clientTab,
}

// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp
function switchTabs(toTabName, productID) {

	// Get all elements with class="tabcontent" and hide them
	const tabcontent = document.getElementsByClassName("tabcontent");
	for (let i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	const tablinks = document.getElementsByClassName("tablinks");
	for (let i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

    if (toTabName == "product") {
        productTab.showTab(productID)
    } else {
        // Calls the selected page's dedicated showTab() function
        tabs[toTabName].showTab();
    }

}

// Default first page to open
switchTabs('shop');

export { switchTabs };
