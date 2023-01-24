import React, { useState, useEffect, useRef } from 'react'
import CardProducts from '../../components/CardProducts';
import api from '../../service/api';
import { Product } from '../../types/Product';
import styled from 'styled-components'
import { GrNext, GrPrevious } from "react-icons/gr";
import Bg_clinique from '../../assets/images/background_clinique.jpg'

const Container = styled.main`
  margin: 2em 8em;
  background-image: url(${Bg_clinique});
  background-size: cover;
  background-repeat: no-repeat;
  height: 25em;
  
  section {
    display: flex;
    justify-content: space-around;
    padding: .9em;
    align-items: center;
    width: 36em;
  }

  .buttonContainer {
    background-color: #F1f1f1;
    border-radius: 2em;
    width: 2.3em;
    height: 2.3em;
    border:none;
    padding: 0 1.2em .2em .7em;
    margin-right:2em;
    -webkit-box-shadow: 4px 4px 4px rgba(50, 50, 50, 0.3);
	-moz-box-shadow: 4px 4px 4px rgba(50, 50, 50, 0.3);
	box-shadow: 4px 4px 4px rgba(50, 50, 50, 0.3);
  }

`

const ProductsSectionClinique = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const carousel = useRef(null);

    async function request() {
        await api.get('/products.json').then(({ data }) => {
            setProducts(data)
            console.log(setProducts)
        })
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
            request()
            setLoading(false);
        }, 3000)
        console.log(products);
    }, []);

    return (
        <Container>

            <section>
            <button className='buttonContainer'
                         >
                            <GrPrevious />
                        </button>
            {products.map((item, index) => (
                item.brand == 'clinique'  &&
                item.product_type == 'bronzer' &&
                item.price == 28 ?
                    <div>
                        <CardProducts
                            key={index}
                            name={item.name}
                            price={item.price}
                            image_link={item.image_link}
                            category={item.product_type}
                        /></div> : null
            ))}
             <button className='buttonContainer'>
                            <GrNext />
                        </button>
            </section>
        </Container>
    )
}

export default ProductsSectionClinique