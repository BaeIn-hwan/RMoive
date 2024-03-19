import { useRef, useEffect, useState, RefObject } from "react";

interface IPropsOptions {
  root?: HTMLElement;
  rootMargin?: string;
  threshold?: number;
}

export default function useIo<T extends HTMLElement>(
  options?: IPropsOptions
): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setShow(entry.isIntersecting);
      });
    }, options);

    const target = ref.current;

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [options]);

  return [ref, show];
}
