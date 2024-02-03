import { data } from "../datastore.js";

class ClientTab {

    tab;                // Main div corresponding to the Client tab
    cksRestrictions;    // Array of checkbox elements for setting dietary restrictions

    // Gets called once on application startup
    constructor() {
        this.tab = document.getElementById('Client');
        this.cksRestrictions = document.getElementsByClassName('restriction');
        this.initiateRestrictions();
    }

    // Make this tab visible and active
    showTab() {
        this.tab.style.display = "flex";
        this.tab.classList.add('active');
    }

    // Set up the restriction checkboxes on the client page with the required event listeners
    initiateRestrictions() {

        // Add event listener to each checkbox
        for (let i = 0; i < this.cksRestrictions.length; i++) {
            this.cksRestrictions[i].addEventListener('click', (event) => {
                event.preventDefault(); // Prevents double-click

                // Checking the state BEFORE the change is actually made
                if (this.cksRestrictions[i].checked) {
                    data.removeRestriction(this.cksRestrictions[i].id);
                } else {
                    data.addRestriction(this.cksRestrictions[i].id);
                }

            });
        }

    }
    
}

let clientTab = new ClientTab();
export { clientTab };