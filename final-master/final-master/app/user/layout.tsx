import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div>
            <header>
                <h1>My CRUD App</h1>
            </header>
            <main>{children}</main>
            <footer>
                <p>© 2024 My CRUD App</p>
            </footer>
        </div>
    );
}
