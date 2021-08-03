### 임시 DB 구성

#### 할 일

- time  stamp 추가

#### lists

특정 list에서 card 값을 참조해서 items 배열에 넣음

```json
{
  "lists": [
    {
      "id": "a1",
      "name": "req",
      "items": [
        {
          "id": "c1",
          "content": "first task"
        },
        {
          "id": "c2",
          "content": "second task"
        },
      ]
    },
    {
      "id": "836655d8-6ffe-41d6-bf2b-498fc66cc365",
      "name": "To do",
      "items": []
    }
  ],
}
```

#### cards

```json
{
  "cards": [
    { "id": "card1",
      "listId": "a1",
      "items":[
        {
          "id": "c1",
          "content": "first task"
        },
        {
          "id": "c2",
          "content": "second task"
        }
      ]
    }
  ]
}
```
