import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `CarToyExpress-${title}`;
    },[title])
};

export default useTitle;