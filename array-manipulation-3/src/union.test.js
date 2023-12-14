/* global expect, union */

describe('union(first, second)', function () {
  beforeEach(function () {
    expect(union).to.be.a('function');
  });

  context('[2, 1] and [2, 3]', function () {
    it('returns [2, 1, 3]', function () {
      const first = Object.freeze([2, 1]);
      const second = Object.freeze([2, 3]);
      const output = union(first, second);
      expect(output).to.deep.equal([2, 1, 3]);
    });
  });

  context(
    '["html", "css", "javascript"] and ["php", "css", "sql"]',
    function () {
      it('returns ["html", "css", "javascript", "php", "sql"]', function () {
        const first = Object.freeze(['html', 'css', 'javascript']);
        const second = Object.freeze(['php', 'css', 'sql']);
        const output = union(first, second);
        expect(output).to.deep.equal([
          'html',
          'css',
          'javascript',
          'php',
          'sql',
        ]);
      });
    }
  );

  context(
    '["a", "link", "to", "the", "past"] and ["the", "adventure", "of", "link"]',
    function () {
      it('returns ["a", "link", "to", "the", "past", "adventure", "of"]', function () {
        const first = Object.freeze(['a', 'link', 'to', 'the', 'past']);
        const second = Object.freeze(['the', 'adventure', 'of', 'link']);
        const output = union(first, second);
        expect(output).to.deep.equal([
          'a',
          'link',
          'to',
          'the',
          'past',
          'adventure',
          'of',
        ]);
      });
    }
  );
});
