import React, { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {

    return (
        <section className="App">
            <TwitterFollowCard userName="midudev" name="Miguel Duran" />
            <TwitterFollowCard userName="ManuRodriguezC" name="Manuel Rodriguez" initialIsFollowing />
            <TwitterFollowCard userName="Davidperez" name="David Perez"/>
            <TwitterFollowCard />
        </section>
    )
}