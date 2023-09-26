
import PropTypes from 'prop-types';

const DonationCard = ({ item }) => {
    const { pic, title,button,card_bg_color,category,category_bg_color,price,text_color,button_bg_color} = item;
    return (
        <div>
            <div className="card card-side shadow-xl"
            style={{background:card_bg_color}}
            >
                <figure><img src={pic} alt="picture" /></figure>
                <div className="card-body">
                    <h4 className="w-[90px] text-center p-1 rounded font-normal"
                    style={{background:category_bg_color}}
                    >{category}</h4>
                    <h2 className="card-title">{title}</h2>
                    <p className="text-xl font-semibold"
                    style={{color:text_color}}
                    >{price}</p>
                    <div className="card-actions">
                        <button className="btn text-white"
                        style={{background:button_bg_color}}
                        >{button}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

DonationCard.propTypes = {
    item: PropTypes.object.isRequired
}
export default DonationCard;