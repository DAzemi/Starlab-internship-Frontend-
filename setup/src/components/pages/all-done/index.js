import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { IoMdCheckmarkCircle } from 'react-icons/io';

function AllDone() {
    const containerStyle = {
        width: '100%',
        maxWidth: '650px',
        height: '510px', // Increase the height here
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <div className="mb-8">
                <div className="flex items-center justify-center">
                    <span className="text-stone-300 text-5xl font-medium font-Poppins leading-normal">Su</span>
                    <span className="text-blue-500 text-5xl font-medium font-Poppins leading-normal">p</span>
                    <span className="text-stone-300 text-5xl font-medium font-Poppins leading-normal">er</span>
                    <span className="text-blue-500 text-5xl font-medium font-Poppins leading-normal">N</span>
                    <span className="text-stone-300 text-5xl font-medium font-Poppins leading-normal">ova</span>
                </div>
            </div>
            <div className="bg-sky-50 bg-opacity-40 rounded-2xl p-8 relative" style={containerStyle}>
                {/* "Done" icon inside the div, higher with margin */}
                <div className="bg-green-500 rounded-full text-white flex items-center justify-center w-10 h-10 mx-auto mt-33">
                    <IoMdCheckmarkCircle size={23} />
                </div>
                <div className="text-white mt-4 text-center">
                    <p className="text-black text-4xl font-medium font-Poppins leading-normal mt-10">All done!</p>
                    <p className="mt-6 text-zinc-500 ">
                        Congratulations, you've successfully set up your new password! Your <br /> account is now more secure than ever. Remember to keep this password<br /> in a safe place and never share it with anyone you don't trust.
                    </p>
                </div>
                <div className="w-40 mx-auto bg-blue-500 rounded border border-neutral-200 justify-center items-center p-2 mt-9">
                    <a href="login" className="w-full text-white-500 flex items-center justify-center text-white">
                        <BsArrowLeft className="mr-1" />
                        Back to Login
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AllDone;
