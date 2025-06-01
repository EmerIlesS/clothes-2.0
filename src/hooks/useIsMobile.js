'use client';

import { useState, useEffect } from 'react';

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Verificar al cargar
        checkDevice();
        
        // Agregar listener para cambios de tamaño
        window.addEventListener('resize', checkDevice);
        
        // Cleanup
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    return isMobile;
};

export const useIsTablet = () => {
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            const width = window.innerWidth;
            setIsTablet(width >= 769 && width <= 1024);
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);
        
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    return isTablet;
};

export const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState('desktop');

    useEffect(() => {
        const getScreenSize = () => {
            const width = window.innerWidth;
            if (width <= 480) return 'mobile';
            if (width <= 768) return 'tablet';
            if (width <= 1024) return 'laptop';
            return 'desktop';
        };

        const updateScreenSize = () => {
            setScreenSize(getScreenSize());
        };

        updateScreenSize();
        window.addEventListener('resize', updateScreenSize);
        
        return () => window.removeEventListener('resize', updateScreenSize);
    }, []);

    return screenSize;
};
