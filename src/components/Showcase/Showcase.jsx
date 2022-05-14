import ShowcaseItems from './ShowcaseItems'
import './style.scss'

export default function Showcase(){
    return(
        <section className="showcase">
            <div className="showcase__container">
                <div className="showcase__header">
                    <h3>Mais Vendidos</h3>
                </div>
                <ShowcaseItems />
            </div>
        </section>
    )
}