export function getImageUrl(
  mediaId: number,
  width: number,
  height: number,
): string {
  const baseUrl = "https://mirabi.app/pub/image";
  return `${baseUrl}/${mediaId}/${width}x${height}`;
}
