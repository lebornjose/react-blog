export function guard(plan) {
  const text = JSON.stringify(plan);

  const forbidden = [
    "rm -rf",
    "process.exit",
    "fetch(",
    "document.",
    "window.localStorage.setItem"
  ];

  for (const f of forbidden) {
    if (text.includes(f)) {
      throw new Error("Blocked by Harness: " + f);
    }
  }

  return true;
}
