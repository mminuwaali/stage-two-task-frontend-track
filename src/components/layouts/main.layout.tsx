import $header from '../header'
import $footer from '../footer'
import React, { JSXElementConstructor } from 'react'

export default ($component: JSXElementConstructor<any>) => () => {
    return <>
        <$header />
        <main className='flex flex-col justify-start items-center gap-4 px-[5%] py-10 w-full min-h-screen grow'>
            <$component />
        </main>
        <$footer />
    </>
}