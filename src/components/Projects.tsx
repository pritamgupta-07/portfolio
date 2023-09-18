import projects from "@/data/projects";
import {
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div id="projects" className="flex justify-center items-center w-full ">
      <div className="w-full h-full mt-10">
        <div className="py-6 md:flex">
          <h3 className="text-gray-200 text-2xl font-bold md:pr-2">
            Here is a glimpse of what
          </h3>
          <h3 className="text-secondary text-2xl font-bold"> I have done.</h3>
        </div>
        {projects.map(({ id, ...project }) => {
          return (
            <div
              key={id}
              className={`flex my-10 md:justify-between flex-col ${
                id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }  items-center md:items-center min-w-full  min-h-full duration-200 md:hover:translate-x-2`}
            >
              {/* left block */}

              <div className="left flex justify-center items-center ">
                <Image
                  className="h-[300px] w-[300px] rounded-md border-2 border-secondary"
                  alt={project.name}
                  width={400}
                  height={400}
                  src={project.image}
                />
              </div>

              {/* right block */}

              <div
                className={`right min-w-[300px] md:max-w-[600px] flex-1 ${
                  id % 2 === 0 ? "md:pr-6" : "md:pl-6"
                }`}
              >
                <div className="flex flex-col items-start w-full mt-6 md:mt-0">
                  <h3 className="text-lg text-secondary font-semibold leading-10 ">
                    {project.name}
                  </h3>
                  <p className="text-gray-400">{project.description}</p>
                  <div className="text-gray-400">
                    <ol>
                      {project.keyFeatures.map((feature) => {
                        return (
                          <li
                            className="flex justify-start items-center py-2"
                            key={feature}
                          >
                            <span>
                              <CheckCircleIcon className="h-5 w-5 mr-3 text-green-400" />
                            </span>
                            {feature}
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                </div>
                <div className="my-5 flex justify-between md:max-w-[300px]">
                  <Link target="_blank" href="#">
                    <button
                      type="button"
                      className="text-gray-200 bg-secondary px-3 py-2 rounded-md hover:shadow-button duration-200 hover:scale-105 flex"
                    >
                      Have a look{" "}
                      <span>
                        {" "}
                        <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />{" "}
                      </span>
                    </button>
                  </Link>
                  <Link target="_blank" href="#">
                    <button
                      type="button"
                      className="text-gray-200 hover:text-secondary rounded-md border hover:border-secondary px-3 py-2 duration-200"
                    >
                      Source Code
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
