import { DataContext, DataType } from "@/app/ClientProvider";
import { useContext } from "react";

export function useDataContexte(){
    return useContext(DataContext);
}

export function useGetData() {
    const { data } = useDataContexte()
    return data
}

export function useGetTheme() {
    const { theme } = useDataContexte()
    return theme
}

export function useSetData(){
    const { setData } = useDataContexte()
    return setData
}

export function useSetTheme(){
    const { setTheme } = useDataContexte()
    return setTheme
}