import amg from "../../assets/amg.png"
import audi from "../../assets/audi.png"
import bmw from "../../assets/bmw.png"
import lambo from "../../assets/lambo.png"
import './index.css'

function Logos () {
    return (
        <div className="logos">
            <img src={amg} />
            <img src={audi} />
            <img src={bmw} />
            <img src={lambo} />
        </div>
    )
}

export default Logos