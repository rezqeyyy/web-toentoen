// src/components/cmo/CmoPostView.tsx
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { CMO_POST_CARDS, CmoPostCard } from '@/constants/cmoData';

export const CmoPostView: React.FC = () => {
  const [selectedChannel, setSelectedChannel] = useState<string>('All');
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);
  const [selectedSortOptions, setSelectedSortOptions] = useState<string[]>(['Like']);
  const sortRef = useRef<HTMLDivElement>(null);

  const channels = ['All', 'Tiktok', 'Facebook', 'Instagram', 'Linkedin'];
  const sortOptions = ['Like', 'Comment', 'Repost', 'Save/Bookmark'];

  // Tutup dropdown jika klik di luar
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSortOption = (opt: string) => {
    setSelectedSortOptions((prev) =>
      prev.includes(opt) ? prev.filter((item) => item !== opt) : [...prev, opt]
    );
  };

  const handleSelectAllSort = () => {
    if (selectedSortOptions.length === sortOptions.length) {
      setSelectedSortOptions([]);
    } else {
      setSelectedSortOptions([...sortOptions]);
    }
  };

  // Filter posts berdasarkan channel
  const filteredPosts = CMO_POST_CARDS.filter((post) => {
    if (selectedChannel === 'All') return true;
    return post.channel.toLowerCase() === selectedChannel.toLowerCase();
  });

  // Sort posts berdasarkan metrik yang dipilih
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (selectedSortOptions.includes('Like') && b.likes !== a.likes) {
      return b.likes - a.likes;
    }
    if (selectedSortOptions.includes('Comment') && b.comments !== a.comments) {
      return b.comments - a.comments;
    }
    if (selectedSortOptions.includes('Repost') && b.reposts !== a.reposts) {
      return b.reposts - a.reposts;
    }
    if (selectedSortOptions.includes('Save/Bookmark') && b.bookmarks !== a.bookmarks) {
      return b.bookmarks - a.bookmarks;
    }
    return 0;
  });

  const getChannelIcon = (channel: string) => {
    switch (channel.toLowerCase()) {
      case 'tiktok':
        return (
          <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.882 2.881 2.896 2.896 0 0 1-2.881-2.881 2.896 2.896 0 0 1 2.881-2.882c.42 0 .816.09 1.173.25V9.452a6.33 6.33 0 0 0-1.173-.109A6.334 6.334 0 0 0 3.14 15.672a6.334 6.334 0 0 0 6.333 6.333 6.334 6.334 0 0 0 6.333-6.333V9.014c1.332.951 2.946 1.517 4.697 1.549V7.127a4.78 4.78 0 0 1-.914-.441z" />
          </svg>
        );
      case 'instagram':
        return (
          <svg className="w-4 h-4 text-pink-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      case 'facebook':
        return (
          <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.679 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg className="w-4 h-4 text-blue-700" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-5">
      {/* Title */}
      <h2 className="text-xl font-bold text-gray-900">Post</h2>

      {/* Filter and Sort Bar */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Sort Popover Dropdown */}
        <div className="flex items-center gap-2 relative" ref={sortRef}>
          <span className="text-xs font-semibold text-gray-600">Sort</span>
          <button
            type="button"
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50 shadow-xs"
          >
            <span>Sort by...</span>
            <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Popover Menu */}
          {isSortOpen && (
            <div className="absolute top-full left-10 mt-1.5 w-48 bg-white border border-gray-200 rounded-xl shadow-lg p-3 z-30 space-y-2.5">
              <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                <span className="text-xs font-bold text-gray-900">Sort</span>
                <button
                  type="button"
                  onClick={handleSelectAllSort}
                  className="text-xs font-semibold text-[#00A896] hover:underline"
                >
                  Pilih Semua
                </button>
              </div>

              <div className="space-y-1.5">
                {sortOptions.map((opt) => (
                  <label
                    key={opt}
                    onClick={() => toggleSortOption(opt)}
                    className="flex items-center gap-2 text-xs text-gray-700 hover:bg-gray-50 p-1 rounded cursor-pointer select-none"
                  >
                    <input
                      type="checkbox"
                      checked={selectedSortOptions.includes(opt)}
                      onChange={() => {}}
                      className="rounded border-gray-300 text-[#00A896] focus:ring-[#00A896]"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Channel Pills */}
        <div className="flex items-center gap-2 flex-wrap">
          {channels.map((chan) => (
            <button
              key={chan}
              type="button"
              onClick={() => setSelectedChannel(chan)}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedChannel === chan
                  ? 'bg-[#00A896] text-white shadow-xs'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {chan}
            </button>
          ))}
        </div>
      </div>

      {/* 3x2 Grid Post Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sortedPosts.map((post: CmoPostCard) => (
          <div
            key={post.id}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            {/* Card Body */}
            <div className="p-3.5 flex gap-3">
              {/* Thumbnail Image */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-lg overflow-hidden bg-gray-100 border border-gray-100">
                <img
                  src={post.image}
                  alt="Post thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text & Header */}
              <div className="flex-1 min-w-0 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-600 shrink-0">
                      T
                    </span>
                    <span className="text-xs font-bold text-gray-900 truncate">
                      {post.accountName}
                    </span>
                  </div>
                  <div className="shrink-0">
                    {getChannelIcon(post.channel)}
                  </div>
                </div>

                <p className="text-[11px] text-gray-600 line-clamp-4 leading-relaxed">
                  {post.caption}
                </p>
              </div>
            </div>

            {/* Card Footer with Counters & CTA */}
            <div className="border-t border-gray-100 px-3.5 py-2.5 bg-gray-50/50 flex items-center justify-between gap-2">
              {/* Counters */}
              <div className="flex items-center gap-2.5 text-[11px] text-gray-600">
                {/* Like */}
                <div className="flex items-center gap-1" title="Likes">
                  <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  <span>{post.likes}</span>
                </div>

                {/* Comment */}
                <div className="flex items-center gap-1" title="Comments">
                  <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>{post.comments}</span>
                </div>

                {/* View */}
                <div className="flex items-center gap-1" title="Views">
                  <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>{post.views}</span>
                </div>

                {/* Repost */}
                <div className="flex items-center gap-1" title="Reposts">
                  <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>{post.reposts}</span>
                </div>

                {/* Bookmark */}
                <div className="flex items-center gap-1" title="Bookmarks">
                  <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  <span>{post.bookmarks}</span>
                </div>
              </div>

              {/* CTA Go to post */}
              <button
                type="button"
                className="flex items-center gap-1 px-2.5 py-1 bg-[#00A896] hover:bg-[#008f80] text-white text-[11px] font-semibold rounded-lg shadow-xs transition-colors shrink-0"
              >
                <span>Go to post</span>
                <span className="font-bold leading-none">&#8629;</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
