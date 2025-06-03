'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import '../../styles/perfil.css';

export default function ProfilePage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === 'loading') {
        return <div className="loading">Cargando...</div>;
    }

    if (status === 'unauthenticated') {
        router.push('/login');
        return null;
    }

    const user = session?.user;

    return (
        <div className="profile-container">
            <div className="profile-card">
                <h1 className="perfil-title">Mi Perfil</h1>
                <div className="profile-info">
                    <div className="profile-field">
                        <label>Nombre:</label>
                        <p>{user?.name || 'No especificado'}</p>
                    </div>
                    <div className="profile-field">
                        <label>Email:</label>
                        <p>{user?.email}</p>
                    </div>
                </div>
                <button onClick={() => signOut({ callbackUrl: '/login' })} className="logout-button">
                    Cerrar Sesión
                </button>
            </div>
        </div>
    );
} 