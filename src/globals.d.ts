declare global {
    interface Window {
        clarity: (action: string, key: string, value?: string) => void;
    }
}

export {}