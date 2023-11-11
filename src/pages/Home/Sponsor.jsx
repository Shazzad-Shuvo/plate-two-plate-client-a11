import Marquee from "react-fast-marquee";


const Sponsor = () => {
    return (
        <div className="my-20">
            <h2 className="text-4xl font-bold text-center mb-10 dark:text-slate-200">Sponsors On Board</h2>
            <Marquee gradient={true} gradientWidth={300} autoFill={true} >
                <img className="w-40 mx-10" src={'https://i.ibb.co/55wPQ8B/pngwing-com.png'} alt="" />
                <img className="w-40 mx-10" src={'https://i.ibb.co/sPWMxFN/pngwing-com2.png'} alt="" />
                <img className="w-40 mx-10" src={'https://i.ibb.co/GkC1c0f/pngwing-com3.png'} alt="" />
                <img className="w-40 mx-10" src={'https://i.ibb.co/8d27yMy/pngwing-com4.png'} alt="" />
                <img className="w-40 mx-10" src={'https://i.ibb.co/ggc508g/subway-photo-logo-4292.png'} alt="" />
            </Marquee>

        </div>
    );
};

export default Sponsor;






