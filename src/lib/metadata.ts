export function generateCanonicalUrl(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.elfedge.com';
  return `${baseUrl}${path}`;
}
