import React from 'react'
import Navbar from "../Navbar/Navbar";
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './Hero.elements'

const Hero = () => {
    return (
        <HeroContainer>
            <Navbar />
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