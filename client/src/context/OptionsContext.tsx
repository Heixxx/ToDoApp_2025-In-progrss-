import React, { createContext, useEffect, useState } from "react";
import {Options} from '../Interfaces/OptionsInterface';
import {BaseProvider} from '../Providers/BaseProvider';

export const OptionsContext = createContext<{options: Options | undefined}>({options: undefined});

export const OptionsProvider: React.FC<BaseProvider> = ({children}) =>{
    const [options, setOptions] = useState<Options | undefined>(undefined);

    // useEffect

    return(<OptionsContext.Provider value={{options}}>{children}</OptionsContext.Provider>);
};