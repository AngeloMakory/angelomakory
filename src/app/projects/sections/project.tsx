import React from 'react'

import { ProjectCard } from '@/app/_components/cards'
import { projects } from '@/app/_components/data'

const Project = () => {
    return (
        <div className="flex flex-col w-full justify-center items-center bg-cream py-10">
        <div className="w-11/12 desktop:w-3/4 gap-5 flex flex-col ">
            <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-14 justify-between items-center">
                {
                    projects.sort((a, b) => {
                        
                        const aStartYear = parseInt(a.project_date.split('-')[0], 10);
                        const bStartYear = parseInt(b.project_date.split('-')[0], 10);

                        return bStartYear - aStartYear;
                    })
                        .map((member) => {
                        return (
                            <ProjectCard
                                key={member.project_name}
                                project_name={member.project_name}
                                project_date={member.project_date}
                                project_tags={member.project_tags}
                                project_desc={member.project_desc}
                                project_url={member.project_url}
                            />
                        )
                    })
                }
            </div>
        </div>
    </div>
    )
}

export default Project