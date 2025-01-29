import React from "react";
import Image from "next/image";


const ClientStat = ({ number, description }) => (
  <div className="flex flex-col gap-1.5">
    <h1 className="font-inter font-bold text-[25px] text-[#434343] sm:text-[30px] xl:text-[40px]" >{number}</h1>
    <p className="font-inter font-medium text-[18px] leading-[21.6px] text-[#757575]">{description}</p>
  </div>
);

const AboutUs = () => {
  const teamembers = [
    { name: "HEMANT ZUJAM", role: "ACCOUNTANT", imgsrc: "/Hemant.jpg" },
    { name: "GANESH MANJARE", role: "MANAGER", imgsrc: "/Ganesh.jpg" },
    { name: "GAURI JAGTAP", role: "FINANCE ASSISTANT", imgsrc: "/Gauri.jpg" },
    { name: "CHANCHAL MATE", role: "ACCOUNT ASSISTANT", imgsrc: "/chanchal.jpg" },
  ];

  return (
    <div className="w-full sm:p-[70px] ag:p-[20px] xl:px-28 mt-8">
        {/*  about first  */}
      <div className="sm:flex sm:flex-row gap-4 flex-col sm:gap-8 ag:hidden mt-6">
        <div className="sm:w-[50%]  pt-10 pr-[49px] ag:w-full sm:pt-0 sm:px-0">
          <h5 className="font-inter font-medium text-[24px] text-[#FF4400]">About us</h5>
          <h1 className="mt-9 font-inter font-bold text-[45px] leading-[54px] ag:mt-5 ag:text-[24px] ag:leading-[28.8px] sm:mt-5 sm:text-[24px] sm:leading-[28.8px] xl:text-[36px] xl:leading-[44px]">
            Global Expertise, Strategic Business Growth
          </h1>
          <p className="mt-[41px] font-inter  text-[23px] leading-[27.6px] text-justify ag:mt-3 ag:text-[20px] ag:leading-[24px] sm:mt-3 sm:text-[20px] sm:leading-[24px] xl:text-[30px] xl:leading-[33px]">
            CA Dhiraj Ostwal is an experienced and professional CA with more
            than 25 years in Business Coaching, advisory and, strategy planning.
            He has worked on a global level in countries like America,
            Australia, New Zealand, and Singapore. With his extraordinary rich
            core business experience, he has helped various business houses in
            India by guiding and sharing his entrepreneurial skills.
          </p>
        </div>

        <div className="w-[50%]  sm:w-[50%]">
          <div className="w-full h-[496px] bg-[#0E1021] pt-8 xl:pt-4 relative z-10 ag:h-[408px] sm:h-[408px] rounded-3xl">
            <div className="w-[60%] h-[464px] mx-auto relative  ag:h-[376px] sm:h-[376px] xl:w-[55%]">
               <Image src="/aboutdp.png" layout="fill" objectFit="cover" />
            </div>
            <Image src="/abouteclipse.png" alt="" className=" absolute  top-[-94px] z-[-1]" />

          </div>

          <div className="flex justify-center gap-[75px] pt-[54px] sm:gap-[28px] sm:pt-5 ag:gap-6">
            <ClientStat number="500+" description="Clients across India" />
            <ClientStat number="25" description="Years of Experience" />
            <ClientStat number="200+" description="Projects" />
          </div>
        </div>
      </div>

      {/* phone frist -------------------------- */}

      <div className="sm:hidden mt-5">
        <div className="text-center">
          <h5 className="font-inter font-bold text-[36px]">About <span className="text-[#E86130]" >us</span></h5>
          <div className="w-full h-[314px] bg-[#0E1021] relative rounded-[30px]">
            <div className="w-[60%] h-[294px] mx-auto mt-5 relative">
                <Image className="absoulate" src="/abouteclipse.png" alt="" />
              <Image src="/aboutdp.png" layout="fill" objectFit="cover" />
            </div>
          </div>
          <h1 className="mt-8 font-inter font-bold text-[29px] leading-[34.8px]">
            Global Expertise, Strategic Business Growth
          </h1>
          <p className="mt-6 font-inter font-normal text-[20px] leading-[24px]">
            CA Dhiraj Ostwal is an experienced and professional CA with more
            than 25 years in Business Coaching, advisory and, strategy planning.
            He has worked on a global level in countries like America,
            Australia, New Zealand, and Singapore. With his extraordinary rich
            core business experience, he has helped various business houses in
            India by guiding and sharing his entrepreneurial skills.
          </p>
        </div>

        <div className="flex justify-center gap-[10px] pt-8">
          <ClientStat number="500+" description="Clients across India" />
          <ClientStat number="25" description="Years of Experience" />
          <ClientStat number="200+" description="Projects" />
        </div>
      </div>
      {/* ------------------ */}

      <div className="w-full flex mt-5 gap-[2%] ag:flex-col sm:gap-6 sm:flex-row ">
        <div className="w-[55%] ag:w-[100%] min-h-[316px] py-[49px]  sm:w-[80%] sm:mx-auto sm:min-h-0 sm:px-0 sm:text-center">
          <h1 className="font-inter ag:text-center sm:text-left font-bold text-[36px] mb-7 ag:mb-0 sm:text-[36px] sm:mb-6 xl:text-[36px]">
            Our <span className="text-[#E86130]">Mission</span>
          </h1>
          <hr className="w-[85%] mx-auto my-4 bg-[#FF4400] sm:hidden " />
          <p className="font-inter ag:text-center sm:text-left font-normal text-[24px] leading-[28.8px] sm:text-[18px] sm:leading-[21.6px] xl:text-[30px] xl:leading-[32px]">
            To propel the growth of startups and corporate giants by forging an
            unshakeable foundation through groundbreaking business and strategic
            development and to be a top-ten strategist on the global stage.
          </p>
        </div>

        <div className="w-[43%] ag:w-[100%] min-h-[316px]  py-[49px] sm:w-[80%] sm:mx-auto sm:min-h-0  sm:text-center">
          <h1 className="font-inter ag:text-center sm:text-left font-bold text-[36px] mb-7 ag:mb-0 sm:text-[36px] sm:mb-6 xl:text-[36px]">
            Our <span className="text-[#E86130]">Vision</span>
          </h1>
          <hr className="w-[85%] mx-auto my-4 bg-[#FF4400] sm:hidden " />
          <p className="font-inter ag:text-center sm:text-left font-normal text-[24px] leading-[28.8px] sm:text-[18px] sm:leading-[21.6px] xl:text-[30px] xl:leading-[32px]">
            To become the most trusted, efficient and result-oriented companion
            to empower entrepreneurs, Start-ups, and corporates for uninterrupted
            growth through world-class business strategies.
          </p>
        </div>
      </div>

      <div className="w-full mt-16 sm:mt-7">
        <h1 className="mb-[46px] ag:text-center font-inter font-bold text-[45px] ag:mb-3 sm:text-center sm:text-[32px] xl:text-[36px]">
          Meet the <span className="text-[#FF4400]">Team</span>
        </h1>
        <hr className="w-[85%] mx-auto  mb-[33px] bg-[#FF4400] sm:hidden " />
        <div className="flex flex-wrap justify-center gap-[94px] sm:gap-6">
          {teamembers.map((member, index) => (
            <div key={index} className="text-center  sm:mb-5">
              <div className="w-[338px] h-[338px] relative mx-auto sm:w-[250px] sm:h-[250px]">
                <Image src={member.imgsrc} alt="icon" layout="fill" objectFit="cover" />
              </div>
              <h1 className="mt-4 font-inter font-bold text-[29px] sm:font-semibold sm:mt-1">{member.name}</h1>
              <p className="mt-2 font-inter  text-[23px] sm:mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

