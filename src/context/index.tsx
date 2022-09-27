import { createContext, useState, useContext, useMemo } from 'react';
import { profileType } from '../../types';

interface AppContextInterface {
    userLogged: profileType;
    setUserLogged: React.Dispatch<React.SetStateAction<profileType>>
}

const contextPet = createContext<AppContextInterface | null>(null);


export function ContextPetProvider(props: any) {
    const [userLogged, setUserLogged] = useState<profileType>({
        _id: '',
        direction: '',
        name: '',
        email: '',
        posts: 0,
        followers: 0,
        sales: 0,
        imagePerfil: ''
    });

    const value = useMemo<AppContextInterface>(() => ({
        userLogged,
        setUserLogged,
    }), [userLogged])

    return <contextPet.Provider value={value} {...props}></contextPet.Provider>
}

export function useContextPet() {
    const context = useContext(contextPet);
    if (!context) {
        throw new Error('The consumer must be at the provider.');
    }
    return context;
}
