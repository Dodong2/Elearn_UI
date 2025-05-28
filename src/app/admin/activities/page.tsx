import React from 'react';
import { FiSearch, FiCalendar } from 'react-icons/fi';

export default function ActivityLog() {
  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FiSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search logs..."
            className="w-full pl-10 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="flex items-center ml-4">
          <input
            type="text"
            placeholder="dd/mm/yyyy"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 w-32"
          />
          <FiCalendar className="ml-2 text-gray-400" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-md shadow">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left text-gray-700 font-semibold">USER</th>
              <th className="py-2 px-4 text-left text-gray-700 font-semibold">ACTIVITY</th>
              <th className="py-2 px-4 text-left text-gray-700 font-semibold">DETAILS</th>
              <th className="py-2 px-4 text-left text-gray-700 font-semibold">DATE & TIME</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample Data - Replace with your actual log data */}
            <tr>
              <td className="py-2 px-4">Carl Maxx</td>
              <td className="py-2 px-4">Upload</td>
              <td className="py-2 px-4">Uploaded new file for "Topic #1"</td>
              <td className="py-2 px-4">2025-05-03 16:45:21</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Carl Maxx</td>
              <td className="py-2 px-4">Comment</td>
              <td className="py-2 px-4">Commented in Topic #2 discussion</td>
              <td className="py-2 px-4">2025-05-03 16:45:21</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Carl Maxx</td>
              <td className="py-2 px-4">Login</td>
              <td className="py-2 px-4">Login in the system</td>
              <td className="py-2 px-4">2025-05-03 16:45:21</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Carl Maxx</td>
              <td className="py-2 px-4">Upload</td>
              <td className="py-2 px-4">Uploaded new file for "Topic #1"</td>
              <td className="py-2 px-4">2025-05-03 16:45:21</td>
            </tr>
            {/* End of Sample Data */}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between text-gray-600">
        <span>Showing 4 of 5,345 logs</span>
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