import { useLayoutEffect } from 'react';

const useDocumentTitle = (title) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = 'V18 - eCommerce React App';
    }
  }, [title]);
};

export default useDocumentTitle;
