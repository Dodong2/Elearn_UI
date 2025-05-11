"use client";
/* components */
import Navbar from "@/components/Navbar";
import Comments from "@/components/Comments";
/* icons */
import { FiDownload } from 'react-icons/fi';

const meeting = [
  { day: "APR 18", title: "Meeting #1", time: "10:00 – 11:30 AM" },
  { day: "NEXT", title: "Meeting #2", time: "06:00 – 07:30 PM" },
  { day: "FORT", title: "Meeting #3", time: "09:00 – 10:00 AM" },
];

/* contents for posts */
export const posts = [
  {
    id: 1,
    author: "hv",
    posted: "Posted:",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate ante non sem finibus porttitor. Sed eget finibus nibh. Aliquam erat volutpat. Nam vestibulum nulla justo, eget elementum magna tincidunt et. Fusce interdum, diam quis dignissim ultricies, tellus elit cursus orci, in ullamcorper neque odio venenatis nunc. Quisque vel sapien diam. Praesent luctus convallis dictum.\n\nQuisque id ligula at neque faucibus imperdiet. Suspendisse euismod porta tellus, dignissim rhoncus massa efficitur eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vel magna at massa venenatis tincidunt. Maecenas convallis posuere elit eget faucibus.",

    files: [
      { name: "4Ps Guidelines.pdf", size: "2.58 MB", type: "PDF", icon: <FiDownload/> },
      { name: "4Ps members.doc", size: "1.38 MB", type: "DOC", icon: <FiDownload/> },
    ],
  },
];

export default function TopicLayout() {
  return (
  <div className="w-full">
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 items-start">
    {/* Main content - LEFT SIDE */}
    <div className="bg-white rounded-md overflow-hidden">
      {/* Header */}
      <div className="bg-gray-800 rounded-t-1xl text-white p-20">
        <h2 className="text-lg font-semibold">Topic #1</h2>
      </div>

      {/* Tabs */}
      <Navbar />

      {/* Post input area */}
      <div className="p-4 bg-gray-100 mt-2 rounded-md">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          <input
            type="text"
            placeholder="Post Something / Create a discussions"
            className="flex-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <button className="text-xm cursor-pointer bg-gray-800 text-white px-3 py-1 rounded active:scale-95 transition-transform">
            Publish
          </button>
        </div>
      </div>

      {/* Posts List */}
      <div className=" bg-gray-100 p-4 space-y-6 rounded-md shadow mt-3">
        {posts.map(post => (
          <div key={post.id} className="border-b border-gray-200 pb-4 last:border-b-0">
            {/* Post Header */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <div>
                  <p className="font-semibold text-gray-800">{post.author}</p>
                  <p className="text-xs text-gray-500">{post.posted}</p>
                </div>
              </div>
              <div className="text-gray-500 cursor-pointer">...</div>
            </div>

            {/* Post Content */}
            <p className="text-sm text-gray-700 mb-4 whitespace-pre-wrap">{post.content}</p>

            {/* File Attachments */}
            {post.files && post.files.length > 0 && (
              <div className="space-y-2 mb-4">
                {post.files.map((file, fileIdx) => (
                  <div key={fileIdx} className="flex items-center justify-between bg-white p-3 rounded-md">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 flex items-center justify-center bg-gray-300 text-xs text-gray-700 rounded">
                        {file.type}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">{file.name}</p>
                        <p className="text-xs text-gray-500">{file.size}</p>
                      </div>
                    </div>
                    <button className="text-gray-600 hover:text-gray-800">{file.icon}</button>
                  </div>
                ))}
              </div>
            )}

            {/* Comments */}
            <Comments/>

          </div>
        ))}
      </div>
    </div>

    {/* Right Sidebar - Upcoming Meetings */}
    <aside className="hidden md:block bg-gray-100 rounded-md p-4">
      <h3 className="text-gray-700 font-semibold mb-4">Upcoming</h3>
      <ul className="space-y-3">
        {meeting.map((meeting, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="mt-1 w-6 h-6 rounded-full bg-gray-400"></div>
            <div>
              <p className="text-sm font-semibold">{meeting.title}</p>
              <p className="text-xs text-gray-500">{meeting.time}</p>
            </div>
          </li>
        ))}
      </ul>
      <button className="mt-4 text-xs text-gray-500 hover:underline">View all</button>
    </aside>
  </div>
</div>

  );
}
