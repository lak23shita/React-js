import React from 'react'
//this is love is the default value which is used the the provider is not used
const UserContext =React.createContext('this is love')

const UserProvider = UserContext.Provider
const UserConsumer =UserContext.Consumer

export {UserProvider,UserConsumer}