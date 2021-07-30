
## useStore 사용 예시

```js
import { useStore } from '../context';
import { SET_MEMO } from '../context/memo';

export default function () {
  const [_, dispatch] = useStore();
  const onClick = () => {
    dispatch({
      type: SET_MEMO,
      payload: {
        type: 'good type',
        text: 'text',
        date: new Date(),
        autoClose: false,
      },
    });
  };
}
