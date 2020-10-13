import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer SoE9G1cwfMZw7y3NuiMfWnrPfCDgqGcwdmI7eCaA35EuLG24IinIMAbo5ViW8kM9WZVUlQqnvDyROtZhxyDrAVnns8R4k8YmuqvfhTn6R-YhEZY0z4HvmuZl_iSGX3Yx'
  }
});