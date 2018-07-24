export default function moveNestedLists(html: HTMLElement): HTMLElement {

    html.childNodes.forEach((firstUl) => {
        if(firstUl.nodeName == 'UL') {
            firstUl.childNodes.forEach((firstLi) => {
                if(firstLi.nodeName == 'LI') {
                    firstLi.childNodes.forEach((secondUl) => {
                        if(secondUl.nodeName == 'UL') {
                            secondUl.childNodes.forEach((secondLi) => {
                                firstUl.appendChild(secondLi);
                            });
                            secondUl.remove();
                        }
                    })
                }
            })
        }
    });

    return html;
}