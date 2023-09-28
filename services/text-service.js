export function extractText(input) {
  const match = input.match(/".*"/s);
  if (match) {
    return match[0].slice(1, -1);
  }
  return null;
}
