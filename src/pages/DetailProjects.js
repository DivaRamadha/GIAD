import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const DetailProduct = () => {
    const { id } = useParams();
    const data = [
        {
            id: '1',
            name: 'Website for Simas',
            image: 'simas.png',
            link: 'https://simas.id/'
        },
        {
            id: '2',
            name: 'Website for Chubb',
            image: 'chubb.png',
            link: 'https://www.chubb.com/id-id/'
        },
        {
            id: '3',
            name: 'Website for Djubli',
            image: 'djubli.png',
            link: 'https://www.djubli.id/'
        },
        {
            id: '4',
            name: 'Website for Narindo',
            image: 'narindo.png',
            link: 'https://www.narindosatrya.co.id/'
        },
        {
            id: '5',
            name: 'Website for Adhi',
            image: 'adhi.png',
            link: 'https://www.adhi.co.id/'
        },
        {
            id: '6',
            name: 'Website for Pasarind',
            image: 'pasarind.png',
            link: 'https://pasarind.id/'
        },
        {
            id: '7',
            name: 'Website for Siswamedia',
            image: 'siswamedia.jpg',
            link: 'https://siswamedia.id/'
        },
        {
            id: '8',
            name: 'Website for Nusatek',
            image: 'nusatek.png',
            link: 'https://www.nusatek.com/'
        }
    ]

    const product = data.find((item) => item.id === id);

    return (
        <div className="container mx-auto p-4">
            <Link to="/projects" className="flex items-center mb-4">
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                Back to projects
            </Link>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <img src={require(`../images/projects/${product.image}`)} alt={product.name} className="w-full my-4" />
            <a href={product.link} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View website
            </a>
        </div>
    );
}

export default DetailProduct;
