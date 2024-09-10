'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getUserById, updateUser, User } from '../../../../lib/userService';

export default function EditUser() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [avatar, setAvatar] = useState<string>('');
    const [experience, setExperience] = useState<string>('');
    const router = useRouter();
    const { id } = useParams() as { id: string };

    useEffect(() => {
        const fetchUser = async () => {
            const data = await getUserById(id);
            setName(data.name);
            setEmail(data.email);
            setAvatar(data.avatar || '');
            setExperience(data.experience || '');
        };
        fetchUser();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const userData: Omit<User, 'id'> = {
            name,
            email,
            avatar,
            experience,
        };
        await updateUser(id, userData);
        router.push('/user');
    };

    return (
        <div>
            <h1>Edit User</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Avatar URL"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Experience"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}
