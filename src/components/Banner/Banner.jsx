import Slider from "react-slick";
import './style.scss'

export default function Banner(props){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }

    return(
        <section className="fullbanner">
        {props.screen == 'desktop' && (
            <Slider {...settings}>
                <div>
                    <img src="https://i.imgur.com/WFt45O8.png" alt="Banner1"/>
                </div>
                <div>
                    <img src="https://i.imgur.com/WFt45O8.png" alt="Banner2"/>
                </div>
                <div>
                    <img src="https://i.imgur.com/WFt45O8.png" alt="Banner3"/>
                </div>
                <div>
                    <img src="https://i.imgur.com/WFt45O8.png" alt="Banner4"/>
                </div>
            </Slider>
        )}

        {props.screen == 'mobile' && (
            <Slider {...settings}>
                <div>
                    <img src="https://i.imgur.com/IdxKoFz.png" alt="Banner1"/>
                </div>
                <div>
                    <img src="https://i.imgur.com/IdxKoFz.png" alt="Banner2"/>
                </div>
                <div>
                    <img src="https://i.imgur.com/IdxKoFz.png" alt="Banner3"/>
                </div>
                <div>
                    <img src="https://i.imgur.com/IdxKoFz.pngg" alt="Banner4"/>
                </div>
        </Slider>
        )}  
        </section>
    );
}