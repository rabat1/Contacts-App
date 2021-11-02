import React, { createRef } from 'react'

export const NavigationRef = createRef();
export const navigate = (name,params) =>{
    if(NavigationRef.current){
        NavigationRef.current.navigate(name,params)
    }
}
