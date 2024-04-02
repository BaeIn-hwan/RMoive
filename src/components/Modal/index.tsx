import { useEffect, useRef } from "react";
import Portal from "../Portal";
import * as S from "./styled";

interface IPropsModal {
  title?: string | React.ReactNode;
  open: boolean;
  close: () => void;
  closeCallback?: () => void;
  children: React.ReactNode;
}

export default function Modal(props: IPropsModal) {
  const { title, open, close, closeCallback, children } = props;
  const scrollY = useRef(0);

  const onClose = () => {
    if (closeCallback && typeof closeCallback === "function") {
      closeCallback();

      return;
    }

    close();
  };

  useEffect(() => {
    const root = document.querySelector("#root") as HTMLDivElement;
    scrollY.current = window.scrollY;

    root.style.marginTop = `-${window.scrollY}px`;
    root.style.position = `fixed`;
    window.scrollTo(0, 0);

    return () => {
      root.style.marginTop = ``;
      root.style.position = ``;
      window.scrollTo(0, scrollY.current);
      scrollY.current = 0;
    };
  }, []);

  return (
    <Portal open={open}>
      <div>
        <S.Dimmed onClick={onClose}></S.Dimmed>
        <S.Container onClick={(e) => e.stopPropagation()}>
          <S.CloseArea>
            <S.CloseIcon onClick={onClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </S.CloseIcon>
          </S.CloseArea>

          <S.Modal>
            {title && <S.Header>{title}</S.Header>}

            {children}
          </S.Modal>
        </S.Container>
      </div>
    </Portal>
  );
}
