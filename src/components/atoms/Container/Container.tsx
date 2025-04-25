import { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react';
import { BaseContainer } from './Constainer.styled';

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
    className?: string;
    children?: ReactNode;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
    ({ className, children, ...rest }, ref) => {
        return (
            <BaseContainer ref={ref} className={className} {...rest}>
                {children}
            </BaseContainer>
        );
    },
);
Container.displayName = 'Container';
