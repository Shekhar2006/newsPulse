import cron from "node-cron";
import { runNewsletterJob } from "./newsletter.job.js";

export const startCronJobs = () => {
    cron.schedule("0 8 * * *", async () => {
    await runNewsletterJob("daily");
});

};