export function Flags(props){
    if(props.isActive === true){
        return(
            <div className="flag-active">
                <svg width="82" height="73" viewBox="0 0 82 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M82 72.0408L0.639966 4.76837e-06L82 4.76837e-06L82 72.0408Z" fill="#F8475F"/>
                    <path d="M47.344 28.3909C46.192 28.3909 45.1893 28.1563 44.336 27.6869C43.4933 27.2069 42.8426 26.5349 42.384 25.6709C41.9253 24.7963 41.696 23.7723 41.696 22.5989C41.696 21.4256 41.9253 20.4069 42.384 19.5429C42.8426 18.6683 43.4933 17.9963 44.336 17.5269C45.1893 17.0576 46.192 16.8229 47.344 16.8229C48.496 16.8229 49.4933 17.0576 50.336 17.5269C51.1893 17.9963 51.84 18.6683 52.288 19.5429C52.7466 20.4069 52.976 21.4256 52.976 22.5989C52.976 23.7723 52.7466 24.7963 52.288 25.6709C51.8293 26.5349 51.1733 27.2069 50.32 27.6869C49.4773 28.1563 48.4853 28.3909 47.344 28.3909ZM47.344 26.1349C48.1973 26.1349 48.864 25.8363 49.344 25.2389C49.824 24.6309 50.064 23.7509 50.064 22.5989C50.064 21.4469 49.8186 20.5723 49.328 19.9749C48.848 19.3776 48.1866 19.0789 47.344 19.0789C46.4906 19.0789 45.824 19.3776 45.344 19.9749C44.864 20.5616 44.624 21.4363 44.624 22.5989C44.624 23.7616 44.864 24.6416 45.344 25.2389C45.824 25.8363 46.4906 26.1349 47.344 26.1349ZM56.1743 28.3429C55.737 28.3429 55.385 28.2096 55.1183 27.9429C54.8517 27.6763 54.7183 27.3243 54.7183 26.8869V18.3269C54.7183 17.8896 54.8357 17.5536 55.0703 17.3189C55.305 17.0843 55.641 16.9669 56.0783 16.9669H61.4543C61.9343 16.9669 62.2863 17.0629 62.5103 17.2549C62.7343 17.4363 62.8463 17.7296 62.8463 18.1349C62.8463 18.5296 62.729 18.8176 62.4943 18.9989C62.2703 19.1803 61.9237 19.2709 61.4543 19.2709H57.6143V21.3509H61.1343C61.6037 21.3509 61.9503 21.4469 62.1743 21.6389C62.409 21.8309 62.5263 22.1243 62.5263 22.5189C62.5263 22.9136 62.409 23.2016 62.1743 23.3829C61.9503 23.5643 61.6037 23.6549 61.1343 23.6549H57.6143V26.8869C57.6143 27.3349 57.481 27.6923 57.2143 27.9589C56.9583 28.2149 56.6117 28.3429 56.1743 28.3429ZM65.4243 28.3429C64.987 28.3429 64.635 28.2096 64.3683 27.9429C64.1017 27.6763 63.9683 27.3243 63.9683 26.8869V18.3269C63.9683 17.8896 64.0857 17.5536 64.3203 17.3189C64.555 17.0843 64.891 16.9669 65.3283 16.9669H70.7043C71.1843 16.9669 71.5363 17.0629 71.7603 17.2549C71.9843 17.4363 72.0963 17.7296 72.0963 18.1349C72.0963 18.5296 71.979 18.8176 71.7443 18.9989C71.5203 19.1803 71.1737 19.2709 70.7043 19.2709H66.8643V21.3509H70.3843C70.8537 21.3509 71.2003 21.4469 71.4243 21.6389C71.659 21.8309 71.7763 22.1243 71.7763 22.5189C71.7763 22.9136 71.659 23.2016 71.4243 23.3829C71.2003 23.5643 70.8537 23.6549 70.3843 23.6549H66.8643V26.8869C66.8643 27.3349 66.731 27.6923 66.4643 27.9589C66.2083 28.2149 65.8617 28.3429 65.4243 28.3429Z" fill="white"/>
                </svg>
            </div>
        )
    }else{
        return null;
    }
}

export function RatingStars(props){
    var totalstars = ['MR', 'R', 'N', 'B', 'MB']
    return(
        <>
            {props.stars && (
                totalstars.map((el, i) => (
                    i < props.stars ? 
                        <svg key={i} width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule  ="evenodd" d="M5.69478 8.68583L9.21415 10.649L8.28021 6.94899L11.3896 4.45951L7.29501 4.13846L5.69478 0.648987L4.09454 4.13846L0 4.45951L3.10935 6.94899L2.17541 10.649L5.69478 8.68583Z" fill="#F8475F"/>
                        </svg> 
                    : 
                        <svg key={i} width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.3896 4.4595L7.29501 4.13318L5.69478 0.648972L4.09454 4.13845L0 4.4595L3.10935 6.94897L2.1754 10.649L5.69478 8.68581L9.21415 10.649L8.2859 6.94897L11.3896 4.4595ZM5.69478 7.7016L3.55355 8.89634L4.12303 6.64371L2.23236 5.12792L4.72667 4.92792L5.69478 2.80687L6.66859 4.93318L9.1629 5.13318L7.27224 6.64897L7.84172 8.9016L5.69478 7.7016Z" fill="#F8475F"/>
                        </svg>
                ))               
            )}
        </>
    )
}


export function PriceComponent(props){
    let product = props.productObject

    function currency(price){
        return (price / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    return(
        <div className="product__price">
            {product.listPrice && (
                <div className="product__priceSeals">
                    <div className="priceSeal">de {product.listPrice ? currency(product.listPrice) : ''}</div>
                    <div className="priceOf">por {product.price ? currency(product.price) : ''}</div>
                </div>
            )}

            {!product.listPrice && (
                <div className="product__priceSeals">
                    <div className="priceSeal"></div>
                    <div className="priceOf">por {product.price ? currency(product.price) : ''}</div>
                </div>
            )}

            <div className="product__installments">
                {product.installments[0] && (
                    <span className="installments">ou em {product.installments[0].quantity}x de {currency(product.installments[0].value)}</span>
                )}
            </div>

        </div>
    )
}

export function BuyButton(){ 

    function quantityHandler(){
        let quantity = localStorage.getItem('cartQty')
        
        localStorage.setItem('cartQty', Number(quantity) + 1)

        window.dispatchEvent( new Event('storage') )
    }

    return(
        <div className="product__button">
            <button onClick={quantityHandler}>Comprar</button>
        </div>
    )
}