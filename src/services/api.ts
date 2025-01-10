import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const postRecentTweets = async (data: any) => {
    try {
        const response = await apiClient.post('recent-tweets/', data);
        return response.data;
    } catch (error) {
        console.error('Error posting recent tweets:', error);
        throw error;
    }
};

export const getNumbersStatsGeneral = async () => {
    try {
        const response = await apiClient.get('numbers-stats-general/');
        return response.data;
    } catch (error) {
        console.error('Error getting numbers stats general:', error);
        throw error;
    }
};

export const getInfluencerRank = async () => {
    try {
        const response = await apiClient.get('influencer-rank/');
        return response.data;
    } catch (error) {
        console.error('Error getting influencer rank:', error);
        throw error;
    }
};

export const getTweets = async () => {
    try {
        const response = await apiClient.get('tweets/');
        return response.data;
    } catch (error) {
        console.error('Error getting tweets:', error);
        throw error;
    }
};

export const postInfluencerSave = async (id: any) => {
    try {
        const response = await apiClient.post(`influencer-save/${id}/`);
        return response.data;
    } catch (error) {
        console.error('Error posting influencer save:', error);
        throw error;
    }
};