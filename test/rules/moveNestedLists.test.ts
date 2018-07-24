import moveNestedLists from "../../src/rules/moveNestedLists";


describe('moveNestedLists', async () => {

    test('removeTrailingSpace', async () => {

        const div = document.createElement("div");
        div.innerHTML = '<ul><li><ul><li>Nested ul!</li></ul></li></ul>';

        expect(moveNestedLists(div).innerHTML).toBe('<ul><li></li><li>Nested ul!</li></ul>');

    });

    test('removeTrailingSpace with multiple nested lists', async () => {

        const div = document.createElement("div");
        div.innerHTML = '<ul><li><ul><li>Nested ul!</li></ul></li></ul><ul><li><ul><li>Nested ul!</li></ul></li></ul>';

        expect(moveNestedLists(div).innerHTML).toBe('<ul><li></li><li>Nested ul!</li></ul><ul><li></li><li>Nested ul!</li></ul>');

    });

});


