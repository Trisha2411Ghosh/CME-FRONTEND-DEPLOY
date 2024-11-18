import React from 'react'
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { WavyBackground } from "../ui/wavy-background";

const teamMembers = [
    {
      id: 1,
      name: 'Trisha Ghosh',
      designation: 'Frontend Developer',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 2,
      name: 'Udisha Pandey',
      designation: 'Database Design',
      image:
        'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80',
    },
    {
      id: 3,
      name: 'Smriti Sinha',
      designation: 'Backend Developer',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
];

// Canvas & 1st Div Change in CSS

function MeetOurTeam() {
  return (
    <div className="relative h-[30rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full ">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Team</h2>
            <p className="text-base md:text-lg text-white text-center mb-4 capitalize">Discover the experts driving innovation in trading insights and analytics</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={teamMembers} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default MeetOurTeam