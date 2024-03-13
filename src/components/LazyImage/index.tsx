import { useEffect, useRef } from "react";

interface IPropsLazyImage {
  src: string;
  alt?: string;
}

export default function LazyImage(props: IPropsLazyImage) {
  const { src, alt = "" } = props;
  const thumb = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target instanceof HTMLImageElement && entry.isIntersecting) {
          entry.target.setAttribute("src", entry.target.dataset.src as string);
        }
      });
    });

    const thumbCurrent = thumb.current;

    if (thumbCurrent) {
      io.observe(thumbCurrent);
    }

    return () => {
      if (thumbCurrent) {
        io.unobserve(thumbCurrent);
      }
    };
  }, []);

  return (
    <>
      <img src="" data-src={src} alt={alt} ref={thumb} />
    </>
  );
}
