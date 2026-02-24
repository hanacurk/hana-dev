"use client";

import { useEffect, useState } from "react";

export function AppStoreIcon({
  appId,
  alt,
  className = "h-24 w-24 rounded-[22%] object-cover sm:h-28 sm:w-28",
}: {
  appId: string;
  alt: string;
  className?: string;
}) {
  const [artworkUrl, setArtworkUrl] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/app-artwork?id=${appId}`)
      .then((res) => res.json())
      .then((data: { artworkUrl?: string | null }) => {
        if (cancelled) return;
        if (data.artworkUrl) setArtworkUrl(data.artworkUrl);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [appId]);

  if (!artworkUrl) {
    return (
      <div
        className={`flex shrink-0 items-center justify-center rounded-[22%] bg-[var(--card-border)] ${className}`}
        aria-hidden
      >
        <svg className="h-10 w-10 text-[var(--muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
        </svg>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={artworkUrl}
      alt={alt}
      className={className}
      width={112}
      height={112}
    />
  );
}
