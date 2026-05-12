'use client';

import { useState } from 'react';

type Props = {
  src: string;
  alt: string;
  fallback: string;
  className?: string;
};

/**
 * Client-side <img> dengan fallback otomatis ketika source utama gagal load.
 * Dipakai untuk asset yang belum tersedia di /public.
 */
export const ImageWithFallback = ({ src, alt, fallback, className }: Props) => {
  const [current, setCurrent] = useState(src);
  return (
    <img
      src={current}
      alt={alt}
      className={className}
      onError={() => {
        if (current !== fallback) setCurrent(fallback);
      }}
    />
  );
};
