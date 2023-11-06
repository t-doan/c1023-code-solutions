# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  To check if the functions and code is properly working

- What is the purpose of events and event handling?
  To let the user know that the system is giving us a signal and we react by having a block of code pertaining to that event

- Are all possible parameters required to use a JavaScript method or function?
  No

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener()

- What is a callback function?
  A callback function is a function passed into another function as an argument.

- What object is passed into an event listener callback when the event fires?
  event

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  event.target is the dom object that was passed through queryselector(). We can check for the target for the even using 'this' keyword.

- What is the difference between these two snippets of code?
  `js
    element.addEventListener('click', handleClick)
    `
  `js
    element.addEventListener('click', handleClick())
    `
  The first one is taking the name of the function and will listen to the event 'click'. When the event occurs, it will pass the function as an argument for the callback.
  The second one is taking the function and it will run it once we run the code making the argument that we pass for the function null as we did not do the event it should be listening for.

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
