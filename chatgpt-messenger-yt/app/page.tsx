// import Image from 'next/image'
import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2 ">
            <p className="infoText">"Explain Something to me"</p>
            <p className="infoText">
              "What is the difference between a Dog and a Cat?"
            </p>
            <p className="infoText">"What is the color of the sun?"</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8" />
            {/* Sun Icon */}
            <h2>Capablities</h2>
          </div>
          <div className="space-y-2 ">
            <p className="infoText">Change the chatGPT to use</p>
            <p className="infoText">
              Measseges are stored in firebase's firestores
            </p>
            <p className="infoText">
              Hot Toast notification when ChatGPT is thinking!
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8 " />
            {/* Sun Icon */}
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2 ">
            <p className="infoText">
              May occasionally generate incorrect information
            </p>
            <p className="infoText">
              may occasionally generate harmful production or biased content
            </p>
            <p className="infoText">
              Limited knowledge of world and events after 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
