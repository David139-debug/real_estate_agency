"use client"

import OfferType from "./steps/OfferType";
import { useState } from "react";
import TypePlace from "./steps/TypePlace";
import ImageType from "./steps/ImageType";
import SizeInfo from "./steps/SizeInfo";
import Location from "./steps/Location";
import { motion } from "framer-motion";
import { Errors, Property } from "@/lib/types/PropertyCard";

const AddProperty = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<Partial<Property>>({});
  const [error, setError] = useState<Errors>({});

  const handleNext = () => {
    switch (step) {
      case 1:
        if (!formData.offerType) {
          return setError(e => ({ 
            ...e,
            offerType: "Please select whether you want to sell or rent."
           }));
        } else {
          setError(e => ({ 
            ...e,
            offerType: ""
           }))
        }
        break;

      case 2:
        if (!formData.typePlace) {
          return setError(e => ({ 
            ...e,
            typePlace: "Please select your property type."
           }));
        } else {
          setError(e => ({ 
            ...e,
            typePlace: ""
           }))
        }
        break;
    }
    setStep(s => Math.min(5, s + 1))
  };

  return (
    <motion.main 
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45 }}
    className="flex flex-col gap-15 items-center h-screen bg-white
    w-full">
      <section className="flex justify-center gap-5 pt-5">
        <div className="relative h-1.25 w-30 bg-[#e3e3e3]">
          <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: .7 }}
          className="w-full origin-left h-full absolute bg-[#2b7fff]"
          />
        </div>
        <div className="relative h-1.25 w-30 bg-[#e3e3e3]">
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: step >= 2 ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="w-full origin-left absolute top-0 left-0 h-full bg-[#2b7fff]" />
        </div>
        <div className="relative h-1.25 w-30 bg-[#e3e3e3]">
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: step >= 3 ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="w-full origin-left absolute top-0 left-0 h-full bg-[#2b7fff]" />
        </div>
        <div className="relative h-1.25 w-30 bg-[#e3e3e3]">
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: step >= 4 ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="w-full origin-left absolute top-0 left-0 h-full bg-[#2b7fff]" />
        </div>
        <div className="relative h-1.25 w-30  bg-[#e3e3e3]">
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: step >= 5 ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="w-full origin-left absolute top-0 left-0 h-full bg-[#2b7fff]" />
        </div>
      </section>

      {step === 1 && <OfferType data={{
        setFormData,
        formData,
        error
      }} />}
      {step === 2 && <TypePlace data={{
        setFormData,
        formData,
        error
      }} />}
      {step === 3 && <ImageType data={setFormData} />}
      {step === 4 && <SizeInfo data={setFormData} />}
      {step === 5 && <Location data={setFormData} />}

      <footer className="absolute bottom-2/5 flex items-center gap-5">
        <button
        disabled={step === 1 ? true : false}
         className={`flex gap-3 px-4 py-2 rounded-xl text-black border
        border-[#e3e3e3] cursor-pointer 
        ${step === 1 ? "bg-[#e5e5e5] text-gray-400 cursor-not-allowed pointer-events-none" : ""}`} onClick={() => setStep(s => Math.max(1, s - 1))}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M73.4 297.4C60.9 309.9 60.9 330.2 73.4 342.7L233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7C291.2 490.2 291.2 469.9 278.7 457.4L173.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L173.3 288L278.7 182.6C291.2 170.1 291.2 149.8 278.7 137.3C266.2 124.8 245.9 124.8 233.4 137.3L73.4 297.3z" fill={`${step === 1 ? "#9ca3af" : ""}`} />
          </svg>
          Back
        </button>
        <button 
        className="bg-[#2b7fff] px-4 py-2 rounded-xl 
        cursor-pointer" 
        onClick={handleNext}>
          Continue
          </button>
      </footer>
    </motion.main>
  )
}

export default AddProperty