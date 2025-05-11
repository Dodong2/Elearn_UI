import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const topics = [
  {id: 1, title: "Topic #1"},
  {id: 2, title: "Topic #2"},
  {id: 3, title: "Topic #3"}
]

export default function BeneficiaryPrograms() {
    return (
      <div>
        <h1>Programs</h1>
        
        {/* Dashboard content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {/* Card Item */}
          {topics.map((topic) => (
            <div key={topic.id} className="bg-white rounded-lg shadow overflow-hidden">
              <Link href="/beneficiary/topics">
            {/* Top gray box */}
            <div className="bg-gray-300 h-32 w-full"></div>
  
            {/* Bottom content */}
            <div className="flex items-center justify-between p-4">
              <span className="text-lg font-medium">{topic.title}</span>
              <button className="bg-gray-400 text-white rounded-full p-2 hover:bg-gray-500">
                <FiArrowRight />
              </button>
            </div></Link>
          </div>
          ))}
        
        </div>
      </div>
    );
  }