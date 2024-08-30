import { createContext, ReactNode, useState } from 'react';
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
    const [overlayVisivel, setOverlayVisivel] = useState(true);
    const [userName, setUserName] = useState('');

    const showOverlay = () => setOverlayVisivel(true);
    const hideOverlay = () => setOverlayVisivel(false);
    const handleSetUserName = (name: string) => setUserName(name);

    function defineUsernameClarity()  {
        window.clarity('set', 'userName', userName);
    }

    return (
        <OverlayContext.Provider value={{ overlayVisivel, userName, showOverlay, hideOverlay, setUserName: handleSetUserName, defineUsernameClarity}}>
            {overlayVisivel 
                ? <FormUserNameInicial overlayVisivel={overlayVisivel} /> 
                : <>{children}</> }
        </OverlayContext.Provider>
    );
};
