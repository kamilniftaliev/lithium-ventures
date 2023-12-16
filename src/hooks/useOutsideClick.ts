import { useLayoutEffect } from "react";

export function useOutsideClick(
  node: HTMLElement | null,
  callback: () => void
) {
  useLayoutEffect(() => {
    const outsideClickListener = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", outsideClickListener);

    return () => {
      document.removeEventListener("click", outsideClickListener);
    };
  }, [callback, node]);
}
