const MAX_IMAGE_BYTES = 4 * 1024 * 1024;

export function detectImageMime(buffer: Buffer): string | null {
  if (buffer.length < 12 || buffer.length > MAX_IMAGE_BYTES) return null;

  if (buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) return "image/jpeg";
  if (
    buffer[0] === 0x89 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x4e &&
    buffer[3] === 0x47
  ) {
    return "image/png";
  }

  const gif = buffer.subarray(0, 6).toString("ascii");
  if (gif === "GIF87a" || gif === "GIF89a") return "image/gif";

  if (
    buffer.subarray(0, 4).toString("ascii") === "RIFF" &&
    buffer.subarray(8, 12).toString("ascii") === "WEBP"
  ) {
    return "image/webp";
  }

  return null;
}

export function safeImageName(name: string) {
  const base = name.split(/[/\\]/).pop()?.replace(/[^\w.\- ]+/g, "") ?? "photo";
  return base.slice(0, 120) || "photo";
}
