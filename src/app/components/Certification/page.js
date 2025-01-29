import React from 'react'
import styles from './About.css'
import Image from 'next/image';

const Certification = () => {
    const award = [
        {
            url: "/certificate2.svg",
            description: 'Recognization by JAGRITI YATRA '
        },
        {
            url: "/JSG.svg",
            description: 'Recognized by JSG International Federation'
        },
        {
            url: "/SPIRIT.svg",
            description: 'Recognized by Scope Spirit'
        },
        {
            url: "/Hattrick.png",
            description: 'Recognition by Empire HR'
        },
        {
            url: "/JUO.png",
            description: 'Emerging Business coach of the year 2022'
        }
    ];

    return (
        <div className="w-full ag:h-[325px] sm:h-[375px] md:h-auto mb-[50px] px-[128px] lg:px-[64px] md:px-[32px] xs:px-[20px] ag:px-[15px]">
            {/* Title */}
            <div className="w-2/4 mx-auto flex justify-center text-[30px] border-b-[1px] border-b-[#00000080] pb-4 lg:w-5/12 lg:text-[40px] md:w-6/12 md:text-[32px] xs:w-7/12 xs:text-2xl xs:pb-3">
                <h1>Awards</h1>
            </div>
            
            {/* Certificates Box */}
            <div className="w-full h-[319px] mt-[170px] aa:mt-[85px] relative rounded-[44px] bg-[#0E1021] flex justify-center lg:h-[275px] lg:mt-[140px] md:h-[315px] md:mt-[100px] xs:h-[170px] xs:mt-[80px] sm:mt-[160px] ag:h-[200px] ag:mt-[60px] ag:rounded-[20px]">
                <div className={`${styles.achievebox22} w-[84%] ag:w-[80%] h-[485px] absolute bottom-0 flex items-end gap-[12.5%] ag:gap-[5%] overflow-x-auto scroll-smooth pb-12 af:pb-4 md:h-auto xs:h-[250px] ag:h-[278px] sm:h-[310px]`}>
                    {award.map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-[14px] flex-shrink-0 w-1/4 xs:w-[30%] ag:w-[45%]">
                            <img src={item.url} alt="certificate" />
                            <p className="font-inter font-bold text-[24px] leading-[28.8px] text-white text-center lg:text-[20px] lg:leading-[24px] md:text-[16px] md:leading-[19px] xs:text-[14px] xs:leading-[16px] ag:text-[12px] ag:leading-[14px]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Certification;