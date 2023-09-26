"use client";

import { backEnd, frontEnd, other } from "@/data/skills";
import Image from "next/image";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div id="skills" className="w-full">
      <div className="pt-16">
        <h3 className="text-gray-200 text-2xl font-bold pb-5">
          <span className="text-secondary">What</span> I Bring to the Table.
        </h3>

        <div className="flex justify-center md:justify-between flex-wrap gap-5">
          {/* front-end block */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="front-end w-full sm:max-w-[325px] border-secondary border-2 border-opacity-75 rounded-lg my-6 p-4 shadow-button hover:scale-105 hover:border-opacity-100 duration-200"
          >
            <div className="flex justify-center items-center gap-3 pb-4">
              <Image src="/frontend.svg" width={40} height={40} alt="test" />
              <div className="text-xl text-gray-200 font-semibold">
                Frontend
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col pl-2">
                {frontEnd.map(({ name, src }) => {
                  return (
                    <div
                      key={name}
                      className="flex gap-4 my-2 items-center text-lg text-gray-400"
                    >
                      <Image
                        src={src}
                        className={
                          name === "NextJs"
                            ? "bg-white border rounded-full"
                            : ""
                        }
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
          </motion.div>

          {/* back-end block */}

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="front-end w-full sm:max-w-[325px] border-secondary border-2 border-opacity-75 rounded-lg my-6 p-4 shadow-button hover:scale-105 hover:border-opacity-100 duration-200"
          >
            <div className="flex justify-center items-center gap-3 pb-4">
              <Image src="/backend.svg" width={40} height={40} alt="test" />
              <div className="text-xl text-gray-200 font-semibold">Backend</div>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col pl-2">
                {backEnd.map(({ name, src }) => {
                  return (
                    <div
                      key={name}
                      className="flex gap-4 my-2 items-center text-lg text-gray-400 "
                    >
                      <Image
                        src={src}
                        className={
                          name === "Postman"
                            ? "bg-white border rounded-full"
                            : ""
                        }
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
          </motion.div>

          {/* other skills block */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="front-end w-full sm:max-w-[325px] border-secondary border-2 border-opacity-75 rounded-lg my-6 p-4 shadow-button hover:scale-105 hover:border-opacity-100 duration-200"
          >
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
                {other.map(({ name, src }) => {
                  return (
                    <div
                      key={name}
                      className="flex gap-4 my-2 items-center text-lg text-gray-400"
                    >
                      <Image src={src} width={32} height={32} alt={name} />
                      <p>{name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
