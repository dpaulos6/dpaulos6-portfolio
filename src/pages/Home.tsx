export default function Home() {
  return (
    <>
      <div className="h-[600px] max-h-[600px] overflow-hidden relative">
        <div className="flex h-full">
          <div className="flex flex-col mx-auto my-auto text-center w-max">
            <span className="text-2xl md:text-4xl lg:text-6xl home-title">
              Hi, I'm Diogo Paulos!
            </span>
          </div>
        </div>
        <div className="circle circle-1">
          <span className="sr-only">Circle 1 - 512x512</span>
        </div>
        <div className="circle circle-2">
          <span className="sr-only">Circle 2 - 512x512</span>
        </div>
        <div className="circle circle-3">
          <span className="sr-only">Circle 3 - 175x175</span>
        </div>
        <div className="circle circle-4">
          <span className="sr-only">Circle 4 - 125x125</span>
        </div>
        <div className="circle circle-5">
          <span className="sr-only">Circle 5 - 60x60</span>
        </div>
      </div>
    </>
  );
};