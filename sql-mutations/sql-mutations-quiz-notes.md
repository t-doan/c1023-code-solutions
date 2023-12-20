# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?
  Create - Insert
  Read - Select
  Update - Update
  Delete - Delete

- How do you add a row to a SQL table?
  insert into "table" (attributes)
  values (set attributes)

- How do you add multiple rows to a SQL table at once?
  use commas to separate the tuples of values

- How do you update rows in a database table?
  update "table"
  set "attribute" expression
  where "id"

- How do you delete rows from a database table?
  delete
  from "table"
  where "id"

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  It include specificity on where the object is as it would do for all the meets the condition

- How do you accidentally delete or update all rows in a table?
  without specifying WHERE or what id you want to update/delete

- How do you get back the modified row without a separate `select` statement?
  returning \*

- Why did you get an error when trying to delete certain films?
  Because the key is being used by other tables

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
