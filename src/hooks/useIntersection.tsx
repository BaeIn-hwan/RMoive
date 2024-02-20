import { useEffect, useState } from "react";

// HTMLElement[] | HTMLElement
export default function useIntersection(props: any) {
  const { current } = props;
  const [first, setfirst] = useState("");

  useEffect(() => {
    console.log(props.current);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(111);
          } else {
            console.log(222);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    io.observe(props.current);

    return () => {
      io.disconnect();
    };
  }, []);

  return [first, setfirst];
}
