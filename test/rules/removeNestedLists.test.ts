import moveNestedLists, { default as removeNestedLists } from '../../src/rules/removeNestedLists';


describe('removeNestedLists', async () => {

    test('removeTrailingSpace with multiple nested lists', async () => {

      const html = '<ul><li><ul><li>Nested ul!</li></ul></li></ul>';

      const document = new DOMParser().parseFromString(html, "text/xml");

      expect(moveNestedLists(document).documentElement.outerHTML).toBe('<ul><li></li><li>Nested ul!</li></ul>');

    });

});


