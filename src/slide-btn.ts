import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js"

@customElement('slide-btn')
export class SlideBtn extends LitElement {
    @property({ type: Number }) count = 0;
    static override styles = css`
        #btn{
            border:1px solid;
            width:2rem;
            height:2rem;

            display:flex;
            justify-content:center;
            align-items:center;

            cursor:pointer;
        }
    `;
    protected override render(): unknown {
        return html`
            <div id="btn">
                <slot></slot>
            </div>
        `
    }
}

declare global {
    interface HEMLElementTagNameMap {
        'slide-btn': SlideBtn
    }
}