import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";

const Donation = () => {

    const [donations, setDonations] = useState([]);
    const [noFound, setNoFound] = useState("");
    const [isSeeMore,setIsSeeMore] = useState(false);

    useEffect(() => {
        const donationItem = JSON.parse(localStorage.getItem('Donation'));
        if (donationItem) {
            setDonations(donationItem);
        } else {
            setNoFound("No Donation Yet!!  Please Donate..")
        }

    }, [])

    const handleDeleteCard = () =>{
        localStorage.clear();
        setDonations([]);
        setNoFound("No Donation Yet!!")
    }

    return (
        <div>
            <div>
                {noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> :
                    <div>
                        <div className="flex justify-center items-center">
                            <button 
                            onClick={handleDeleteCard}
                            className="bg-blue-400 py-2 px-4 rounded">Delete All</button>
                        </div>
                        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-7">
                            {
                                isSeeMore ? donations.map(item => <DonationCard key={item.id} item={item}></DonationCard>)
                                : donations.slice(0,4).map(item => <DonationCard key={item.id} item={item}></DonationCard>)
                            }
                        </div>
                    </div>
                }
            </div>
            <div className="flex justify-center items-center my-5">
                {
                    donations.length > 4 && <button 
                    onClick={() => setIsSeeMore(!isSeeMore)}
                    className="bg-blue-700 text-xl text-white font-semibold px-4 py-2 rounded"
                    >See More</button>
                }
            </div>
        </div>
    );
};

export default Donation;