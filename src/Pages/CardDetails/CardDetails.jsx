import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleCard from "../SingleCard/SingleCard";

const CardDetails = () => {

   const [singleCard,setSingleCard] = useState({});

    const allCards = useLoaderData();
    const {id} = useParams();

    useEffect(()=>{
        const findCard = allCards?.find(singleCard => singleCard.id === id)
        setSingleCard(findCard);
    },[allCards,id]);

    console.log(singleCard);

    return (
        <div>
            <SingleCard singleCard={singleCard}></SingleCard>
        </div>
    );
};

export default CardDetails;