"use client"

import { FaGlobe, FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import {
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { resume2Data } from "./resume2Data";

export default function Resume() {

  return (
    <>
      <div className="max-w-4xl min-h-screen p-5 text-black font-serif bg-white mx-auto">
        <section className="text-center">
          <h1 className="text-2xl font-bold">{resume2Data.personalInfo.name}</h1>
          <p className="text-sm">
            {resume2Data.personalInfo.address.city},{" "}
            {resume2Data.personalInfo.address.country}
          </p>
          <div className="flex justify-center items-center text-xs space-x-1 underline underline-offset-2 max-sm:flex-col duration-300">
            {/* Phone */}
            <a
              href={`tel:${resume2Data.personalInfo.phone}`}
              className="rounded hover:bg-neutral-200"
            >
              <FaPhone className="inline-block mr-1" />
              {resume2Data.personalInfo.phone}
            </a>
            {/* Email */}
            <a
              href={`mailto:${resume2Data.personalInfo.email}`}
              className=" rounded hover:bg-neutral-200 block"
            >
              <IoIosMail className="inline-block mr-1" />
              {resume2Data.personalInfo.email}
            </a>
            <a
              href={`https://${resume2Data.personalInfo.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className=" rounded hover:bg-neutral-200 block"
            >
              <FaLinkedin className="inline-block mr-1" />
              {resume2Data.personalInfo.contact.linkedin}
            </a>
            <a
              href={`https://${resume2Data.personalInfo.contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className=" rounded hover:bg-neutral-200 block"
            >
              <FaGithub className="inline-block mr-1" />
              {resume2Data.personalInfo.contact.github}
            </a>
            <a
              href={`https://${resume2Data.personalInfo.contact.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className=" rounded hover:bg-neutral-200 block"
            >
              <FaGlobe className="inline-block mr-1" />
              {resume2Data.personalInfo.contact.website}
            </a>
          </div>
        </section>
        <section className="mt-1 text-sm">
          <h2 className="font-semibold">Full-Stack Web Developer</h2>
          <hr />
          <p>{resume2Data.summary}</p>
        </section>
        <section className="mt-1 text-sm">
          <h2 className="font-semibold">EDUCATION</h2>
          <hr />
          <div>
            <div className="flex justify-between">
              <strong>{resume2Data.education[0].school}</strong>{" "}
              <p className="font-bold">{resume2Data.education[0].duration}</p>
            </div>
            <div className="flex justify-between">
              <span className="flex flex-col">
                <p>{resume2Data.education[0].degree}</p>
                <p className="font-serif">
                  <i>{`CGPA- ${resume2Data.education[0].cgpa}`}</i>
                </p>
              </span>
              <p>
                <i>{resume2Data.education[0].location}</i>
              </p>
            </div>
          </div>
        </section>
        <section className="mt-1 text-sm">
          <h2 className="font-semibold">TECHNICAL SKILLS</h2>
          <hr />
          <div>
            {Object.entries(resume2Data.technicalSkills).map(
              ([category, skills]) => (
                <div key={category}>
                  <strong>{category}:</strong> {skills.join(", ")}
                </div>
              ),
            )}
          </div>
        </section>
        <section className="mt-1 text-sm">
          <h2 className="text-sm font-semibold">PROJECTS</h2>
          <hr />
          <div>
            {resume2Data.projects.map((project, index) => (
              <div key={index} className="mb-2">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <strong className="hover:underline">
                      <a
                        title="Web Live link"
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        {project.name} <FaExternalLinkAlt className="mx-1" /> |
                      </a>
                    </strong>
                    <a
                      title="Source Code link"
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1 rounded hover:bg-neutral-200 block"
                    >
                      <FaGithub className="inline-block mr-1" /> {" | "}
                    </a>
                    <p className=" ml-1">{project.technologies.join(", ")}</p>
                  </div>
                  <p className="font-bold">{project.duration}</p>
                </div>
                <ul className="list-disc ml-5">
                  {project.description.map((desc, descIndex) => (
                    <li
                      key={descIndex}
                      dangerouslySetInnerHTML={{ __html: desc }}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-sm font-semibold">LANGUAGES</h2>
          <hr />
          <ul className="list-disc ml-5">
            {resume2Data.languages.map((language, index) => (
              <li key={index}>
                <strong>{language.name}</strong> - {language.proficiency}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
