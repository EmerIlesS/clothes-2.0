'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '../../context/cartContext';
import { useIsMobile } from '../../hooks/useIsMobile';
import '../../styles/cart.css';

const CartPage = () => {
    const { cartItems, removeFromCart, updateQuantity } = useCart();
    const isMobile = useIsMobile();

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.precio * item.quantity), 0);
    };    return (
        <main className={`cart-container ${isMobile ? 'mobile-layout' : ''}`} role="main">
            <h1>Carrito de Compras</h1>
            {cartItems.length === 0 ? (
                <div className="empty-cart" role="alert">
                    <p>Tu carrito está vacío</p>
                    {isMobile && (
                        <p className="mobile-hint">¡Explora nuestros productos y encuentra algo increíble!</p>
                    )}
                </div>
            ) : (
                <section aria-label="Productos en el carrito">
                    <div className="cart-items">
                        {cartItems.map(item => (
                            <article key={item.id} className={`cart-item ${isMobile ? 'mobile-item' : ''}`}>
                                <div className="cart-item-image">
                                    <Image
                                        src={item.imagen}
                                        alt={`Imagen de ${item.nombre}`}
                                        width={isMobile ? 80 : 100}
                                        height={isMobile ? 80 : 100}
                                        priority={false}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="cart-item-details">
                                    <h2>{item.nombre}</h2>
                                    <p aria-label={`Precio: ${item.precio.toLocaleString('es-CO')} pesos`}>
                                        Precio: ${item.precio.toLocaleString('es-CO')}
                                    </p>
                                    <div className="quantity-controls" role="group" aria-label="Control de cantidad">
                                        <button 
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            aria-label="Disminuir cantidad"
                                            className={isMobile ? 'mobile-control-btn' : ''}
                                        >-</button>
                                        <span aria-label={`Cantidad: ${item.quantity}`}>{item.quantity}</span>
                                        <button 
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            aria-label="Aumentar cantidad"
                                            className={isMobile ? 'mobile-control-btn' : ''}
                                        >+</button>
                                    </div>
                                    <button 
                                        className={`remove-button ${isMobile ? 'mobile-remove-btn' : ''}`}
                                        onClick={() => removeFromCart(item.id)}
                                        aria-label={`Eliminar ${item.nombre} del carrito`}
                                    >
                                        {isMobile ? '🗑️ Eliminar' : 'Eliminar'}
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className={`cart-total ${isMobile ? 'mobile-total' : ''}`} role="contentinfo">
                        <h2>Total: ${calculateTotal().toLocaleString('es-CO')}</h2>
                        {isMobile && (
                            <div className="mobile-checkout-section">
                                <button className="mobile-checkout-btn" aria-label="Proceder al pago">
                                    💳 Proceder al Pago
                                </button>
                            </div>
                        )}
                    </div>
                </section>
            )}
        </main>
    );
};

export default CartPage;
