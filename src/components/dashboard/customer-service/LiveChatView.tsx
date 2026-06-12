"use client";

const BackArrow = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const PaperclipIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-gray-500"
  >
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
  </svg>
);

type Props = {
  onBack: () => void;
};

export const LiveChatView = ({ onBack }: Props) => {
  return (
    <div className="flex flex-1 flex-col bg-white">
      {/* Chat header */}
      <div className="flex items-center gap-3 px-6 py-4">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back"
          className="text-gray-900 transition hover:text-[#00c2a8]"
        >
          <BackArrow />
        </button>
        <div
          className="h-10 w-10 flex-shrink-0 rounded-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://placehold.co/80x80/cfe9de/0d4f47?text=+')",
          }}
        />
        <div>
          <div className="text-sm font-bold text-gray-900">Live Chat</div>
          <div className="text-xs text-gray-500">Online</div>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex flex-1 flex-col gap-6 px-6 py-6">
        {/* Agent bubble (right, teal) */}
        <div className="flex justify-end">
          <div className="relative h-24 w-64 rounded-t-2xl rounded-bl-2xl bg-[#00c2a8]">
            <span className="absolute -bottom-2 right-6 h-0 w-0 border-l-[10px] border-t-[10px] border-l-transparent border-t-[#00c2a8]" />
          </div>
        </div>

        {/* User bubble (left, gray) */}
        <div className="flex justify-start">
          <div className="relative h-24 w-56 rounded-t-2xl rounded-br-2xl bg-gray-300">
            <span className="absolute -bottom-2 left-6 h-0 w-0 border-r-[10px] border-t-[10px] border-r-transparent border-t-gray-300" />
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="flex items-center gap-3 px-6 py-5">
        <div className="flex flex-1 items-center gap-2 rounded-full bg-gray-100 px-5 py-3">
          <input
            type="text"
            placeholder="Type something"
            className="flex-1 bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
          />
          <button type="button" aria-label="Attach file">
            <PaperclipIcon />
          </button>
        </div>
        <button
          type="button"
          aria-label="Send"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#00c2a8] text-white transition hover:bg-[#00a892]"
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
};
