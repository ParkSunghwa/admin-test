import { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react';
import { BaseRowContainer } from './RowConstainer.styled';

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
    className?: string;
    children?: ReactNode;
}

export const RowContainer = forwardRef<HTMLDivElement, ContainerProps>(
    ({ className, children, ...rest }, ref) => {
        return (
            <BaseRowContainer ref={ref} className={className} {...rest}>
                {children}
            </BaseRowContainer>
        );
    },
);
RowContainer.displayName = 'RowContainer';
