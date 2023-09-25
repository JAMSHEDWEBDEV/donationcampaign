
const Card = ({ card }) => {
    const { pic, category, title,card_bg_color } = card || {}

    return (
        <div className="rounded my-5"
            style={{ background: card_bg_color }}
        >
            <img className="w-full h-[200px]" src={pic} alt="" />
            <div className="my-5 px-5">
                <h5 className="text-xs font-medium"
                >{category}</h5>
                <h2 className="text-xl font-semibold">{title}</h2>
            </div>
        </div>
    );
};

export default Card;