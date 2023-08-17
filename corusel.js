var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { property, queryAssignedElements } from "lit/decorators.js";
let Corusel = class Corusel extends LitElement {
    constructor() {
        super(...arguments);
        this.slideIndex = 0;
        this.hide = (slide) => {
            //hide
            slide.hidden = true;
        };
        this.show = (slide) => {
            //show
            slide.hidden = false;
        };
    }
    render() {
        return html `<slot></slot>`;
    }
    setSlide() {
        this.inputSlides.forEach((element, i) => {
            if (i === this.slideIndex) {
                this.show(element);
            }
            else {
                this.hide(element);
            }
        });
    }
    firstUpdated(_changedProperties) {
        console.log('firstUpdated');
        this.setSlide();
    }
    updated(_changedProperties) {
        console.log('updated');
        this.setSlide();
    }
};
__decorate([
    property({ type: Number })
], Corusel.prototype, "slideIndex", void 0);
__decorate([
    queryAssignedElements()
], Corusel.prototype, "inputSlides", void 0);
Corusel = __decorate([
    customElement('my-corusel')
], Corusel);
export { Corusel };
//# sourceMappingURL=corusel.js.map