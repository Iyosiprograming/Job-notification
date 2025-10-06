import cronjob from 'node-cron';
import jobModel from '../model/jobModel';

// Function to fetch jobs from RemoteOK API
export const fetchJobs = async () => {
    try {
        const response = await fetch('https://remoteok.io/api');
        const data = await response.json();
        jobModel.insertMany(data, { ordered: false }).catch(err => {
            if (err.code !== 11000) { // Ignore duplicate key errors
                console.error('Error inserting jobs:', err);
            }
        });
        return data;
    } catch (error) {
        console.error('Error fetching jobs:', error);
        return [];
    }
};

// Schedule job fetching every hour
cronjob.schedule('0 * * * *', () => {
    console.log('Fetching jobs from RemoteOK...');
    fetchJobs();
});
