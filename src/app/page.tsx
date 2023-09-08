import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { FC } from "react";
import Image from "next/image";

interface Home {}

const Home: FC<Home> = () => {
  return (
    <main className="h-full w-full px-6">
      <div className="flex flex-col-reverse md:flex-row  md:justify-between items-center w-full h-full">
        {/* left block */}
        <div className="left w-[400px] text-gray-200 my-10">
          <div className="text-2xl leading-normal font-bold">
            <h3>Hey there!</h3>
            <h2>I&apos;m <span className="text-secondary">Pritam Gupta</span> , Fullstack web developer.</h2>
          </div>
          {/* resume download */}
          <div className="flex justify-start items-center">
            <button>Resume</button>
          </div>
          {/* social media links */}
          <div className="social-media-links">
           <ul className="flex gap-5">
            <li>
            <a href="https://unsplash.com/photos/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA">
            <Image
            width={100}
            height={100}
            className="w-8 h-8"
            src="/linkedin.svg"
            alt="pritam-gupta"
          />
              </a>
            </li>
            <li>
            <a href="https://unsplash.com/photos/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA">
            <Image
            width={100}
            height={100}
            className="h-8 w-8"
            src="/twitter.svg"
            alt="pritam-gupta"
          />
              </a>
            </li>
            <li className="hover:">
            <a href="https://unsplash.com/photos/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA">
            <Image
            width={100}
            height={100}
            className="h-8 w-8"
            src="/github.svg"
            alt="pritam-gupta"
          />
              </a>
            </li>
           </ul>
          </div>
        </div>

        {/* right block */}
        <div className="right pt-20">
          <Image
            width={400}
            height={400}
            className="w-[400px] h-[380px] "
            src="/mock-profile-photo.jpg"
            alt="pritam-gupta"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
