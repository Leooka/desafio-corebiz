import React, { useEffect, useState } from 'react'
import axios from "axios";
import { PriceComponent, RatingStars, BuyButton, Flags} from './functions/ProductFunctions'
import Slider from "react-slick";

import './style.scss'


const showcaseSettings = {
    vertical: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 5,
    arrows: true
}

const showcaseSettingsMobile = {
    vertical: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: true
}

export default function ShowcaseItems(){

    const [response, setResponse]  = useState({})
    const [load, setLoad] = useState(0)
    const [error, setError] = useState()


    if(window.innerWidth >= 991){
        var currentSettings = showcaseSettings
    }else{
        var currentSettings = showcaseSettingsMobile
    }

    useEffect(()=> {
        axios.get('https://corebiz-test.herokuapp.com/api/v1/products')
            .then((response) => {
                console.log(response,"response")
                setResponse(response.data)
                setLoad(1)
            })
            .catch((err) => {
                console.error("Erro de carregamento API:" + err);
                setError(err)
            });
    }, []);


    if(error){
        return (
            <h2>Erro no carregamento dos produtos {error} </h2>
        )
    }else{
        if(load === 0){
            return(
                <h2>Carregando Produtos...</h2>
            )
        }
        else{
            return(
                <React.Fragment>
                {response && (
                    <Slider {...currentSettings} className="showcase__list">
                        {response.map((product) => (
                            <article className="product" key={product.productId}>
                                <div className="product__container">
                                    <div className="product__image">
                                        <img src={product.imageUrl} alt={`${product.productName}`} />
                                        <Flags isActive={product.listPrice ? true : false} />
                                    </div>
                                    <div className="product__bottom">
                                        <div className="product__name">
                                            <h4>{product.productName}</h4>
                                        </div>
                                        <div className="product__rating">
                                            <RatingStars stars={product.stars}/>
                                        </div>
                                        <PriceComponent productObject={product}/>

                                        <div className="product__actions">
                                            <BuyButton />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </Slider>
                )}
                </React.Fragment>
            )
        }
    }

}