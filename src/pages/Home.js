import React from "react"
import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'
import { useTranslation, Trans } from "react-i18next"
import $ from 'jquery'
import { Parallax, Background } from 'react-parallax'

var image1 = "https://images.unsplash.com/photo-1654442763971-2b647b44518e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
var image2 = "https://images.unsplash.com/photo-1674049888308-14afe8329618?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
var image3 = "https://images.unsplash.com/photo-1673825496773-120de6f9d5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1721&q=80"

const features = [
  {
    name: 'Topic 1',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Topic 2',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Topic 3',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: BoltIcon,
  },
  {
    name: 'Topic 4',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: DevicePhoneMobileIcon,
  },
]


const Home = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      {/* <div className="bg-white pt-24 sm:pb-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center">
            <h2 className="text-lg font-semibold leading-8 text-red-600">Subtitle</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Catching Title</p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
              accusamus quisquam.
            </p>
          </div>
          <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-white sm:shrink-0">
                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <div className="sm:min-w-0 sm:flex-1">
                    <p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                    <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="max-w-8xl w-full p-10">
        <div className="text-md">
          <h2>{t("Welcome to React")}</h2>
          <button className="border-2 border-gray-600" onClick={() => changeLanguage("pt")}>pt</button>
          <button className="border-2 border-gray-600" onClick={() => changeLanguage("en")}>en</button>
        </div>
        <div className="text-md">
          <Trans>
            To get started, edit <code>src/App.js</code> and save to reload.
          </Trans>
        </div>
        <div style={{ marginTop: 40 }}>
          Learn more:&nbsp;
          <a href="https://react.i18next.com">https://react.i18next.js</a>
        </div>
      </div> */}

      <Parallax strength={600} bgImage={image1}>
        <div className="content">
          <div className="text-content">Normal Parallax</div>
        </div>
      </Parallax>
      <Parallax strength={300} blur={{min: -15, max: 15}} bgImage={image2}>
        <div className="content">
          <div className="text-content">Blur Parallax</div>
        </div>
      </Parallax>
      <Parallax strength={-600} bgImage={image3}>
        <div className="content">
          <div className="text-content">Reverse Parallax</div>
        </div>
      </Parallax>
    </>
  );
};
  
export default Home;