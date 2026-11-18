import { createContext, useContext, useState, useEffect} from 'react';

export interface PokemonCard {
    id: number;
    nombre: string;
    type: string;
    image: string;
    isFavorite: boolean;
}

export interface Trainer {
    id: number;
    fullName: string;
    document: {type: string; dni: string};
    detaRegistrer: string;
}

interface PokemonContextType {
    entrenadores: Trainer[];
    entrenadorActivo: Trainer | null;
    mochilaActual: PokemonCard [];
    guardarPokemonEnMochila: (pokemon : PokemonCard) => void;
    registrarEntrenador: (entrenador: Trainer) => void;
    seleccionarEntrenador: (entrenador: Trainer) => void;
    seleccionarPokemonFavorito: (id: number) => void;
    eliminarPokemonDeMochila: (id: number) => void;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [entrenadores, setEntrenadores] = useState<Trainer[]>([]);
    const [entrenadorActivo, setEntrenadorActivo] = useState<Trainer | null>(null);
    const [mochilaActual, setMochilaActual] = useState<PokemonCard[]>([]);
}

//cargar en la base de daos los guardados//