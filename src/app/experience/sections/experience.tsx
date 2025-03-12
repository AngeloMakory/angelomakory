import React from 'react'
import { ExperienceCard } from "@/app/_components/cards";

import { organizations } from '@/app/_components/data'

const Organization = () => {
    return (
        <div className="flex flex-col w-full justify-center items-center bg-cream py-10">
                <div className="w-11/12 desktop:w-3/4 gap-5 flex flex-col ">
                    <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-14 justify-between items-center">
                        {
                            organizations.sort((a, b) => a.org_name.localeCompare(b.org_name)).map((member) => {
                                return (
                                    <ExperienceCard
                                        key={member.org_name}
                                        //school_logo={member.school_logo}
                                        org_name={member.org_name}
                                        org_period={member.org_period}
                                        org_title={member.org_title}
                                        org_description={member.org_description}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
    )
}
export default Organization