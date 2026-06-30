export function getGeminiAiIconMarkup(idPrefix: string, className = 'gemini-ai-logo') {
  const gradientId = `${idPrefix}GeminiAiGradient`;

  return `<svg class="${className}" viewBox="0 0 64 64" role="img" aria-label="Gemini AI logo"><defs><linearGradient id="${gradientId}" x1="9" y1="55" x2="55" y2="9" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4285f4"/><stop offset="0.33" stop-color="#a142f4"/><stop offset="0.66" stop-color="#ea4335"/><stop offset="1" stop-color="#fbbc04"/></linearGradient></defs><path fill="url(#${gradientId})" d="M32 4c2.9 15.3 12.7 25.1 28 28-15.3 2.9-25.1 12.7-28 28C29.1 44.7 19.3 34.9 4 32 19.3 29.1 29.1 19.3 32 4Z"/></svg>`;
}
