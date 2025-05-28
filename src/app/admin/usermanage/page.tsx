import React from 'react';
import { FiUserPlus, FiSearch, FiEyeOff, FiTrash2 } from 'react-icons/fi';

export default function UserManagement() {
  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <FiSearch className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-green-400 ml-4">
          <FiUserPlus className="inline-block mr-2" />
          Add New User
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-md shadow">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left text-gray-700 font-semibold">USER</th>
              <th className="py-2 px-4 text-left text-gray-700 font-semibold">GMAIL</th>
              <th className="py-2 px-4 text-left text-gray-700 font-semibold">ROLE</th>
              <th className="py-2 px-4 text-right text-gray-700 font-semibold">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample Data - Replace with your actual user data */}
            <tr>
              <td className="py-2 px-4">Carl Maxx</td>
              <td className="py-2 px-4">carlm0xx@gmail.com</td>
              <td className="py-2 px-4">Teacher</td>
              <td className="py-2 px-4 text-right">
                <button className="text-gray-500 hover:text-gray-700 mr-2 focus:outline-none">
                  <FiEyeOff className="h-5 w-5" />
                </button>
                <button className="text-red-500 hover:text-red-700 focus:outline-none">
                  <FiTrash2 className="h-5 w-5" />
                </button>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4">Carl Maxx</td>
              <td className="py-2 px-4">carlm0xx@gmail.com</td>
              <td className="py-2 px-4">Beneficiary</td>
              <td className="py-2 px-4 text-right">
                <button className="text-gray-500 hover:text-gray-700 mr-2 focus:outline-none">
                  <FiEyeOff className="h-5 w-5" />
                </button>
                <button className="text-red-500 hover:text-red-700 focus:outline-none">
                  <FiTrash2 className="h-5 w-5" />
                </button>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4">Carl Maxx</td>
              <td className="py-2 px-4">carlm0xx@gmail.com</td>
              <td className="py-2 px-4">Beneficiary</td>
              <td className="py-2 px-4 text-right">
                <button className="text-gray-500 hover:text-gray-700 mr-2 focus:outline-none">
                  <FiEyeOff className="h-5 w-5" />
                </button>
                <button className="text-red-500 hover:text-red-700 focus:outline-none">
                  <FiTrash2 className="h-5 w-5" />
                </button>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4">Carl Maxx</td>
              <td className="py-2 px-4">carlm0xx@gmail.com</td>
              <td className="py-2 px-4">Teacher</td>
              <td className="py-2 px-4 text-right">
                <button className="text-gray-500 hover:text-gray-700 mr-2 focus:outline-none">
                  <FiEyeOff className="h-5 w-5" />
                </button>
                <button className="text-red-500 hover:text-red-700 focus:outline-none">
                  <FiTrash2 className="h-5 w-5" />
                </button>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4">Carl Maxx</td>
              <td className="py-2 px-4">carlm0xx@gmail.com</td>
              <td className="py-2 px-4">Beneficiary</td>
              <td className="py-2 px-4 text-right">
                <button className="text-gray-500 hover:text-gray-700 mr-2 focus:outline-none">
                  <FiEyeOff className="h-5 w-5" />
                </button>
                <button className="text-red-500 hover:text-red-700 focus:outline-none">
                  <FiTrash2 className="h-5 w-5" />
                </button>
              </td>
            </tr>
            {/* End of Sample Data */}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between text-gray-600">
        <span>Showing 5 of 1,345 users</span>
        <div className="space-x-2">
          <button className="py-1 px-3 rounded-md hover:bg-gray-200 focus:outline-none">Previous</button>
          <button className="py-1 px-3 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none">1</button>
          <button className="py-1 px-3 rounded-md hover:bg-gray-200 focus:outline-none">2</button>
          <button className="py-1 px-3 rounded-md hover:bg-gray-200 focus:outline-none">3</button>
          <button className="py-1 px-3 rounded-md hover:bg-gray-200 focus:outline-none">Next</button>
        </div>
      </div>
    </div>
  );
}