/**
 *  Custom reusable webcomponent 
 *  Learn more about these here: https://developer.mozilla.org/en-US/docs/Web/API/Web_components
 * 
 *  Internal structure generated:
 * 
 * <label class="checkbox">
 *      <div class="label">Field Name</div>
 *      <input type="checkbox" name="field-name-here" id="">
 *      <span class="checkmark">
 *          <svg class="check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2b2e2e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
 *          <svg class="x" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#21808a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
 *      </span>
 * </label>
 */


// Create a class for the element
class StyledCheckbox extends HTMLElement {
    static observedAttributes = ["name", "label"];
    static formAssociated = true;
    input;

    constructor() {
        // Always call super first in constructor
        super();
        this._internals = this.attachInternals();
        this.addEventListener("click", this._onClick.bind(this));
        this.value_ = false;
    }

    // Form controls usually expose a "value" property
    // get value() { return this.value_; }
    // set value(v) { this.value_ = v; }
  
    // Called when the element is added to the page
    connectedCallback() {

        // Create a shadow root
        const shadow = this.attachShadow({ mode: "open" });
        

        // --- Create internal elements ---

        // Outermost element
        const label = document.createElement("label");
        label.setAttribute("class", "checkbox");

        // The checkbox's visible text label (not the label HTML element)
        const visibleLabel = document.createElement("div");
        visibleLabel.setAttribute("class", "label");
        visibleLabel.innerText = this.getAttribute("label");
        
        // The functional checkbox element
        this.input = document.createElement("input");
        // this.input.addEventListener('change', () => { this.value_ = this.input.checked; });
        this.input.setAttribute("type", "checkbox");
        if (this.hasAttribute("name")) {
            this.input.setAttribute("name", this.getAttribute("name"));
        }

        // The visible 'box' portion of the checkbox
        const box = document.createElement("span");
        box.setAttribute("class", "checkmark");
        box.innerHTML = `
            <svg class="check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            <svg class="x" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CCDD2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        `;

        // Apply our custom external styles
        const CSSLink = document.createElement("link");
        CSSLink.setAttribute("rel", "stylesheet");
        CSSLink.setAttribute("href", "./components/checkbox/checkbox.css");


        // Adding our sub-elements to the shadow-DOM 
        shadow.appendChild(CSSLink);
        shadow.appendChild(label);
        label.appendChild(visibleLabel);
        label.appendChild(this.input);
        label.appendChild(box);
    }

    get checked() {
        return this._internals.states.has("--checked");
      }
    
      set checked(flag) {
        if (flag) {
          this._internals.states.add("--checked");
        } else {
          this._internals.states.delete("--checked");
        }
      }
    
      _onClick(event) {
        // Toggle the 'checked' property when the element is clicked
        this.checked = !this.checked;
        this.input.checked = this.checked;
        console.log(this.checked);
      }

  }
  
  customElements.define("styled-checkbox", StyledCheckbox);