import { useCallback, useState, useEffect } from "react";

export function  useLocalStorage(key, defaulValue) {
    return useStorage(key, defaulValue, window.localStorage)
}
export function  useSessionStorage(key, defaulValue) {
    return useStorage(key, defaulValue, window.sessionStorage)
}

function useStorage(key, defaultValue, storageOject) {
    const [value, setValue] = useState(() =>{
        const jsonValue = storageOject.getItem(key);
        if(jsonValue != null) return JSON.parse(jsonValue);

        if(typeof defaultValue ==="function"){
            return defaultValue()
        }else{
           return  defaultValue
        }
    })

    useEffect(()=>{
        if(value === undefined) return storageOject.removeItem(key)
        storageOject.setItem(key, JSON.stringify(value))
    }, [key, value, storageOject])
    const remove = useCallback(()=>{
        setValue(undefined)
    }, [])

    return [value, setValue, remove];
}
