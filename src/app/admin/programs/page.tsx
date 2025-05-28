import React from 'react';
import { FiSearch, FiPlus, FiUser, FiEdit, FiTrash2 } from 'react-icons/fi';

export default function ProgramManagement() {
  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FiSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search class..."
            className="w-full pl-10 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-green-400 ml-4">
          <FiPlus className="inline-block mr-2" />
          Add New Program
        </button>
      </div>

      <div>
        {/* Program Card 1 */}
        <div className="bg-white rounded-md shadow mb-4 p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Topic #1</h3>
              <div className="flex items-center text-gray-600 text-sm mt-1">
                <FiUser className="mr-1" /> 52 Learners
              </div>
              <div className="flex items-center text-gray-600 text-sm mt-1">
                <FiUser className="mr-1" /> 2 Instructors
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2">
                <FiPlus className="inline-block mr-2" />
                Add Learners
              </button>
            </div>
            <div className="space-x-2">
              <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                <FiEdit className="h-5 w-5" />
              </button>
              <button className="text-red-500 hover:text-red-700 focus:outline-none">
                <FiTrash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Program Card 2 */}
        <div className="bg-white rounded-md shadow mb-4 p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Topic #2</h3>
              <div className="flex items-center text-gray-600 text-sm mt-1">
                <FiUser className="mr-1" /> 52 Learners
              </div>
              <div className="flex items-center text-gray-600 text-sm mt-1">
                <FiUser className="mr-1" /> 2 Instructors
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2">
                <FiPlus className="inline-block mr-2" />
                Add Learners
              </button>
            </div>
            <div className="space-x-2">
              <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                <FiEdit className="h-5 w-5" />
              </button>
              <button className="text-red-500 hover:text-red-700 focus:outline-none">
                <FiTrash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Program Card 3 */}
        <div className="bg-white rounded-md shadow p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Topic #3</h3>
              <div className="flex items-center text-gray-600 text-sm mt-1">
                <FiUser className="mr-1" /> 52 Learners
              </div>
              <div className="flex items-center text-gray-600 text-sm mt-1">
                <FiUser className="mr-1" /> 2 Instructors
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2">
                <FiPlus className="inline-block mr-2" />
                Add Learners
              </button>
            </div>
            <div className="space-x-2">
              <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                <FiEdit className="h-5 w-5" />
              </button>
              <button className="text-red-500 hover:text-red-700 focus:outline-none">
                <FiTrash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}