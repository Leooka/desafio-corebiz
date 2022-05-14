import Location from './Location'
import Attendance from './Attendance'
import Partners from './Partners'

import './style.scss'

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer__container">
                <Location />
                <Attendance />
                <Partners />
            </div>
        </footer>
    )
}