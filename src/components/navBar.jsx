'use client';

import React,{useState} from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useCart } from '../context/cartContext';
import '../styles/navbar.css';

const NavBar = () => {
    const { data: session } = useSession();
    const { cartItems } = useCart();
    const cartItemsCount = cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="navbar" role="navigation" aria-label="Navegación principal">
            <div className="navbar-container">
                <Link href="/" className="navbar-logo" aria-label="Ir a inicio">
                    Clothing Store
                </Link>
                
                <button 
                    className="mobile-menu-toggle"
                    onClick={toggleMobileMenu}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="navbar-menu"
                    aria-label="Alternar menú de navegación"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                <div 
                    id="navbar-menu"
                    className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}
                >
                    <div className="navbar-links">
                        <Link href="/" className="navbar-link" aria-current="page" aria-label='Ir a inicio' onClick={closeMobileMenu}>
                            Inicio
                        </Link>
                        <Link href="/productos" className="navbar-link" aria-label="Ir a productos" onClick={closeMobileMenu}>
                            Productos
                        </Link>
                        <Link href="/carrito" className="navbar-link" aria-label={`Carrito de compras, ${cartItemsCount} artículos`} onClick={closeMobileMenu}>
                            Carrito ({cartItemsCount})
                        </Link>
                        <Link href="/contacto" className="navbar-link" aria-label='Ir a contacto' onClick={closeMobileMenu}>
                            Contacto
                        </Link>
                    </div>
                    <div className="navbar-actions">
                        {session ? (
                            <>
                                <Link href="/perfil" className="navbar-link" aria-label='Ir a perfil' onClick={closeMobileMenu}>
                                    Mi Perfil
                                </Link>
                                <button 
                                    onClick={() => {
                                        signOut();
                                        closeMobileMenu();
                                    }} 
                                    className="navbar-button"
                                    aria-label='Cerrar sesión'
                                >
                                    Cerrar Sesión
                                </button>
                            </>                        ) : (
                            <Link href="/login" className="navbar-link" aria-label='Iniciar sesión' onClick={closeMobileMenu}>
                                Iniciar Sesión
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;