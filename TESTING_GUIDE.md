# 🧪 Guía de Pruebas - Diseño Responsivo Clothing Store

## 🚀 Cómo probar las optimizaciones responsivas

### 1. **Iniciar el proyecto**
```bash
cd "c:\Users\ilese\Documents\Frond-End\proyecto final\clothes-2.0"
npm run dev
```

### 2. **URLs para probar**

#### **Página Principal**
- URL: `http://localhost:3000`
- ✅ Probar: Hero banner, grid de categorías, navegación móvil

#### **Productos**
- URL: `http://localhost:3000/productos`
- ✅ Probar: Grid responsivo, filtros móviles, cards touch-friendly

#### **Carrito**
- URL: `http://localhost:3000/carrito`
- ✅ Probar: Layout móvil, botones touch, checkout optimizado

#### **Página de Pruebas** 📱
- URL: `http://localhost:3000/test-responsive`
- ✅ Probar: Hook useIsMobile en tiempo real, componentes adaptativos

### 3. **Pruebas de Responsividad** 📐

#### **En el Navegador:**
1. Abrir DevTools (F12)
2. Activar modo dispositivo móvil (Ctrl + Shift + M)
3. Probar diferentes tamaños:
   - iPhone SE (375px)
   - iPhone 12 Pro (390px)
   - iPad (768px)
   - Desktop (1200px+)

#### **Elementos a verificar:**
- ✅ **NavBar:** Menú hamburguesa aparece < 768px
- ✅ **Grid layouts:** Se adaptan automáticamente
- ✅ **Botones:** Mínimo 44px de altura en móviles
- ✅ **Tipografía:** Tamaños apropiados por dispositivo
- ✅ **Imágenes:** Se ajustan sin distorsión

### 4. **Puntos de Ruptura (Breakpoints)** 📊

```css
/* Mobile First */
@media (max-width: 480px) { /* Móviles pequeños */ }
@media (max-width: 768px) { /* Tablets y móviles */ }
@media (min-width: 769px) { /* Desktop */ }
```

### 5. **Funcionalidades Touch específicas** 👆

#### **Probar en dispositivos táctiles:**
- Botones tienen área mínima de 44px
- Hover effects deshabilitados automáticamente
- Gestos de swipe funcionan correctamente
- Zoom está controlado apropiadamente

### 6. **Hook useIsMobile - Testing** 🔧

```javascript
// El hook detecta automáticamente:
// isMobile = true cuando window.innerWidth <= 768px
// isMobile = false cuando window.innerWidth > 768px

// Prueba cambiando el tamaño de ventana y observa:
// - Cambios en layout
// - Aparición/desaparición de elementos móviles
// - Diferentes tamaños de imágenes y botones
```

### 7. **Checklist de Validación** ✅

#### **NavBar:**
- [ ] Menú hamburguesa visible en móvil
- [ ] Overlay funciona correctamente
- [ ] Links cierran el menú automáticamente

#### **Carrito:**
- [ ] Layout stack en móvil
- [ ] Botones +/- son touch-friendly
- [ ] Checkout button está optimizado
- [ ] Imágenes se cargan con lazy loading

#### **Productos:**
- [ ] Grid se adapta al tamaño de pantalla
- [ ] Cards mantienen proporciones
- [ ] Filtros son accesibles en móvil

#### **General:**
- [ ] Texto es legible en todos los tamaños
- [ ] No hay overflow horizontal
- [ ] Performance es fluida
- [ ] Accesibilidad mantiene estándares

### 8. **Resolución de Problemas** 🔧

#### **Si el menú móvil no aparece:**
1. Verificar que el hook useIsMobile esté importado
2. Comprobar breakpoint CSS (768px)
3. Verificar JavaScript está habilitado

#### **Si los estilos no se aplican:**
1. Verificar que los archivos CSS estén importados
2. Comprobar order de media queries
3. Verificar especificidad CSS

#### **Si hay problemas de rendimiento:**
1. Verificar lazy loading en imágenes
2. Comprobar que no hay re-renders innecesarios
3. Verificar debounce en useIsMobile hook

### 9. **Comandos útiles** 🛠️

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Análisis de bundle
npm run analyze

# Linting
npm run lint
```

### 10. **Métricas de éxito** 📈

#### **Performance:**
- Tiempo de carga < 3 segundos
- First Contentful Paint < 1.5s
- Cumulative Layout Shift < 0.1

#### **Usabilidad:**
- Elementos touch mínimo 44px
- Texto legible sin zoom
- Navegación intuitiva en móvil

#### **Accesibilidad:**
- Score Lighthouse > 95
- Compatible con lectores de pantalla
- Navegación por teclado funcional

---

**✨ ¡Felicidades! Tu tienda online ahora es completamente responsiva y mobile-friendly.**
