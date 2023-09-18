import { backEnd, frontEnd, other } from "@/data/skills";
import Image from "next/image";
import { FC } from "react";

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
  return (
    <div id="skills" className="w-full">
      <div className="pt-16">
        <h3 className="text-gray-200 text-2xl font-bold pb-5">
          <span className="text-secondary">What</span> I
          Bring to the Table.
        </h3>

        <div className="flex justify-center md:justify-between flex-wrap gap-5">
          {/* front-end block */}

          <div className="front-end w-full sm:max-w-[325px] border-secondary border-2 border-opacity-75 rounded-lg my-6 p-4 shadow-button hover:scale-105 hover:border-opacity-100 duration-200">
            <div className="flex justify-center items-center gap-3 pb-4">
              <Image src="/frontend.svg" width={40} height={40} alt="test" />
              <div className="text-xl text-gray-200 font-semibold">
                Frontend
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col pl-2">
                {frontEnd.map(({ name, src, ...rest }) => {
                  return (
                    <div
                      key={name}
                      className="flex gap-4 my-2 items-center text-lg text-gray-400"
                    >
                      <Image
                        src={src}
                        className={rest.style}
                        // className={name === 'NextJs' ? 'bg-white rounded-full border' : undefined}
                        width={32}
                        height={32}
                        alt={name}
                      />
                      <p>{name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* back-end block */}

          <div className="front-end w-full sm:max-w-[325px] border-secondary border-2 border-opacity-75 rounded-lg my-6 p-4 shadow-button hover:scale-105 hover:border-opacity-100 duration-200">
            <div className="flex justify-center items-center gap-3 pb-4">
              <Image src="/backend.svg" width={40} height={40} alt="test" />
              <div className="text-xl text-gray-200 font-semibold">Backend</div>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col pl-2">
                {backEnd.map(({ name, src, ...rest }) => {
                  return (
                    <div
                      key={name}
                      className="flex gap-4 my-2 items-center text-lg text-gray-400"
                    >
                      <Image
                        src={src}
                        className={rest.style}
                        width={32}
                        height={32}
                        alt={name}
                      />
                      <p>{name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* other skills block */}

          <div className="front-end w-full sm:max-w-[325px] border-secondary border-2 border-opacity-75 rounded-lg my-6 p-4 shadow-button hover:scale-105 hover:border-opacity-100 duration-200">
            <div className="flex justify-center items-center gap-3 pb-4">
              <Image
                src="/other-skills.svg"
                width={40}
                height={40}
                alt="test"
              />
              <div className="text-xl text-gray-200 font-semibold">
                Other Tools
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col pl-2">
                {other.map(({ name, src, ...rest }) => {
                  return (
                    <div
                      key={name}
                      className="flex gap-4 my-2 items-center text-lg text-gray-400"
                    >
                      <Image
                        src={src}
                        className={rest.style}
                        width={32}
                        height={32}
                        alt={name}
                      />
                      <p>{name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
