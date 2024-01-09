# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  In the initial render, step 1: triggering the render

- What is a React Effect?
  Allows to synchronize a component with some external system

- When should you use an Effect and when should you not use an Effect?
  only use to step out of React code and synchronize with some external system

- When do Effects run?
  After every re-render

- What function is used to declare an Effect?
  useEffect()

- What are Effect dependencies and how do you declare them?
  dependencies are determined based on the code inside of the Effect

- Why would you want to clean up from an Effect?
  if Effect breaks when remounting then, it is needed

- How do you clean up from an Effect?
  return the opposite of what the Effect is doings

- When does the cleanup function run?
  Before the Effect is ran another time and during the unmount.

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
