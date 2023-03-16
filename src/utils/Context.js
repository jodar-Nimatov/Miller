import React, { createContext, useState} from 'react'

export const CustomContext = createContext()

export const Context = (props) => {
    const [cart, setCart] = useState([])
    const [id, setId] = useState(1)
    const [category, setCategory] = useState('coffee')
    const chooseId = (item) => {
        if(item.kislinka != undefined){
            setCategory('catalog')
        }
        if(item.place == 'healthy'){
            setCategory('healthy-eatings')
        }
        if(item.kislinka == undefined && item.place == 'tea'){
            setCategory('tea')
        }
        setId(item.id)
    }
    const [user, setUser] = useState([])
 
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
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    const delCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id))
        localStorage.setItem('cart', JSON.stringify(cart))
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
        localStorage.setItem('cart', JSON.stringify(cart))
    }
    const delTo = id => {
        setCart(prev => prev.slice(100))
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    // useEffect(() => {
    //     if (localStorage.getItem('user') === null){
    //         setUser(JSON.parse(localStorage.getItem('user')))
    //     }

    //     if (localStorage.getItem('cart') === null){
    //         setCart(JSON.parse(localStorage.getItem('cart')))
    //     }
    // }, [])
    
    
    const value = {
        cart,
        addCart,
        plusOneCart,
        minusOneCart,
        delCart,
        id,
        chooseId,
        category,
        delTo,
    }
 
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}