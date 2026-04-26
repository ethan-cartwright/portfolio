import { extractYouTubeId } from "@/lib/youtube";

type YouTubeProps = {
  /** Either a video ID (e.g. "dQw4w9WgXcQ") or any YouTube URL. */
  id: string;
  title?: string;
  /** Start playback at N seconds. */
  start?: number;
};

export function YouTube({ id, title, start }: YouTubeProps) {
  const videoId = extractYouTubeId(id) ?? id;
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
