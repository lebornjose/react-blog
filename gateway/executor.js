import fs from "fs";

export async function executeTask(plan) {
  const code = `
export function aiGeneratedComponent() {
  return "Hello from AI Harness 🚀";
}
`;

  fs.writeFileSync("../frontend/src/generated.ts", code);

  return {
    file: "src/generated.ts",
    message: "AI wrote file successfully"
  };
}
