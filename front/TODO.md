## tsconfig paths alias

## context api

## hook

- useClickOutside

```jsx
import useClickOutside from './useClickOutside';

const [isSideBarOpen, setIsSidebarOpen] = useState(isDesktop);

const sideBarRef = useRef('');

useEffect(() => {
  dispatch({ type: SET_AUTH_USER, payload: authUser });
}, [dispatch, authUser]);

useClickOutside(sideBarRef, () => {
  if (!isDesktop && isSideBarOpen) {
    setIsSidebarOpen(false);
  }
});

import { useEffect } from 'react';

/**
 * React hook that detects click outside an element
 *
 * @param {node} ref, element to detect click outside
 * @param {func} handler, function for invoking when click outside element is detected
 */
export default useClickOutside = (ref, handler) => {
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);

    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  });

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      handler();
    }
  };
};
```
