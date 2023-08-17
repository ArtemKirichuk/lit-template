var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
let SlideBtn = class SlideBtn extends LitElement {
    constructor() {
        super(...arguments);
        this.count = 0;
    }
    render() {
        return html `<div><slot></slot></div>`;
    }
};
__decorate([
    property({ type: Number })
], SlideBtn.prototype, "count", void 0);
SlideBtn = __decorate([
    customElement('slide-btn')
], SlideBtn);
export { SlideBtn };
//# sourceMappingURL=slide-btn.js.map