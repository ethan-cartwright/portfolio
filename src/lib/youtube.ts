/** Extract the 11-char YouTube video ID from a URL or pass-through if already an ID. */
export function extractYouTubeId(input: string): string | null {
  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;
  try {
    const url = new URL(input);
    if (url.hostname === "youtu.be") {
      return url.pathname.slice(1) || null;
    }
    if (url.hostname.endsWith("youtube.com")) {
      const v = url.searchParams.get("v");
      if (v) return v;
      const parts = url.pathname.split("/").filter(Boolean);
      if (parts[0] === "embed" || parts[0] === "shorts") return parts[1] ?? null;
    }
  } catch {
    // not a URL
  }
  return null;
}

export function youtubeThumbnail(idOrUrl: string): string | null {
  const id = extractYouTubeId(idOrUrl);
  return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : null;
}
