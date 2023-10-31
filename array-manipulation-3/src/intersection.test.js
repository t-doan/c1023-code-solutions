/* global expect, intersection */

describe('intersection(first, second)', function () {
  beforeEach(function () {
    expect(intersection).to.be.a('function');
  });

  context('[2, 1] and [2, 3]', function () {
    it('returns [2]', function () {
      const first = Object.freeze([2, 1]);
      const second = Object.freeze([2, 3]);
      const output = intersection(first, second);
      expect(output).to.deep.equal([2]);
    });
  });

  context(
    '["html", "css", "javascript"] and ["php", "css", "sql"]',
    function () {
      it('returns ["css"]', function () {
        const first = Object.freeze(['html', 'css', 'javascript']);
        const second = Object.freeze(['php', 'css', 'sql']);
        const output = intersection(first, second);
        expect(output).to.deep.equal(['css']);
      });
    }
  );

  context(
    '["a", "link", "to", "the", "past"] and ["the", "adventure", "of", "link"]',
    function () {
      it('returns ["link", "the"]', function () {
        const first = Object.freeze(['a', 'link', 'to', 'the', 'past']);
        const second = Object.freeze(['the', 'adventure', 'of', 'link']);
        const output = intersection(first, second);
        expect(output).to.deep.equal(['link', 'the']);
      });
    }
  );
});
