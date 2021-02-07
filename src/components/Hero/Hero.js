import React, { useState } from 'react'
import Navbar from "../Navbar/Navbar";
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './Hero.elements'
import Sidebar from "../Sidebar/Sidebar";

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greatest Pizza In Moscow</HeroH1>
                    <HeroP>Ready in 1 minute</HeroP>
                    <HeroBtn>Take an order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero