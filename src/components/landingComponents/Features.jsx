import React from 'react'
import FeatureCards from '../common/FeatureCards'
import { Map,ClockCheck,CircleDollarSign,NotebookPen } from 'lucide-react'

const featuresData = [
    {
        title: "Personalized Itineraries",
        description: "Get travel plans tailored to your preferences and interests.",
        icon: Map
    },
    {
        title: "Real-time Updates",
        description: "Receive live updates on weather, traffic, and local events.",
        icon: ClockCheck 
    },
    {
        title: "Budget Planner",
        description: "Manage your travel expenses with our integrated budget tool.",
        icon: CircleDollarSign
    },
    {
        title: "Local Recommendations",
        description: "Discover hidden gems and popular spots recommended by locals.",
        icon: NotebookPen
    }
]

export const Features = () => {
  return (
    <section className='px-20 py-20'>
        <div>
            <h2 className='text-4xl font-bold text-center mb-2'>Features</h2>
            <p className='text-center text-gray-600'>Discover the powerful features of Wanderwise</p>
        </div>

        {/* Features */}
        <div className='grid grid-cols-4 gap-6 mt-10'>
            {
                featuresData.map((features, index) => {
                    return(
                        <FeatureCards 
                            key={index}
                            title={features.title}
                            description={features.description}
                            icon = {features.icon} />
                    )
                })
            }
        </div>
    </section>
  )
}
export default Features
