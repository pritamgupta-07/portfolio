import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { FC } from "react";

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
  return (
    <div id="contact" className="w-full pb-10">
      <div className="pt-16 mb-10">
        <h3 className="text-2xl text-gray-200 font-bold">
          Let&apos;s get to know each other{" "}
          <span className="text-secondary">better.</span>
        </h3>
      </div>
      <div className=" w-full h-full lg:flex lg:items-center space-y-5">
        <div className="left lg:mr-6">
          <Image
            src="/connect.svg"
            width={968}
            height={500}
            alt="connect-with-me"
          />
        </div>
        <div className="right w-full space-y-5">
          <p className="text-gray-400 leading-8 md:leading-10">
            Thank you for visiting! This is your direct line to reach me.
            Whether you have a project in mind, a question about web
            development, or just want to say hello, I&apos;m here and eager to
            connect with you.
          </p>
          <div className="email-link space-y-5">
            <p className="text-gray-400">Reach out to me via email</p>
            <p>
              <a
                href="mailto:pritampg2907@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 text-xl flex items-center underline"
              >
                <EnvelopeIcon className="h-8 w-8 mr-5 text-secondary" />
                pritampg2907@gmail.com
              </a>
            </p>
          </div>
          <div className="social-media space-y-5 pt-6">
            <p className="text-gray-400">Connect through social media</p>
            <div className="flex flex-wrap gap-5 justify-between max-w-[600px]">
              <p>
                <a
                  href="https://twitter.com/pritam_stack"
                  className="email text-gray-200 flex items-center gap-3"
                  target="_blank"
                >
                  <Image
                    src="/github.svg"
                    width={32}
                    height={32}
                    alt="connect-with-me"
                  />
                  GitHub
                </a>
              </p>
              <p>
                <a
                  href="https://twitter.com/pritam_stack"
                  className="email text-gray-200 flex items-center gap-3"
                  target="_blank"
                >
                  <Image
                    src="/twitter.svg"
                    width={32}
                    height={32}
                    alt="connect-with-me"
                  />
                  Twitter
                </a>
              </p>
              <p>
                <a
                  href="https://twitter.com/pritam_stack"
                  className="email text-gray-200 flex items-center gap-3"
                  target="_blank"
                >
                  <Image
                    src="/linkedin.svg"
                    width={32}
                    height={32}
                    alt="connect-with-me"
                  />
                  LinkedIn
                </a>
              </p>
              <p>
                <a
                  href="https://twitter.com/pritam_stack"
                  className="email text-gray-200 flex items-center gap-3"
                  target="_blank"
                >
                  <Image
                    src="/discord.svg"
                    width={32}
                    height={32}
                    alt="connect-with-me"
                  />
                  Discord
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
