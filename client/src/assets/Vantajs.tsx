// // Vanitas.tsx
// import React, { forwardRef, useEffect, useRef } from 'react';
// import topology from 'vanta/dist/vanta.topology.min';
// import '../css/vanitas.css';

// declare global {
//   interface Window {
//     THREE: any;
//   }
// }

// type VanitasProps = {
//   children?: React.ReactNode;
// };

// const Vanitas = forwardRef<HTMLDivElement, VanitasProps>(({ children }, ref) => {
//   const vantaRef = useRef<HTMLDivElement>(null);
//   const effect = useRef<any>(null);

//   useEffect(() => {
//     const loadScript = (src: string) => {
//       return new Promise((resolve, reject) => {
//         const script = document.createElement('script');
//         script.src = src;
//         script.async = true;
//         script.onload = resolve;
//         script.onerror = reject;
//         document.head.appendChild(script);
//       });
//     };

//     const initializeVanta = async () => {
//       try {
//         // 1. Load required libraries
//         await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js');
//         await loadScript('https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js');

//         // 2. Initialize Vanta after libraries are loaded
//         if (vantaRef.current) {
//           effect.current = topology({
//             el: vantaRef.current,
//             THREE: window.THREE,
//             mouseControls: true,
//             touchControls: true,
//             gyroControls: false,
//             minHeight: 200.00,
//             minWidth: 200.00,
//             scale: 1.00,
//             scaleMobile: 1.00,
//             color: 0x3f51b5,
//             backgroundColor: 0x0
//           });
//         }
//       } catch (error) {
//         console.error('Failed to load Vanta.js:', error);
//       }
//     };

//     initializeVanta();

//     // 3. Cleanup
//     return () => {
//       if (effect.current) {
//         effect.current.destroy();
//       }
//     };
//   }, []);

//   return (
//     <div 
//       ref={vantaRef} 
//       className="vanta-container"
//     >
//       {children}
//     </div>
//   );
// });

// export default Vanitas;