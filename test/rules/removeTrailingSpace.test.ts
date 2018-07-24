import removeTrailingSpace from "../../src/rules/removeTrailingSpace";

test('removeTrailingSpace', async () => {
    const html = document.createElement("div");
    html.innerText = " Hello ";
    expect(removeTrailingSpace(html).innerText).toBe("Hello");
});
