import { useEffect } from 'react';

const useClickOutside = (ref: any, callback: any) => {
  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, []);
};
export default useClickOutside;
