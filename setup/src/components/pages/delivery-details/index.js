

import React, { useEffect } from "react";
;

export default function DeliveryDetails() {
 
    // export default function DeliveryDetails() {
    return (
        <div className="overflow-hidden">
            <div className="bg-blue-600 flex flex-col items-center px-5 py-12 ">
                <div className="flex flex-col items-center mt-2.5 mb-7 w-full ">
                    <div className="text-white text-5xl leading-[60px]  text-center">
                        Delivery  Details
                    </div>

                </div>
            </div>
            {/* Delivery details c */}
            <div className="flex w-full ml-5 lg:w-2/6 md:w-1/2 lg:ml-10  max-w-full flex-col items-stretch  mt-44 justify-start max-md:mt-10">
                <div className="text-black text-4xl lg:mt-5 max-md:max-w-full max-md:mt-10">
                    View delivery Details
                </div>
                <div class="border mt-5 pl-5 pr-5 py-16 rounded-2xl border-solid border-stone-300 mr-7 max-md:pr-5">
                    <div class="flex  items-stretch w-full  ">
                        <div class="flex flex-col items-stretch w-full mt-4 md:w-1/2 md:pr-4">
                            <div class="text-zinc-500 text-2xl">Order date</div>
                            <div class="text-zinc-500 text-2xl mt-4">Order #</div>
                            <div class="text-zinc-500 text-2xl mt-4">Order total</div>
                        </div>
                        <div class="flex flex-col items-stretch w-full md:w-1/2 mt-4 md:mt-0">
                            <div class="text-black text-2xl">Oct 15, 2023</div>
                            <div class="text-black text-2xl mt-4">Oct 15, 2023</div>
                            <div class="text-black text-2xl mt-4">$37.65 (1 item)</div>
                        </div>
                    </div>
                </div>
                {/* shiping detalis */}
                <div className="text-black text-4xl lg:mt-36 mt-38 max-md:max-w-full max-md:mt-10">
                    Shipment Details
                </div>
                <div className="border flex flex-col items-stretch mt-8 pt-8 pb-12 rounded-2xl border-solid border-stone-300 max-md:max-w-full lg:mr-1 mr-8">
                    <div className="text-black text-2xl  ml-4 self-start font-semibold max-md:ml-2.5">
                        Standard Shipping
                    </div>
                    <div className="border-b border-stone-300 my-4 max-md:mx-2.5"></div>
                   
                    <div className="flex  lg:w-2/6  max-w-full flex-col items-stretch ml-4 mt-7 mb-1 self-start max-md:ml-2.5">
                        <div className="text-black text-2xl font-semibold">Delivered</div>
                        <div className="text-black text-xl mt-5">Delivery Estimate</div>
                        <div className="text-lime-700 text-base font-medium whitespace-nowrap mt-3">
                            Wednesday, October 18, 2023 by 8pm
                        </div>
                        <div className="flex justify-between gap-5 mt-14 items-start max-md:mt-10">
                            <img
                                loading="lazy"
                               
                                   srcSet="https://www.neptun-ks.com/2023/08/02/50UR80003LJ_16fb7b93-1fd8-4b37-b570-0e3205665ef2.jpg"
                                className="aspect-[0.95] object-contain object-center w-[102px] shadow-sm overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="flex grow basis-[0%] flex-col items-stretch mt-1.5">
                                <div className="justify-center text-black text-xl font-extrabold leading-6">
                                    Sony FE 24-105 mm F4 G OSS
                                </div>
                                <div className="text-zinc-500 text-xl mt-7">Qty: 1</div>
                                <div className="text-zinc-500 text-xl mt-4">Sold By: SuperNova</div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Payment information */}
                <div className="text-black text-4xl mt-32 max-md:max-w-full max-md:mt-10">
                    Payment Information
                </div>
                <div className="border flex flex-col items-stretch mt-9 pt-9 pb-5 rounded-2xl border-solid border-stone-300 max-md:max-w-full lg:mr-1 mr-8">

                    <div className="flex flex-col items-stretch ml-4 self-start max-md:ml-2.5">
                        <div className="text-black text-2xl font-medium">Payment Method</div>
                        <div className="text-black text-2xl mt-5">
                            Mastercard ending in 4560
                        </div>
                    </div>
                    <div className="border-b border-stone-300 my-4 max-md:mx-2.5"></div>

                    <div className="flex w-[347px] max-w-full flex-col items-stretch ml-4 mt-10 self-start max-md:ml-2.5 max-md:mt-10">
                        <div className="text-black text-2xl font-medium">Billing Addres</div>
                        <div className="text-black text-2xl mt-5">
                            <span className="">
                                3992 20th Street, 3rd Floor
                                <br />
                                San Franciso, CA 9411
                                <br />
                            </span>
                            <span className="font-bold">
                                <br />
                            </span>

                        </div>

                    </div>
                </div>

                {/*  shoping adrees */}

                <div className="text-black text-4xl mt-28 max-md:max-w-full max-md:mb-20 lg:mt-20  ">
                    Shipping address
                </div>

                <div className="border flex flex-col mb-10 pl-4 pr-20 py-7 rounded-2xl border-solid lg:mt-8 border-stone-300 items-start max-md:max-w-full  lg:mr-1 mr-8 max-md:pr-5">
                    <div className="text-black text-2xl w-[250px]">James Carson</div>
                    <div className="text-black text-2xl max-w-[426px] mt-10">
                        <span className="">
                            3992 20th Street, 3rd Floor
                            <br />
                            San Franciso, CA 9411
                            <br />
                            United States
                            <br />
                        </span>


                    </div>

                </div>

{/* order summery */}

                <div className="text-black text-4xl mt-32  max-md:max-w-full max-md:mt-10">
                    Order Summary
                </div>
                <div className="border mt-9 pl-4 pr-20 py-9 mb-20 rounded-2xl border-solid border-stone-300 max-md:max-w-full max-md:pr-5 lg:mr-1 mr-8">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[69%] max-md:w-full max-md:ml-0">
                            <div className="items-stretch flex flex-col pb-2 max-md:mt-10">
                                <div className="text-black text-2xl">Items:</div>
                                <div className="text-black text-2xl mt-4">Shipping & Handling:</div>
                                <div className="text-black text-2xl mt-4">Total Before tax:</div>
                                <div className="text-black text-2xl mt-4">
                                    Estimated Tax Collected:
                                </div>
                                <div className="text-black text-3xl font-medium mt-4">
                                    Order Total
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[31%] ml-5 max-md:w-full max-md:ml-0">
                            <div className=" flex flex-col  pb-2 max-md:mt-10 ">
                                <div className="text-black text-2xl">$29.99</div>
                                <div className="text-black text-2xl mt-4">$6.99</div>
                                <div className="text-black text-2xl mt-4">$36.98</div>
                                <div className="text-black text-2xl mt-4">$0.67</div>
                                <div className="text-blue-500 text-3xl font-medium mt-10">
                                    $37.65
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};



