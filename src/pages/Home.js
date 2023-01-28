import React from "react"
import { TypeAnimation } from "react-type-animation"

const Home = () => {
  return (
    <>
      <div className="h-[650px] max-h-[650px] overflow-hidden relative"> {/* Short introduction */}
        <div className="flex h-full">
          <div className="mx-auto my-auto text-center w-max">
            <p className="text-2xl md:text-4xl lg:text-6xl home-title">
              <code>Hi, I'm Diogo Paulos!</code>
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl home-title">
              <TypeAnimation
                sequence={[
                  'UI/UX Designer',
                  5000,
                  'Software Developer',
                  5000,
                ]}
                wrapper="code"
                cursor={true}
                repeat={Infinity}
                speed="60"
              />
            </p>
          </div>
        </div>
        <div className="circle-1"><span className="sr-only">Circle 1 - 512x512</span></div>
        <div className="circle-2"><span className="sr-only">Circle 2 - 512x512</span></div>
        <div className="circle-3"><span className="sr-only">Circle 3 - 175x175</span></div>
        <div className="circle-4"><span className="sr-only">Circle 4 - 125x125</span></div>
        <div className="circle-5"><span className="sr-only">Circle 5 - 60x60</span></div>
      </div>
    </>
  );
};
  
export default Home;