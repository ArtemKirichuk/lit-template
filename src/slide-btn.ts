import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js"

@customElement('slide-btn')
export class SlideBtn extends LitElement {
    @property({ type: Number }) count = 0;

    protected override render(): unknown {
        return html`<div><slot></slot></div>`
    }
}

declare global {
    interface HEMLElementTagNameMap {
        'slide-btn': SlideBtn
    }
}