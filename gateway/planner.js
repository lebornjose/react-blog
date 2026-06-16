export function planTask(task) {
  return {
    raw: task,
    steps: [
      "analyze requirement",
      "generate frontend code",
      "write file",
      "return result"
    ]
  };
}
