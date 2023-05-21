import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `DreamRideToy-${title}`;
  }, [title]);
};

export default useTitle;
