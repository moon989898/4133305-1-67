'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getUsers, deleteUser, User } from '../../lib/userService';

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getUsers();
            setUsers(data);
        };
        fetchUsers();
    }, []);

    const handleDelete = async (id: string) => {
        await deleteUser(id);
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div>
            <h1>Users</h1>
            <Link href="/user/create">Create New User</Link>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                        <Link href={`/user/edit/${user.id}`}>Edit</Link>
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
