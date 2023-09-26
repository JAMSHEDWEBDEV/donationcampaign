
import PropTypes from 'prop-types';
import swal from 'sweetalert';

const SingleCard = ({ singleCard }) => {
    const {id, pic, title, description, button_bg_color, price } = singleCard || {}

    const handleAddToDonation = () =>{
        const addedDonation = [];
        const donationItem = JSON.parse(localStorage.getItem('Donation'));
        if(!donationItem){
            addedDonation.push(singleCard);
            localStorage.setItem('Donation',JSON.stringify(addedDonation))
            swal("Good job!", "Your Donate added successfully", "success");
        }else{
             
            const isExists = donationItem.find(item => item.id === id)

            if(!isExists){
                addedDonation.push(...donationItem,singleCard)
                localStorage.setItem('Donation',JSON.stringify(addedDonation))
                swal("Good job!", "Your Donate added successfully", "success");
            }else{
                swal("Oops!!", "Already Donated", "error");
            }

        }
    }
   
    return (
        <div>
            <div>
                <div>
                <img className="w-full h-[600px]" src={pic} alt="" />
                </div>
                <button 
                onClick={handleAddToDonation}
                className='text-white px-3 py-1 ml-5 rounded absolute top-[680px] left-[-500]'
                 style={{ background: button_bg_color }}
                >donate <span>{price}  </span>
                 </button>

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