import React, { createContext, useState } from 'react'

export const CustomContext = createContext()

export const Context = (props) => {
    const [cart, setCart] = useState([])

    const value = {
        cart
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}