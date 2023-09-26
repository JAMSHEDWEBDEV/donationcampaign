import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";

const Donation = () => {

    const [donations, setDonations] = useState([]);
    const [noFound,setNoFound] = useState("");

    useEffect(()=>{
        const donationItem = JSON.parse(localStorage.getItem('Donation'));
        if(donationItem){
            setDonations(donationItem);
        }else{
            setNoFound("No Donation Yet!!  Please Donate..")
        }
        
    },[])

    console.log(donations);

    return (
        <div>
            {noFound? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> :
             <div>
                 <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-7">
                    {
                        donations.map(item => <DonationCard key={item.id} item = {item}></DonationCard>)
                    }
                 </div>
             </div>
             }
        </div>
    );
};

export default Donation;