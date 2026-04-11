import { useEffect } from "react";

type ScrollRef = React.RefObject<HTMLDivElement>;

type Options = {
  interval?: number; 
};

export function useAutoHorizontalScroll(
  refs: ScrollRef[],
  options?: Options
) {
  const intervalTime = options?.interval ?? 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      refs.forEach((ref) => {
        if (!ref.current) return;

        const el = ref.current;
        const firstChild = el.firstElementChild as HTMLElement | null;
        if (!firstChild) return;

        const scrollAmount = firstChild.clientWidth;

        if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          el.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [refs, intervalTime]);
}
