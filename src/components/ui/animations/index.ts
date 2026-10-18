export const fadeOut = async (
    element: HTMLElement,
    options: KeyframeAnimationOptions = {},
): Promise<void> => {
    const animation = element.animate(
        [
            { opacity: 1, transform: 'translateY(0)' },
            { opacity: 0, transform: 'translateY(0)' },
        ],
        { duration: 50, easing: 'ease-in', fill: 'forwards', ...options },
    );

    try {
        await animation.finished;
    } finally {
        animation.cancel();
    }
};
