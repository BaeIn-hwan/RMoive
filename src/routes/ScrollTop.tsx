import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface IPropsScrollTop {
  children: React.ReactNode;
}

export default function ScrollTop(props: IPropsScrollTop) {
  const { children } = props;
  
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
}
