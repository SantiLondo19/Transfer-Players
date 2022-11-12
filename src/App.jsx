import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { WagmiConfig } from 'wagmi'
import { Ingresar } from './Ingresar'
import { Players } from './Players'
import { chains, wagmiClient } from './rainbow'

export const App = () => {
    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Ingresar />} />
                        <Route path="/busqueda" element={<Players />} />
                    </Routes>
                </BrowserRouter>
            </RainbowKitProvider>
        </WagmiConfig>         
    )
}


