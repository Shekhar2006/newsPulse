import "dotenv/config";
import app from "./app.js";
import { startCronJobs } from "./jobs/cron.js";


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
    startCronJobs();
});

