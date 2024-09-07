import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { FormUserNameInicial } from '../../ui/components/shared/FormUsernameInicial/FormUsernameInicial';

// Definição do tipo para o contexto
interface OverlayContextType {
    overlayVisivel: boolean;
    userName: string;
    showOverlay: () => void;
    hideOverlay: () => void;
    setUserName: (name: string) => void;
    defineUsernameClarity: () => void;
}

export const OverlayContext = createContext<OverlayContextType | undefined>(undefined);

export const OverlayProvider = ({ children }: { children: ReactNode }) => {
    const [overlayVisivel, setOverlayVisivel] = useState(false);
    const [userName, setUserName] = useState('');

    const showOverlay = () => setOverlayVisivel(true);
    const hideOverlay = () => setOverlayVisivel(false);

    const handleSetUserName = (name: string) => {
        localStorage.setItem('userName', name);
        setUserName(name)
    }

    const defineUsernameClarity = useCallback(() => {
        window.clarity('set', 'userName', userName);
    }, [])


    const loadUsername = useCallback(() => {
        const userName = localStorage.getItem('userName');
        if (userName) {
            setUserName(userName);
            defineUsernameClarity();
            hideOverlay();
        } else {
            showOverlay();
        }
    }, [defineUsernameClarity])

    useEffect(() => {
        loadUsername()
    },[loadUsername])

    return (
        <OverlayContext.Provider value={{ overlayVisivel, userName, showOverlay, hideOverlay, setUserName: handleSetUserName, defineUsernameClarity}}>
            {overlayVisivel 
                ? <FormUserNameInicial overlayVisivel={overlayVisivel} /> 
                : <>{children}</> }
        </OverlayContext.Provider>
    );
};
