
//imports
import  React  from 'react'
// import { TbExternalLink } from "react-icons/tb";
// import { Link } from "react-router-dom";
// import { FaDownload, FaLocationPin, FaVideo } from "react-icons/fa6";
// import { CiInstagram, CiLinkedin, CiVideoOn } from "react-icons/ci";

type ExperienceCardDetails = {
    //org_logo: string;
    org_name: string;
    org_title: string;
    org_period: string;
    org_description:string;
};

type ProjectCardDetails = {
    project_name: string;
    project_date: string;
    project_tags: string;
    project_desc: string;
    project_url: string;
};

type EducationCardDetails = {
    //school_logo : string;
    school_name : string;
    school_course: string;
    school_period: string;
    school_status: string;
};

export const ProjectCard: React.FC <ProjectCardDetails> = ({
    project_name,
    project_date,
    project_tags,
    project_desc,
    project_url,
}) => { 
    return(
        <div className="flex flex-col gap-2 sm:gap-3 w-full justify-between rounded-lg h-full p-3 sm:p-5 border-2 border-yellow-500 border-opacity-80">
     
            <h2 className="text-xl sm:text-2xl md:text-3xl desktop:text-4xl font-medium text-green_s4 text-blue-500">
                <b>{project_name}, <i className='text-lg sm:text-xl md:text-2xl'>{project_date}</i></b>
            </h2>
            <h3 className="text-lg sm:text-xl desktop:text-2xl font-medium text-blue-500 line-clamp-2">
                {project_tags}
            </h3>
            <p className="text-sm sm:text-base tablet:text-sm desktop:text-md line-clamp-3 sm:line-clamp-4 text-white">
                {project_desc}
            </p>
            <span className="w-full flex flex-row-reverse items-center gap-2 mt-1 sm:mt-2">
                <a 
                    href={project_url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 sm:px-4 sm:py-2 border-2 border-blue-500 bg-transparent text-blue-500 rounded hover:bg-blue-500 hover:text-black transition-colors duration-300 flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
                >
                    Visit Project
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </a>
            </span>
        </div>
    );
};

export const EducationCard: React.FC <EducationCardDetails> = ({
    // school_logo,
    school_name,
    school_course,
    school_period,
    school_status,
}) => { 
    return(
        <div className="flex flex-col gap-2 sm:gap-3 w-full justify-between rounded-lg h-full p-3 sm:p-5 border-2 border-yellow-500 border-opacity-80 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20">
            <h2 className="text-xl sm:text-2xl md:text-3xl desktop:text-4xl font-medium text-green-600 line-clamp-2">
                {school_name}
            </h2>
            <br/>
            <h3 className="text-md sm:text-lg md:text-xl desktop:text-3xl font-medium text-green-600 line-clamp-2">
                <i>{school_period}</i>
            </h3>
            <br/>
            <h3 className="text-md sm:text-lg desktop:text-xl font-medium text-green-600 line-clamp-2">
                {school_course}
            </h3>
            <br/>
            <p className="text-sm sm:text-base tablet:text-sm desktop:text-md line-clamp-3 sm:line-clamp-4 text-white">
                {school_status}
            </p>
        </div>
    );
};

export const ExperienceCard: React.FC <ExperienceCardDetails> = ({
    //org_logo,
    org_name,
    org_title,
    org_period,
    org_description,
}) =>{
    return (
        <div className="flex flex-col gap-2 sm:gap-3 w-full justify-between rounded-lg h-full p-3 sm:p-5 border-2 border-yellow-500 border-opacity-80 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20">
            <h2 className="text-xl sm:text-2xl md:text-3xl desktop:text-4xl font-medium text-yellow-500 line-clamp-2">
                {org_name}, <i className="text-lg sm:text-xl md:text-2xl">{org_period}</i>
            </h2>
            <br/>
            {/* <h3 className="text-lg sm:text-xl desktop:text-2xl font-medium text-yellow-500 line-clamp-2">
                <i>{org_period}</i>
            </h3> */}
            <br/>
            <h3 className="text-lg sm:text-xl desktop:text-2xl font-medium text-yellow-500 line-clamp-2">
                {org_title}
            </h3>
            <br/>
            <p className="text-sm sm:text-base tablet:text-sm desktop:text-md line-clamp-3 sm:line-clamp-4 text-white">
                {org_description}
            </p>
        </div>
    );
};

export const CardsGrid:React.FC <{children: React.ReactNode}> =({children}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {children}
        </div>
    );
};