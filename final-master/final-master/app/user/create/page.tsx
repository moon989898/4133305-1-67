'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUser, User } from '../../../lib/userService';

export default function CreateUser() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [avatar, setAvatar] = useState<string>('');
    const [experience, setExperience] = useState<string>('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const userData: Omit<User, 'id'> = {
            name,
            email,
            avatar,
            experience,
            password: 'defaultpassword', // Add other fields as needed
        };
        await createUser(userData);
        router.push('/user'); // Redirect to the users page after creation
    };

    return (
        <div>
            <h1>Create User</h1>
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
                <button type="submit">Create</button>
            </form>
        </div>
    );
}
