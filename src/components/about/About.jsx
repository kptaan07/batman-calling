import React from 'react'
import {Link} from 'react-router-dom'
import  { useState, useEffect } from 'react';
function About() {
    const [isVisible, setIsVisible] = useState(false);
    
function DelayedText({ text, delay }) {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsVisible(true);
      }, delay);
  
      return () => clearTimeout(timeout);
    }, [delay]);
  
    return (
      <div>
        {isVisible && <div className="mb-4 text-xl text-red-800 font-mono">{text}</div>}
      </div>
    );
  }
    return(
        <div className="py-16 bg-black">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://images.pexels.com/photos/2823459/pexels-photo-2823459.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                    
                        <p className="mt-6 text-gray-600 ">
                            <p className="focus-visible:disabled: text-3xl font-mono text-red-800 mb-8"> Call Ringing..</p>
                            <DelayedText text="Batman: Hello?" delay={3000} />
                            <DelayedText text="Commissioner Gordon: Batman, it's Gordon. We've got a situation." delay={4000} />
                            <DelayedText text="There's someone powerful, someone unlike anything we've ever faced, planning to attack Gotham." delay={7000} />
                            
                            <DelayedText text="We Need You!!" delay={10000} />
                        </p>
                        
                    </div>
                </div>
                <p className="text-3xl text-red-950 font-mono font-semibold hover:text-red-600 px-32">
                "It's not who I am underneath, but what I do that defines me... " 
                </p>
            </div>
        </div>
    )
}

export default About