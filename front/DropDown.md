이런 형태로 가공

```js
const itemsFromBackend = [
  { id: uuid(), content: 'First task' },
  { id: uuid(), content: 'Second task' },
  { id: uuid(), content: 'Third task' },
  { id: uuid(), content: 'Fourth task' },
  { id: uuid(), content: 'Fifth task' },
];

const columnsFromBackend = {
  [uuid()]: {
    name: 'Requested',
    items: itemsFromBackend,
  },
  [uuid()]: {
    name: 'To do',
    items: [],
  },
  [uuid()]: {
    name: 'In Progress',
    items: [],
  },
  [uuid()]: {
    name: 'Done',
    items: [],
  },
};
```

```js
const newData = mock.reduce((acc, curr, i) => {
  acc[curr.id] = { ...curr };
  return acc;
}, {});
```
