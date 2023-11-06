# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  We log things to console to see that the code is working properly by outputting the results throughout.

- What is a "model"?
  a interface that treats html as a tree structure

- Which "document" is being referred to in the phrase Document Object Model?
  html document

- What is the word "object" referring to in the phrase Document Object Model?
  <tag>s

- What is a DOM Tree?
  a diagram that represents how the html tags are laid out and how they represent each other as parents and children

- Give two examples of `document` methods that retrieve a single element from the DOM.
  document.getElementById, document.querySelector

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  document.querySelectorAll

- Why might you want to assign the return value of a DOM query to a variable?
  To log and iterate the value for functions

- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  The browser needs to parse all of the elements in the HTML page before JS code can access them

- What does `document.querySelector()` take as its argument and what does it return?
  takes a string that is the css selector tag and returns the first element of that tag

- What does `document.querySelectorAll()` take as its argument and what does it return?
  takes a string that is the css selector tag and returns all the element of that tag.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
