import { Send } from "lucide-react";

export function ChatMockup() {
  return (
    <div className="relative w-full max-w-md">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-400 via-pink-400 to-purple-500 rounded-3xl shadow-2xl"></div>
      
      {/* Chat Container */}
      <div className="relative p-6">
        {/* Chat Window */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gray-900 text-white px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full"></div>
            </div>
            <span className="font-medium">Chat Agent</span>
          </div>

          {/* Chat Messages */}
          <div className="bg-gray-50 p-4 space-y-4 h-80">
            {/* Bot Message 1 */}
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-gray-900 rounded-full flex-shrink-0 flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                  <p className="text-sm text-gray-600 mb-1">Wed 8:21 AM</p>
                  <p className="text-gray-900">
                    Hello, I'm Quickrevert! I'm your personal agent assistant. How can I help you?
                  </p>
                </div>
              </div>
            </div>

            {/* User Message */}
            <div className="flex justify-end">
              <div className="bg-indigo-100 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[70%]">
                <p className="text-indigo-900">Hello! I am James</p>
              </div>
            </div>

            {/* Bot Message 2 */}
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-gray-900 rounded-full flex-shrink-0 flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                  <p className="text-gray-900">
                    Hello! I'm here to assist you with your tech queries. What issue are you facing with your laptop?
                  </p>
                  <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
                    <span>9:23 AM</span>
                    <div className="flex gap-2">
                      <button className="hover:text-gray-600">👍</button>
                      <button className="hover:text-gray-600">📎</button>
                      <button className="hover:text-gray-600">😊</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* User Message 2 */}
            <div className="flex justify-end">
              <div className="bg-indigo-100 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[70%]">
                <p className="text-indigo-900">Hi, I need to know about you.</p>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Type your message here..."
                className="flex-1 bg-gray-50 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                readOnly
              />
              <button className="bg-gray-900 text-white p-2 rounded-full hover:bg-gray-800">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating Chat Button */}
        <div className="absolute -bottom-3 -right-3 bg-gray-900 text-white p-4 rounded-full shadow-lg">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
