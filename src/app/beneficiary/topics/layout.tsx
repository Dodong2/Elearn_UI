
export default function TopicLayout({ children } : { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
      {/* Header */}

      {/* MAIN CONTENT + SIDEBAR */}
      <div className="flex flex-1 relative">
        <main className="flex-1 overflow-x-hidden border border-red-500">{children}</main>
      </div>
  </div>
    )
}