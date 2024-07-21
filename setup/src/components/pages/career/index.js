import React from 'react';

const Career = () => {
    return (
        <div>
            <div className="overflow-hidden">
                <div className="bg-blue-600 flex flex-col items-center px-5 py-7 ">
                    <div className="flex flex-col items-center mt-2.5 mb-7 w-full ">
                        <div className="text-white text-4xl leading-[60px]  text-center">
                            Careers
                        </div>


                    </div>
                </div>
                <div className="text-black text-5xl font-medium max-md:max-w-full ml-10 mb-16  lg:mt-36 mt-10 max-md:text-4xl lg:w-2/5">
                    Join our Team
                </div>
                <div className="text-zinc-500 text-base font-medium font-['Poppins']mt-11 max-md:max-w-full  lg:mb-28 ml-10  mr-5 max-md:mt-10 lg:w-2/5">
                    At SuperNova, we believe that our success is driven by the talent,
                    passion, and commitment of our team members. We are constantly seeking
                    individuals who share our vision and are eager to contribute to a dynamic
                    and innovative work environment.
                </div>

            </div>

            {/* image sesion  */}

            <div className="lg:flex lg:space-x-12 lg:ml-16 lg:mt-28 lg:mb-40 ml-10 mt-5">
                <img

                    src={require('../../../components/assets/career4-photo.png')}
                    alt=""
                    className="w-80 h-80 lg:object-cover object-center grow max-md:max-w-full rounded max-md:mt-10 mb-8 lg:mb-0"
                />
                <img

                    src={require('../../../components/assets/career2-photo.png')}
                    alt=""
                    className="w-80 h-80 object-cover object-center grow max-md:mt-10 mb-8 rounded lg:mb-0"
                />
                <img

                    src={require('../../../components/assets/career3-photo.png')}
                    alt=""
                    className="w-80 h-80 object-cover object-center grow max-md:mt-10 mb-8 rounded lg:mb-0"
                />
            </div>


        </div>

    );
};

export default Career;

