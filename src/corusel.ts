import { LitElement, PropertyValueMap, html } from "lit";
import { customElement } from "lit/decorators.js"
import { property, queryAssignedElements } from "lit/decorators.js";
import { RIGHT, LEFT } from "./constans"
import "./slide-btn";

@customElement('my-corusel')
export class Corusel extends LitElement {
    @property({ type: Number }) slideIndex = 0;
    @queryAssignedElements()

    private readonly inputSlides!: HTMLElement[];
    override render() {
        return html`
            <slide-btn
                @click=${this.changeSlide.bind(this, 1)}
            >${RIGHT}</slide-btn>
            <slot></slot>
            <slide-btn
                @click=${this.changeSlide.bind(this, -1)}
            >${LEFT}</slide-btn>
        `
    }
    changeSlide(count: number) {
        let countSlide = this.inputSlides.length;
        let calcIndex = this.slideIndex + count;
        this.slideIndex = (countSlide + (calcIndex % countSlide)) % countSlide
    }

    private hide = (slide: HTMLElement) => {
        //hide
        slide.hidden = true;
    }
    private show = (slide: HTMLElement) => {
        //show
        slide.hidden = false;
    }

    setSlide() {
        this.inputSlides.forEach((element, i) => {
            if (i === this.slideIndex) {
                this.show(element);
            } else {
                this.hide(element);
            }
        });
    }

    protected override firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        console.log('firstUpdated');
        this.setSlide();
    }

    protected override updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        console.log('updated');
        this.setSlide();
    }

}


declare global {
    interface HEMLElementTagNameMap {
        "my-corusel": Corusel;
    }
}
