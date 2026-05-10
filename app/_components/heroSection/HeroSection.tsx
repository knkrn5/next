import React from 'react'
import Flow from './Flow'
import HeroText from './HeroText'



export default function HeroSection() {
    return (
        <div className='flex'>
            <HeroText />
            <Flow />
        </div>
    )
}
