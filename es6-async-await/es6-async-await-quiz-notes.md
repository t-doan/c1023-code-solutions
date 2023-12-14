# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  await to wait for promises to resolve
  async to declare a function to be asynchronous

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  await promiseObj -> fufillment value of the Promise, whether or not it is the resolved or rejected value
  Promise.then -> handle the Resolved value (can also handle Rejected value)
  Promise.catch -> handle the Rejected value

- When do you use `async`?
  Whenever you want to use await

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  Use 'await' on a promises.
  When things are synchronous.
  Do not use await on not promises.

- How do you handle errors with `await`?
  use try/catch on handling errors with await

- What do `try`, `catch` and `throw` do? When do you use them?
  try can do the fulfilled statement
  catch will do error handling
  throw will executing an error stop

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  it will not work. Won't find out on the Promise

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async/await, easier

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
