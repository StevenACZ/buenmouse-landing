const FALLBACK_VERSION = "v2.1.0";
const RELEASE_API =
  "https://api.github.com/repos/StevenACZ/BuenMouse/releases/latest";

export async function fetchLatestVersion(): Promise<string> {
  try {
    const response = await fetch(RELEASE_API, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "BuenMouse-Landing",
      },
    });
    if (!response.ok) return FALLBACK_VERSION;
    const data = (await response.json()) as { tag_name?: string };
    return data.tag_name ?? FALLBACK_VERSION;
  } catch {
    return FALLBACK_VERSION;
  }
}
