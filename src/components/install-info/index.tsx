import { Info, Share } from 'lucide-react';
import { useRef, useSyncExternalStore } from 'react';

import { StyledInstallInfo, StyledInstallInstructions } from '@/components/install-info/styles';
import { useOutsideClick } from '@/hooks/useOutsideClick';

const getIsStandalone = () =>
    window.matchMedia('(display-mode: standalone)').matches ||
    (navigator as Navigator & { standalone?: boolean }).standalone === true;

const subscribeToDisplayMode = (onChange: () => void) => {
    const displayMode = window.matchMedia('(display-mode: standalone)');
    displayMode.addEventListener('change', onChange);
    return () => displayMode.removeEventListener('change', onChange);
};

export const InstallInfo = () => {
    const detailsRef = useRef<HTMLDetailsElement>(null);
    const isStandalone = useSyncExternalStore(subscribeToDisplayMode, getIsStandalone, () => false);

    useOutsideClick(detailsRef, () => {
        const details = detailsRef.current;

        if (details?.open) {
            details.open = false;
        }
    });
    if (isStandalone) {
        return null;
    }

    return (
        <StyledInstallInfo ref={detailsRef}>
            <summary aria-label="How to install the app" title="Install the app">
                <Info aria-hidden="true" />
            </summary>
            <StyledInstallInstructions>
                <h2>Install help</h2>
                <p>iPhone:</p>
                <ol>
                    <li>
                        Select Share <Share aria-hidden="true" size="1em" />
                    </li>
                    <li>Select Add to Home Screen.</li>
                    <li>Enable Open as Web App if the option appears.</li>
                    <li>Select Add.</li>
                </ol>
                <p>Android with Chrome:</p>
                <ol>
                    <li>
                        Open the menu{' '}
                        <span
                            style={{
                                fontSize: '1rem',
                                marginLeft: '1rem',
                                padding: 0,
                            }}
                        >
                            ⋮
                        </span>
                    </li>
                    <li>Select Install app or Add to Home screen.</li>
                    <li>Confirm by Selectping Install or Add.</li>
                </ol>
            </StyledInstallInstructions>
        </StyledInstallInfo>
    );
};
