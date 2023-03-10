import React from 'react'
import image1 from '../../../assets/icons/1.png'
import image2 from '../../../assets/icons/2.png'
import image3 from '../../../assets/icons/3.png'
import image4 from '../../../assets/icons/4.png'
import image5 from '../../../assets/icons/5.png'
import image6 from '../../../assets/icons/6.png'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const StyledCategories = styled.section`
    display:flex;
    margin: 0 16em;
    justify-content: space-around;

    figure {
        background-size: cover;
        width: 80px;
        height: 80px;
    }

    p {
        font-family: var(--font-overpass);
        color: #888585;
        text-align: center;
        font-weight: 700;
    }

    div {
        cursor: pointer
    }

    .image1 {
        background-image: url(${image1});
    }

    .image2{
        background-image: url(${image2})
    }

    .image3 {
        background-image: url(${image3});
    }

    .image4 {
        background-image: url(${image4})
    }

    .image5 {
        background-image: url(${image5});
    }

    .image6 {
        background-image: url(${image6})
    }
`

const Categories = () => {
    const navigate = useNavigate();
    
    return (
        <StyledCategories>
            <div onClick={() => navigate(`/products/bronzer`)}>
                <figure className='image1'></figure>
                <p>bronze</p>
            </div>
            <div onClick={() => navigate(`/products/nail_polish`)}>
                <figure className='image2'></figure>
                <p>esmalte</p>
            </div>
            <div onClick={() => navigate(`/products/eyeshadow`)}>
                <figure className='image3'></figure>
                <p>sombra</p>
            </div>
            <div onClick={() => navigate(`/products/lipstick`)}>
                <figure className='image4'></figure>
                <p>batom</p>
            </div>
            <div onClick={() => navigate(`/products/foundation`)}>
                <figure className='image5'></figure>
                <p>base</p>
            </div>
            <div onClick={() => navigate(`/products/blush`)}>
                <figure className='image6'></figure>
                <p>blush</p>
            </div>
        </StyledCategories>
    )
}

export default Categories