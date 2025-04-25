import { BaseBackdrop } from "./Backdrop.styled";

interface BackdropProps {
  show: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const Backdrop = ({ show, className, children }: BackdropProps) => {
  return (
    <BaseBackdrop
      className={className}
      $show={show}
    >
      {children}
    </BaseBackdrop>
  );
};
