# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  Hooks are functions that enable functional components to manage state and events

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

1. Hooks should only be called at the top level of the component
2. Hooks should only be called from React functional components or custom hooks
3. Hooks should have the same order on every render, cannot use conditionals or loops to call

- What is the purpose of state in React?
  Used to manage mutable data in ca component

- Why can't we just maintain state in a local variable?
  Local variables do not trigger a re0render of a component when their values change

- What two actions happen when you call a `state setter` function?
  both updates the state with the new value and triggers a re-render of the component

- When does the local `state variable` get updated with the new value?
  gets updated with the new value during the next render cycle of the component

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
