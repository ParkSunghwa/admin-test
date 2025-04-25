import { FC, ReactNode, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { Text } from "@Atoms/Typography";
import { Backdrop } from "@Atoms/Backdrop";
import { ModalChildrenContainer, ModalContainer, ModalImageBox } from "./Modal.styled";
import { useBodyScrollLock } from "@Hooks/useBodyScrollLock";
import { Container } from "@Atoms/Container";
import { Gap } from "@Styles/App.styled";
import { RowContainer } from "@Atoms/RowContainer";
import { useOnClickOutside } from "@Hooks/useOnClickOutside";

interface ModalProps {
  show: boolean;
  title?: string | ReactNode;
  width?: string;
  height?: string;
  onClose?: () => void;
  closeOnClickOutside?: boolean;
  className?: string;
  children?: ReactNode;
  lockScroll?: boolean;
}

export const Modal = ({ show, title, width, height, onClose, closeOnClickOutside, lockScroll, className, children }: ModalProps) => {
  useBodyScrollLock(lockScroll);
  const modalRef = useOnClickOutside<HTMLDivElement>(onClose);

  return (
    <Backdrop show={show}>
      <ModalContainer
        className={className}
        ref={closeOnClickOutside && show ? modalRef : undefined}
        $width={width}
        $height={height}
      >
        {title && (
          <Container>
            <Text weight="bold">{title}</Text>
            <Gap $height="16px" />
          </Container>
        )}
        <ModalChildrenContainer $fixedHeight={!!height}>{children}</ModalChildrenContainer>
      </ModalContainer>
    </Backdrop>
  );
};
