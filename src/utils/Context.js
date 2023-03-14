import React, { createContext, useState, useEffect } from 'react'

export const CustomContext = createContext()

export const Context = (props) => {
    const [cart, setCart] = useState([])
    const [id, setId] = useState(1)
    const chooseId = (item) => 
    setId(item.id) 
    const addCart = (product) => {
        setCart(prev => [...prev, {
            ...product,
        count: 1
    }])
    }

    const plusOneCart = (id) => {
        setCart(prev => prev.map(item => {
            if (item.id === id) {
                return {...item, count: item.count + 1}
            }
            return item
        } )
        )
    }

    const delCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id))

    }

    const minusOneCart = (id) => {

        let count = cart.find(item => item.id === id).count

        if (count === 1) {
            setCart(prev => prev.filter(item => item.id !== id))
        } else {
            setCart(prev => prev.map(item => {
                    if (item.id === id) {
                        return {...item, count: item.count - 1}
                    }
                    return item
                } )
            )
        }


    }
 
    const value = {
        cart,
        addCart,
        plusOneCart,
        minusOneCart,
        delCart,
        id,
        chooseId
    }
 
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}