# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  '&&' evaluates operands from left to right and return the first falsy it encounters. if all is true, then the last value is return
  '||' evaluates operands from left to right and return true if any.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  Since we can determine what result we want, we put that first and never have to evaluate the latter part

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  "??" returns the right side operand if the left is null or undefined. This is different from "||" as it can return other falsy values

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  it is a conditional operator that is an alternative to 'if/else' statement. If the condition has a falsy expressions then it would execute the expression for the false.

- What is the `?.` (optional chaining) operator? When would you use it?
  The "?." operator is used to check if a property or function does not exist in the expression. Instead of grabbing a error or exception, it will return a undefined.
  Best used to explore content of an object when it is unknown.

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  the spread syntax allows iterable to be expanded in places where zero or more arguement/element are expected. In array, it can expand to take parameters and copy itself into another array.
  In objects, it can copy itself into another object as well as merging.

- What data types can be spread into an array? Into an object?
  Only strings and arrays can be spread in array. For objects, objects only.

- How does spread syntax differ from rest syntax?
  spread syntax expands its elements into another while rest syntax condenses multiple elements into one

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
