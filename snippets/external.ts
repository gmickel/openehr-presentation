/* eslint-disable no-console */

// #region snippet
// Inside ./snippets/external.ts
export function emptyArray<T>(length: number) {
  return Array.from<T>({ length });
}
// #endregion snippet

export function sayHello() {
  console.log('Hello from snippets/external.ts');
}

export const compositionFetchCode = `
async function fetchComposition(ehrId, compositionId) {
  const response = await fetch(\`/ehr/\${ehrId}/composition/\${compositionId}\`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Prefer': 'return=representation'
    }
  });

  if (!response.ok) {
    throw new Error(\`HTTP error! status: \${response.status}\`);
  }

  const composition = await response.json();
  return composition;
}

// Usage
try {
  const composition = await fetchComposition('123456', '78901');
  console.log(composition);
} catch (error) {
  console.error('Failed to fetch composition:', error);
}
`;
