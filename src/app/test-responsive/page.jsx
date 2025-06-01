'use client';

import React from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';

const TestResponsivePage = () => {
    const isMobile = useIsMobile();

    return (
        <main className="test-responsive-container" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>
                Prueba de Diseño Responsivo
            </h1>
            
            <div style={{ 
                background: 'white', 
                padding: '1.5rem', 
                borderRadius: '8px', 
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                marginBottom: '2rem'
            }}>
                <h2>Estado Actual del Dispositivo</h2>
                <p><strong>Es dispositivo móvil:</strong> {isMobile ? '✅ SÍ' : '❌ NO'}</p>
                <p><strong>Ancho de ventana:</strong> {typeof window !== 'undefined' ? window.innerWidth : 'N/A'}px</p>
                <p><strong>Alto de ventana:</strong> {typeof window !== 'undefined' ? window.innerHeight : 'N/A'}px</p>
            </div>

            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '1rem',
                marginBottom: '2rem'
            }}>
                <div style={{
                    background: '#007bff',
                    color: 'white',
                    padding: '1rem',
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <h3>Componente 1</h3>
                    <p>Grid responsivo funcionando</p>
                </div>
                <div style={{
                    background: '#28a745',
                    color: 'white',
                    padding: '1rem',
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <h3>Componente 2</h3>
                    <p>Adaptándose al dispositivo</p>
                </div>
                <div style={{
                    background: '#dc3545',
                    color: 'white',
                    padding: '1rem',
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <h3>Componente 3</h3>
                    <p>Hook useIsMobile activo</p>
                </div>
            </div>

            <div style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
                <h2>Botones Touch-Friendly</h2>
                <div style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: '1rem',
                    marginTop: '1rem'
                }}>
                    <button style={{
                        minHeight: '50px',
                        padding: '1rem 2rem',
                        background: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        cursor: 'pointer'
                    }}>
                        Botón Primario
                    </button>
                    <button style={{
                        minHeight: '50px',
                        padding: '1rem 2rem',
                        background: '#6c757d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        cursor: 'pointer'
                    }}>
                        Botón Secundario
                    </button>
                </div>
            </div>

            <div style={{
                marginTop: '2rem',
                padding: '1rem',
                background: isMobile ? '#e8f5e8' : '#f8f9fa',
                borderRadius: '8px',
                textAlign: 'center'
            }}>
                <p><strong>Estado:</strong> {isMobile ? 'Vista móvil activa' : 'Vista desktop activa'}</p>
                <p><em>Cambia el tamaño de la ventana para probar la responsividad</em></p>
            </div>
        </main>
    );
};

export default TestResponsivePage;
