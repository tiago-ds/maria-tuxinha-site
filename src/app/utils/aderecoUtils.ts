export function parseDriveLink(link: string): string {
  const REGEX: RegExp = new RegExp("^https:\/\/drive\.google\.com\/file\/d\/([^\/]+)\/.*$");
  const baseDriveUrl: string = "https://drive.google.com/uc?export=view&id=";

  return `${baseDriveUrl}${link.match(REGEX)?.[1]}`;
}
