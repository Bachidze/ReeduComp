"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion"; 
import mainmain from "../../assets/MainPhotoReedu.svg";
import aim from "../../assets/aim2.svg"
import clock from "../../assets/clock-square.svg"
import calendar from "../../assets/calendar.svg"
import pricetag from "../../assets/price-tag 1.svg"


export default function AnimationDiv() {
  const [isHovered, setIsHovered] = useState(false); 

  return (
    <main className="relative overflow-hidden border-2 pt-6 pl-[60px] pb-[65px] bg-black">
      <motion.div 
        className="absolute bottom-0"
        initial={{ scale: 1 }} 
        whileHover={{ scale: 2 }} 
        transition={{ duration: 1 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div 
          className="w-0 h-0 cursor-pointer border-l-[100vw] border-l-transparent border-r-[100vw] border-r-transparent border-b-[20vh] hover:border-b-[220vh] "
        />
   
      </motion.div>
      
      <section className={`flex justify-between relative z-20 ${isHovered ? 'text-black' : 'text-white'}`}>
        <div>
          <h1 className="text-[36px] font-medium leading-normal uppercase">ვებ პროგრამირება</h1>
          <p className="py-5 w-[768px] text-[20px] leading-normal font-normal">
            ვებ პროგრამირების 10 თვიანი კურსი მსმენელს საფუძვლიანად შეასწავლის
            JavaScript, React JS და Node Js ტექნოლოგიას, რაც აუცილებელია
            ვებსაიტების დამოუკიდებლად აწყობისა და ფუნქციურად გამართვისათვის,
            ასევე http web სერვერების პროგრამირებისათვის. ამასთან, კურსის
            ფარგლებში მსმენელი დაეუფლებს ისეთ მიმართულებებს, როგორებიცაა:
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
      <section className={`flex justify-between pt-[72px] relative z-20 ${isHovered ? 'text-black' : 'text-white'}`}>
        <div className="flex gap-5">
          <div>
            <Image src={calendar} width={30} height={30}  alt="calendar"/>
            <h2 className="pt-[10px] text-[16px] leading-normal font">კურსის ხანგრძლივობა</h2>
            <h3 className="text-[12px] leading-normal font-medium">10 თვე</h3>
          </div>
          <div>
            <Image src={clock} width={30} height={30} alt="clock" />
            <h2 className="pt-[10px] text-[16px] leading-normal font">შეხვედრების რაოდენობა</h2>
            <h3 className="text-[12px] leading-normal font-medium">100 შეხვედრა</h3>
          </div>
          <div>
            <Image src={aim} width={30} height={30} alt="aim" />
            <h2 className="pt-[10px] text-[16px] leading-normal font">კურსის მიზანი</h2>
            <h3 className="w-[300px] text-[12px] leading-normal font-medium">
              კურსის მიზანია მსმენელი გახდეს junior full stack დეველოპერი{" "}
            </h3>
          </div>
          <div>
            <Image src={pricetag} width={30} height={30} alt="prcetag" />
            <h2 className="pt-[10px] text-[16px] leading-normal font">საფასური</h2>
            <h3 className="text-[12px] leading-normal font-medium">700 ₾</h3>
          </div>
        </div>
        <div className="pr-[82px] gap-5 flex flex-col">
          <h2 className="bg-[#91C6EA] py-2 px-4 rounded-[10px] w-[195px] text-[24px] leading-normal font-medium">დეტალურად</h2>
          <h2 className="bg-[#91C6EA] py-2 px-4 rounded-[10px] text-[24px] leading-normal font-medium">მოითხოვე კონსულტაცია</h2>
        </div>
      </section>
    </main>
  );
}
