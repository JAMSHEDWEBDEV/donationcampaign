
import PropTypes from 'prop-types';

const SingleCard = ({ singleCard }) => {
    const { pic, title, description, button_bg_color, price } = singleCard
    return (
        <div>
            <div>
                <img className="w-full h-[600px]" src={pic} alt="" />

                <button className='text-white px-3 py-1 ml-5 rounded absolute top-[680px] left-[-500]'
                    style={{ background: button_bg_color }}
                >donate <span>
                        {price}  </span> </button>

            </div>
            <div className='my-10'>
                <h1 className='mb-8 text-4xl text-black font-bold'>{title}</h1>
                <p className='text-xl font-normal'>{description}</p>
            </div>
        </div>
    );
};


SingleCard.propTypes = {
    singleCard: PropTypes.object.isRequired
}
export default SingleCard;