import express from "express";
import cors from "cors";
import { planTask } from "./planner.js";
import { guard } from "./guard.js";
import { executeTask } from "./executor.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/ai/run", async (req, res) => {
  try {
    const { task } = req.body;

    const plan = planTask(task);

    guard(plan);

    const result = await executeTask(plan);

    res.json({
      success: true,
      plan,
      result
    });
  } catch (e) {
    res.json({
      success: false,
      error: e.message
    });
  }
});

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`AI Gateway running on http://localhost:${port}`);
});
