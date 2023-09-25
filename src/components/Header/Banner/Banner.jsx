
const Banner = () => {
    const rgbaColor = "rgba(255, 255, 255, 0.80)"
    return (
        <div className="hero min-h-[70vh] my-10" style={{ backgroundImage: 'url(https://i.ibb.co/VjGGYpv/donation-team.jpg)'}}>
            <div className="hero-overlay"
            style={{backgroundColor:rgbaColor}}></div>
            <div className="hero-content text-center text-neutral-content">
                <div>
                    <h1 className="text-5xl font-bold text-black my-5">I Grow By Helping People In Need</h1>
                    <input 
                    className="px-4 py-2 text-xl text-black rounded-l-lg"
                    placeholder="Search here ...."
                    type="text" name="search" id="" />
                    <button className="bg-[#FF444A] text-white font-semibold text-xl px-4 py-2 rounded-r-lg">search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;