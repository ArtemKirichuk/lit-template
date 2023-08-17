import { LitElement, PropertyValueMap } from "lit";
import "./slide-btn";
export declare class Corusel extends LitElement {
    slideIndex: number;
    private readonly inputSlides;
    render(): import("lit-html").TemplateResult<1>;
    changeSlide(count: number): void;
    private hide;
    private show;
    setSlide(): void;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
}
declare global {
    interface HEMLElementTagNameMap {
        "my-corusel": Corusel;
    }
}
//# sourceMappingURL=corusel.d.ts.map