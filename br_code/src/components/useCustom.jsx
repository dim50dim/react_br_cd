import { useEffect, useState } from "react"

export default function useCustom(defaultValue){
     const [value, setValue] = useState('');
     useEffect(() => {
        setValue('Updated')
     },[]);
     return value;
}