import React from "react";

import { EducationCard } from "@/app/_components/cards";
import { schools } from "@/app/_components/data";

const Education = () => {
    return (
        <div className="flex flex-col w-full justify-center items-center bg-cream py-10">
        <div className="w-11/12 desktop:w-3/4 gap-5 flex flex-col ">
            <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-14 justify-between items-center">
                {
                    schools.sort((a, b) => a.school_name.localeCompare(b.school_name)).map((member, index) => {
                        return (
                            <EducationCard
                                key={member.id}
                                //school_logo={member.school_logo}
                                school_name={member.school_name}
                                school_course={member.school_course}
                                school_period={member.school_period}
                                school_status={member.school_status}
                            />
                        )
                    })
                }
            </div>
        </div>
    </div>
    )
}

export default Education