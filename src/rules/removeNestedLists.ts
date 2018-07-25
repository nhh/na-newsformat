export default function removeNestedLists(html: Document): Document {

  const nestedUls = html.querySelectorAll('ul > li > ul');

  if(nestedUls.length == 0) {
    return html;
  }

  nestedUls.forEach((ul) => {
    for(let i = 0; i < ul.childElementCount; i++) {
      ul.parentNode!.parentNode!.appendChild(ul.childNodes[i]);
    }
    ul.remove();
  });

  return html;
}
