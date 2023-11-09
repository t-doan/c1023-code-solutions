# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  it is the target element that is accessible when we initiate the event.

- Why is it possible to listen for events on one element that actually happen its descendent elements?
  bubbling and capturing

- What DOM element property tells you what type of element it is?
  element.target.tagName

- What does the `element.closest()` method take as its argument and what does it return?
  a selector as its argument and returns the closest ancestor element or itself

- How can you remove an element from the DOM?
  element.remove()

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  set a condition so that the event listener can check if the tag that it clicked is the correct tag.

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
