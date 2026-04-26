type YouTubeProps = {
  /** Either a video ID (e.g. "dQw4w9WgXcQ") or any YouTube URL. */
  id: string;
  title?: string;
  /** Start playback at N seconds. */
  start?: number;
};

function extractId(input: string): string {
  // Already an ID (11 chars, no slashes/dots)
  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;

  try {
    const url = new URL(input);
    if (url.hostname === "youtu.be") {
      return url.pathname.slice(1);
    }
    if (url.hostname.endsWith("youtube.com")) {
      const v = url.searchParams.get("v");
      if (v) return v;
      // /embed/<id> or /shorts/<id>
      const parts = url.pathname.split("/").filter(Boolean);
      if (parts[0] === "embed" || parts[0] === "shorts") return parts[1];
    }
  } catch {
    // fall through
  }
  return input;
}

export function YouTube({ id, title, start }: YouTubeProps) {
  const videoId = extractId(id);
  const params = new URLSearchParams();
  if (start) params.set("start", String(start));
  const query = params.toString() ? `?${params.toString()}` : "";

  return (
    <div className="not-prose my-10 relative aspect-video rounded-lg overflow-hidden border border-border bg-black">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}${query}`}
        title={title ?? "YouTube video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
