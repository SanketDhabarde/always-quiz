import { useEffect } from "react";

export const useTitle = (title: string) => {
  useEffect(() => {
    document.title = `Always quiz | ${title}`;
  }, [title]);
};
