export default function removeTrailingSpace(html: HTMLElement): HTMLElement {
    html.innerText = html.innerText.trim();
    return html;
}
