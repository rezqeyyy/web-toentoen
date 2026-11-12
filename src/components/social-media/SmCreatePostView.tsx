// src/components/social-media/SmCreatePostView.tsx
"use client";

import React, { useState } from 'react';

export const SmCreatePostView: React.FC = () => {
  const [selectedChannels, setSelectedChannels] = useState<string[]>(['Instagram', 'Linkedin']);
  const [caption, setCaption] = useState<string>('');
  const [date, setDate] = useState<string>('January 27, 2027');
  const [time, setTime] = useState<string>('09.30 AM');
  const [isScheduled, setIsScheduled] = useState<boolean>(false);

  const channels = [
    { id: 'Instagram', name: 'Instagram', handle: '@Toentoen' },
    { id: 'Facebook', name: 'Facebook', handle: '@Toentoen' },
    { id: 'Linkedin', name: 'Linkedin', handle: '@Toentoen' },
    { id: 'Tiktok', name: 'Tiktok', handle: '@Toentoen' },
  ];

  const toggleChannel = (channelId: string) => {
    setSelectedChannels((prev) =>
      prev.includes(channelId)
        ? prev.filter((id) => id !== channelId)
        : [...prev, channelId]
    );
  };

  const handleSchedule = () => {
    setIsScheduled(true);
    setTimeout(() => setIsScheduled(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-xl font-bold text-gray-900">Create &amp; schedule post</h1>

      {/* 2 Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Where should this go? */}
          <div>
            <h2 className="text-sm font-bold text-gray-900">Where should this go?</h2>
            <p className="text-xs text-gray-500 mb-3">Choose channels and tailor content per format.</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {channels.map((chan) => {
                const isSelected = selectedChannels.includes(chan.id);
                return (
                  <button
                    key={chan.id}
                    type="button"
                    onClick={() => toggleChannel(chan.id)}
                    className={`relative p-3.5 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'bg-[#E8FAF5] border-[#00c2a8] shadow-2xs'
                        : 'bg-white border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-xs font-bold text-gray-900">{chan.name}</div>
                    <div className="text-[11px] text-gray-400">{chan.handle}</div>
                    {isSelected && (
                      <span className="absolute top-3 right-3 text-[#00A896] text-xs font-bold">
                        &#10003;
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Caption */}
          <div>
            <label htmlFor="post-caption" className="block text-sm font-bold text-gray-900 mb-1.5">
              Caption
            </label>
            <div className="bg-white border border-gray-200 rounded-xl p-3 focus-within:border-[#00A896] transition-colors shadow-2xs">
              <textarea
                id="post-caption"
                rows={4}
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Type something..."
                className="w-full resize-none text-xs text-gray-800 placeholder-gray-400 focus:outline-none"
              />

              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                {/* Icons */}
                <div className="flex items-center gap-2 text-gray-400">
                  <button type="button" className="hover:text-gray-600 p-1" title="Attach file">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                  </button>
                  <button type="button" className="hover:text-gray-600 p-1" title="Emoji">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  <button type="button" className="hover:text-gray-600 p-1" title="Template">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </button>
                </div>

                {/* Hashtag Suggestion */}
                <button
                  type="button"
                  onClick={() => setCaption((prev) => (prev ? `${prev} #Toentoen #UMKM` : '#Toentoen #UMKM'))}
                  className="text-xs text-gray-500 hover:text-gray-800 transition-colors"
                >
                  Suggest hashtags
                </button>
              </div>
            </div>
          </div>

          {/* Media */}
          <div>
            <h2 className="text-sm font-bold text-gray-900">Media</h2>
            <p className="text-xs text-gray-500 mb-2">1 image · optimized for your selections</p>

            <div className="bg-gray-100/70 border border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-100 transition-colors">
              <svg className="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span className="text-xs text-gray-500">select file or drag &amp; drop here</span>
            </div>
          </div>

          {/* Publishing Schedule */}
          <div>
            <h2 className="text-sm font-bold text-gray-900 mb-2">Publishing schedule</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] text-gray-500 mb-1">Date</label>
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2 bg-white border border-gray-200 rounded-xl text-xs text-gray-800 focus:outline-none focus:border-[#00A896]"
                />
              </div>

              <div>
                <label className="block text-[11px] text-gray-500 mb-1">Time</label>
                <input
                  type="text"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3.5 py-2 bg-white border border-gray-200 rounded-xl text-xs text-gray-800 focus:outline-none focus:border-[#00A896]"
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              className="px-5 py-2 bg-white border border-gray-300 text-gray-700 text-xs font-semibold rounded-lg hover:bg-gray-50 shadow-2xs transition-colors"
            >
              Save draft
            </button>
            <button
              type="button"
              onClick={handleSchedule}
              className="px-5 py-2 bg-[#00A896] hover:bg-[#008f80] text-white text-xs font-semibold rounded-lg shadow-2xs transition-colors"
            >
              {isScheduled ? 'Scheduled ✓' : 'Schedule post'}
            </button>
          </div>
        </div>

        {/* Right Preview (4 cols) */}
        <div className="lg:col-span-4 space-y-2">
          <h2 className="text-sm font-bold text-gray-900">Post Preview</h2>
          <p className="text-xs text-gray-500 mb-3">Post previews on each media</p>

          <div className="bg-gray-100/90 rounded-2xl h-[480px] border border-gray-200/60 flex flex-col items-center justify-center text-center p-6 text-gray-400">
            <div className="w-16 h-16 rounded-2xl bg-white/80 border border-gray-200 flex items-center justify-center mb-3 shadow-2xs">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            <span className="text-xs font-medium text-gray-500">See your preview</span>
            <p className="text-[11px] text-gray-400 max-w-xs mt-1">
              Select channels and fill in caption or media to view live rendered card
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
