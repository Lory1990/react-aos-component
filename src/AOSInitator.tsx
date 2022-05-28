import React, { useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css";

interface IAOSInitiatorProps extends AOS.AosOptions{

}


const AOSInitator: React.FC<IAOSInitiatorProps> = ({children, ...props}) => {

    useEffect(()=>{
        AOS.init(props);
    }, [])

    return <>{children}</>
}

export default AOSInitator
