import NewSletterForm from "./NewsletterComponents"
import './style.scss'

export default function NewSletter(){
    return(
        <div className="newsletter">
            <div className="newsletter__container">
                <div className="newsletter__header">
                    <h3 className="newsletter__title">Participe de nossas news com promoções e novidades!</h3>
                </div>
                <NewSletterForm />
            </div>
        </div>
    )
}