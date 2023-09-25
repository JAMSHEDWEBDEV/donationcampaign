
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Card = ({ card }) => {
    const {id, pic, category, title,card_bg_color ,category_bg_color,text_color} = card || {}

    const navigate = useNavigate();

    const handleCardDetails = () =>{
            navigate(`/card/${id}`)
    }

    return (
        <div 
        onClick={handleCardDetails}
        className="rounded my-5"
        style={{ background: card_bg_color }}
        >
            <img className="w-full h-[200px]" src={pic} alt="" />
            <div className="my-5 px-5"
            style={{color: text_color}}
            >
                <h5 className="text-xs text-center font-medium w-[70px] px-2 py-1 rounded"
                style={{background:category_bg_color}}
                >{category}</h5>
                <h2 className="text-xl font-semibold mt-3"
                >{title}</h2>
            </div>
        </div>
    );
};

Card.propTypes = {
    card:PropTypes.object.isRequired
}
export default Card;