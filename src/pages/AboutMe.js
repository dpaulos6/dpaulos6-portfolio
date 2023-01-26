import React from "react";
import { PaperClipIcon } from '@heroicons/react/20/solid'

function age() {
  var dob = new Date(2003, 5, 17)
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms); 
  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

const AboutMe = () => {
  return (
    <>
      <div className="isolate bg-white">
        <main>
          <div className="relative py-16">
            <div className="lg:mx-40">
              <div className="grid lg:grid-cols-3 md:gap-4 lg:gap-8 max-w-6xl mx-auto my-8">
                <div className="bg-gray-400/20 w-auto my-auto lg:mx-2 mx-auto custom-shape-div p-1">
                  <img src="/dp6/dpaulos6.jpg" className="h-auto max-h-80 lg:max-h-96 mx-auto rounded-full shadow-lg shadow-gray-500/60 custom-shape-img" alt="dpaulos6"></img>
                </div>
                <div className="mx-10 sm:mx-20 md:mx-32 my-5 lg:my-auto lg:mx-2 lg:col-span-2">
                  <p className="text-lg md:text-xl lg:text-2xl text-justify text-gray-800 my-3">
                    My name is Diogo Paulos, I'm {age()} years old and I'm from Portugal.
                  </p>
                  <p className="text-lg md:text-xl lg:text-2xl text-justify text-gray-800 my-3">
                    I love to write and learn code, specially trying out new things and learning usefull programming languages.
                    I enjoy learning frameworks and play around, such as{' '}
                    <code className="text-blue-700"><a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a></code> and{' '}
                    <code className="text-blue-700"><a href="https://nextjs.org/" target="_blank" rel="noreferrer">Next.js</a></code>,{' '}
                    <code className="text-blue-700"><a href="https://laravel.com/" target="_blank" rel="noreferrer">Laravel</a></code>,{' '}
                    <code className="text-blue-700"><a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">Bootstrap</a></code> or {' '}
                    <code className="text-blue-700"><a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind.css</a></code>.
                  </p>
                  <p className="text-lg md:text-xl lg:text-2xl text-justify text-gray-800 my-3">
                    I also love to play videogames with my friends, listen and produce music, edit videos or photos, and much more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* <div className="max-w-8xl">
        <div className="bg-slate-100/75 py-20">
          <video className="mx-auto" width="80%" name="media" controls>
            <source src="/video.mp4" type="video/mp4;"/>
            Your browser does not support the video tag.
          </video>
        </div>
      </div> */}

      <div className="py-16">
        <div className="overflow-hidden lg:mx-40 mx-auto bg-white shadow sm:rounded-lg col-span-2">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Aditional Information</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-base font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">Diogo Manuel Loureiro Paulos</dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-base font-medium text-gray-500">Age</dt>
                <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">{age()} years old</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-base font-medium text-gray-500">Email address</dt>
                <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0 hover:text-blue-600"><a href="mailto: dpaulos6@outlook.com">dpaulos6@outlook.com</a></dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-base font-medium text-gray-500">Phone</dt>
                <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">+351 915 734 267</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-base font-medium text-gray-500">Native language</dt>
                <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">Portuguese</dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-base font-medium text-gray-500">Other languages</dt>
                <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">English <p className="inline-flex text-sm text-gray-500">B2 Level</p></dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                {/* <dt className="text-base font-medium text-gray-500">Linktree</dt>
                <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0 hover:text-blue-600"><a href="https://www.linktr.ee/dpaulos6" target="_blank" rel="noreferrer">linktree/dpaulos6</a></dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"> */}
                <dt className="text-base font-medium text-gray-500">Attachments</dt>
                <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul className="divide-y divide-gray-200 rounded-md border border-gray-200">
                    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-base">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                        <span className="ml-2 w-0 flex-1 truncate">dpaulos6-cv_portuguese.pdf</span>
                      </div>
                      <div className="ml-4 flex-shrink-0 hidden">
                        <a href="../public/" className="font-medium text-blue-600 hover:text-blue-500" download>
                          Download
                        </a>
                      </div>
                    </li>
                    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-base">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                        <span className="ml-2 w-0 flex-1 truncate">dpaulos6-cv_english.pdf</span>
                      </div>
                      <div className="ml-4 flex-shrink-0 hidden">
                        <a href="../public/" className="font-medium text-blue-600 hover:text-blue-500" download>
                          Download
                        </a>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};
  
export default AboutMe;