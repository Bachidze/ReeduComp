"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion"; 
import mainmain from "../../assets/MainPhotoReedu.svg";
import aim from "../../assets/aim2.svg";
import clock from "../../assets/clock-square.svg";
import calendar from "../../assets/calendar.svg";
import pricetag from "../../assets/price-tag 1.svg";

export default function AnimationDiv() {
  const [isHovered, setIsHovered] = useState(false); 

  return (
    <main 
      className={`relative overflow-hidden border-2 pt-6 pl-[60px] pb-[65px] bg-black transition-colors duration-300 ${isHovered ? 'text-black' : 'text-white'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <section className="flex justify-between relative z-20">
        <div>
          <h1 className="text-[36px] font-medium leading-normal uppercase">ვებ პროგრამირება</h1>
          <p className="py-5 w-[768px] text-[20px] leading-normal font-normal">
          ვებ პროგრამირების 10 თვიანი კურსი მსმენელს საფუძვლიანად შეასწავლის Javasctipt, React JS და Node Js ტექნოლოგიას, რაც აუცილებელია ვებსაიტების დამოუკიდებლად აწყობისა და ფუნქციურად გამართვისათვის, ასევე http web სერვერების პროგრამირებისათვის. ამასთან, კურსის ფარგლებში მსმენელი დაეუფლება ისეთ მიმართულებებს, როგორებიცაა:
          </p>
          <nav>
            <ul className="list-disc pl-4 text-[20px] leading-normal font-normal">
              <li>დამოუკიდებლად დიზაინის გადახედვა და მისი მარქაფის აწყობა</li>
              <li>ფუნქციების დამატება და საიტების აწყობა დინამიურად</li>
              <li>React Js-ით ნებისმიერი საიტის აწყობა</li>
              <li>კოდის წერის პრაქტიკები</li>
              <li>მონაცემთა ბაზებთან მუშაობა</li>
              <li>Next Js Framework-ის ინტეგრაცია</li>
              <li>ტესტირება და სხვა</li>
            </ul>
          </nav>
        </div>
        <div>
          <Image src={mainmain} width={568} height={300} alt="img" />
        </div>
      </section>

      <section className="flex justify-between pt-[72px] relative z-20">
        <div className={`flex gap-5 transition-transform duration-300 ${isHovered ? 'transform translate-y-[-20px]' : ''}`}>
          <motion.div
            whileHover={{ translateY: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Image src={calendar} width={30} height={30} alt="calendar" />
            <h2 className="pt-[10px] text-[16px] leading-normal font">კურსის ხანგრძლივობა</h2>
            <h3 className="text-[12px] leading-normal font-medium">10 თვე</h3>
          </motion.div>
          <motion.div
            whileHover={{ translateY: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Image src={clock} width={30} height={30} alt="clock" />
            <h2 className="pt-[10px] text-[16px] leading-normal font">შეხვედრების რაოდენობა</h2>
            <h3 className="text-[12px] leading-normal font-medium">100 შეხვედრა</h3>
          </motion.div>
          <motion.div
            whileHover={{ translateY: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Image src={aim} width={30} height={30} alt="aim" />
            <h2 className="pt-[10px] text-[16px] leading-normal font">კურსის მიზანი</h2>
            <h3 className="w-[300px] text-[12px] leading-normal font-medium">
              კურსის მიზანია მსმენელი გახდეს junior full stack დეველოპერი
            </h3>
          </motion.div>
          <motion.div
            whileHover={{ translateY: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Image src={pricetag} width={30} height={30} alt="pricetag" />
            <h2 className="pt-[10px] text-[16px] leading-normal font">საფასური</h2>
            <h3 className="text-[12px] leading-normal font-medium">700 ₾</h3>
          </motion.div>
        </div>
        <div className="pr-[82px] gap-5 flex flex-col">
          <h2 className="bg-[#91C6EA] cursor-pointer py-2 px-4 rounded-[10px] w-[195px] text-[24px] leading-normal font-medium">დეტალურად</h2>
          <h2 className="bg-[#91C6EA] cursor-pointer py-2 px-4 rounded-[10px] text-[24px] leading-normal font-medium">მოითხოვე კონსულტაცია</h2>
        </div>
      </section>
      <div 
        className={`absolute bottom-0 left-0  w-full h-full transition-all duration-1000 ease-in-out z-10 ${isHovered ? 'clip-path-full' : 'clip-path-initial'}`}
        style={{
          backgroundColor: 'white',
          clipPath: isHovered
            ? 'polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%)'
            : 'polygon(15% 100%, 83% 82%, 100% 52%, 100% 100%)',
        }}
      />
    </main>
  );
}
