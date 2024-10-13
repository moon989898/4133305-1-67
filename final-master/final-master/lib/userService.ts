import axios from 'axios';

const API_URL = 'https://66b9a695fa763ff550f8fa56.mockapi.io/api/v1/user';

export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    experience?: string;
    password?: string;
    createdAt?: string;
}

export const getUsers = async (): Promise<User[]> => {
    const response = await axios.get<User[]>(API_URL);
    return response.data;
};

export const getUserById = async (id: string): Promise<User> => {
    const response = await axios.get<User>(`${API_URL}/${id}`);
    return response.data;
};

export const createUser = async (userData: Omit<User, 'id'>): Promise<User> => {
    const response = await axios.post<User>(API_URL, userData);
    return response.data;
};

export const updateUser = async (id: string, userData: Omit<User, 'id'>): Promise<User> => {
    const response = await axios.put<User>(`${API_URL}/${id}`, userData);
    return response.data;
};

export const deleteUser = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};
