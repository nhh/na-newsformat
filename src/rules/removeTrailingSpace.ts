export default function removeTrailingSpace(html: Document): Document {
    html.childNodes.forEach((node) => {
      if(node.textContent != null){
        node.textContent = node.textContent.trim();
      }
    });

    return html;
}
