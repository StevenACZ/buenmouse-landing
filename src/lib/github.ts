// Fetches the latest release version from GitHub
// This runs at build time in Astro (SSG)

const GITHUB_REPO = "StevenACZ/BuenMouse";
const FALLBACK_VERSION = "1.2.0";

export interface ReleaseInfo {
  version: string;
  tagName: string;
  releaseUrl: string;
  downloadUrl: string;
  publishedAt: string;
}

export async function getLatestRelease(): Promise<ReleaseInfo> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          // Add User-Agent to avoid rate limiting
          "User-Agent": "BuenMouse-Landing-Page",
        },
      }
    );

    if (!response.ok) {
      console.warn(
        `GitHub API returned ${response.status}, using fallback version`
      );
      return getFallbackRelease();
    }

    const data = await response.json();

    // Extract version from tag (remove 'v' prefix if present)
    const tagName = data.tag_name || `v${FALLBACK_VERSION}`;
    const version = tagName.replace(/^v/, "");

    return {
      version,
      tagName,
      releaseUrl:
        data.html_url || `https://github.com/${GITHUB_REPO}/releases/latest`,
      downloadUrl: `https://github.com/${GITHUB_REPO}/releases/latest`,
      publishedAt: data.published_at || new Date().toISOString(),
    };
  } catch (error) {
    console.warn("Failed to fetch latest release from GitHub:", error);
    return getFallbackRelease();
  }
}

function getFallbackRelease(): ReleaseInfo {
  return {
    version: FALLBACK_VERSION,
    tagName: `v${FALLBACK_VERSION}`,
    releaseUrl: `https://github.com/${GITHUB_REPO}/releases/latest`,
    downloadUrl: `https://github.com/${GITHUB_REPO}/releases/latest`,
    publishedAt: new Date().toISOString(),
  };
}
