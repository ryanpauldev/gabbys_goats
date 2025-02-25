"use client";

import { useState } from 'react';

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
}

export default function YouTubeFacade({ videoId, title }: YouTubeFacadeProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (isPlaying) {
    return (
      <div
        className="relative w-full rounded-lg shadow-lg overflow-hidden"
        style={{ paddingBottom: '56.25%', height: 0 }}
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  return (
    <button
      onClick={() => setIsPlaying(true)}
      className="relative w-full rounded-lg shadow-lg overflow-hidden group"
      style={{ paddingBottom: '56.25%', height: 0 }}
      aria-label="Play video"
    >
      <img
        src={thumbnailUrl}
        alt={title}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}