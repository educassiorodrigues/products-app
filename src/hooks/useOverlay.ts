import { useContext } from "react";
import { OverlayContext } from "../core/contexts/UserContext";

export const useOverlay = () => {
    const context = useContext(OverlayContext);
    if (context === undefined) {
        throw new Error('useOverlay must be used within an OverlayProvider');
    }
    
    return context;
};
