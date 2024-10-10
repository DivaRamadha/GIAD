import React from 'react';
import simas from '../images/clients/simas.png';
import chubb from '../images/clients/chubb.png';
import djubli from '../images/clients/djubli.png';
import narindo from '../images/clients/narindo.png';
import adhi from '../images/clients/adhi.png';
import pasarind from '../images/clients/pasarind.png';
import sismed from '../images/clients/siswamedia.jpg';
import nusatek from '../images/clients/nusatek.png';

// Import CSS
import '../css/clients.css';

const clientImage = {
    height: '10rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}

const Clients = () => {
    return (
        <div className="mt-8 bg-white">
            <section>
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl uppercase title">Our Clients</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-orange-500'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl subtitle">Some of our clients.</h2>
                </div>

                {/* Kontainer untuk scrolling */}
                <div className="overflow-hidden mb-10">
                    <div className="client-slider">
                        <div className="client-slide">
                            {/* Gambar pertama */}
                            <img src={simas} alt="client" style={{...clientImage, maxWidth: '100px', height: 'auto', objectFit: 'contain'}} />
                            <img src={chubb} alt="client" style={{...clientImage, maxWidth: '100px', height: 'auto', objectFit: 'contain'}} />
                            <img src={djubli} alt="client" style={{...clientImage, maxWidth: '100px', height: 'auto', objectFit: 'contain'}} />
                            <img src={narindo} alt="client" style={{...clientImage, maxWidth: '100px', height: 'auto', objectFit: 'contain'}} />
                            <img src={adhi} alt="client" style={{...clientImage, maxWidth: '100px', height: 'auto', objectFit: 'contain'}} />
                            <img src={pasarind} alt="client" style={{...clientImage, maxWidth: '100px', height: 'auto', objectFit: 'contain'}} />
                            <img src={sismed} alt="client" style={{...clientImage, maxWidth: '100px', height: 'auto', objectFit: 'contain'}} />
                            <img src={nusatek} alt="client" style={{...clientImage, maxWidth: '100px', height: 'auto', objectFit: 'contain'}} />
                            
                            {/* Gambar kedua, diulang untuk efek looping */}
                            <img src={simas} alt="client" style={{...clientImage, maxWidth: '100px', height: 'auto', objectFit: 'contain'}} />
                            <img src={chubb} alt="client" style={{...clientImage, maxWidth: '100px', height: 'auto', objectFit: 'contain'}} />
                            <img src={djubli} alt="client" style={{...clientImage, maxWidth: '100px', height: 'auto', objectFit: 'contain'}} />
                            <img src={narindo} alt="client" style={{...clientImage, maxWidth: '100px', height: 'auto', objectFit: 'contain'}} />
                            <img src={adhi} alt="client" style={{...clientImage, maxWidth: '100px', height: 'auto', objectFit: 'contain'}} />
                            <img src={pasarind} alt="client" style={{...clientImage, maxWidth: '100px', height: 'auto', objectFit: 'contain'}} />
                            <img src={sismed} alt="client" style={{...clientImage, maxWidth: '100px', height: 'auto', objectFit: 'contain'}} />
                            <img src={nusatek} alt="client" style={{...clientImage, maxWidth: '100px', height: 'auto', objectFit: 'contain'}} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clients;
