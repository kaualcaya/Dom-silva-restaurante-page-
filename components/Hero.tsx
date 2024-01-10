import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
    return (
        <section className=' max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-38 lg:py-20 xl:flex-row'>
            <div className='hero-map '></div>

            {/*LEFT SIDE*/}
            <div className=' relative z-20 flex flex-1 flex-col xl:w-1/2'>

                <h1 className='font-[Niconne] lg:bold-88 text-white'>Dom Silva <br />Restaurante</h1>
                <p className=' regular-16  mt-6 bold-12 text-gray-10 xl:max-w-[520px]'>Cada prato é uma viagem de sabores, cada refeição uma celebração. Sinta-se em casa, nosso restaurante é seu refúgio gourmet.</p>

                <div className=' my-11 flex flex-wrap gap-5'>
                    <div className=' flex items-center gsp-2'>
                        {Array(5).fill(1).map((_, index) => (
                            <Image
                                src="/star.svg"
                                key={index}
                                alt='star'
                                width={24}
                                height={24}
                            />
                        ))}
                    </div>


                    <p className='bold-16 lg:bold-20 text-white'>
                        198k <span className='bold-16 lg:regular-20 ml-1'> Excellent Reviews</span>
                    </p>

                </div>

                <div className='flex w-full gap-3 sm:flex-row '>
                    <Button
                        type='button'
                        title='Download App'
                        variant="btn_red_dark"
                    />

                    <Button
                        type='button'
                        title='How we work?'
                        icon='/play.svg'
                        variant="btn_white_text"
                    />
                </div>
            </div>

            
        </section>

    )
}

export default Hero
