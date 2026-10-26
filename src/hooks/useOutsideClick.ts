import { useEffect, type RefObject } from 'react';

export const useOutsideClick = <T extends HTMLElement>(
    ref: RefObject<T | null>,
    onOutsideClick: (event: PointerEvent) => void,
) => {
    useEffect(() => {
        const handlePointerDown = (event: PointerEvent) => {
            const element = ref.current;

            if (element && event.target instanceof Node && !element.contains(event.target)) {
                onOutsideClick(event);
            }
        };

        document.addEventListener('pointerdown', handlePointerDown);
        return () => document.removeEventListener('pointerdown', handlePointerDown);
    }, [ref, onOutsideClick]);
};
