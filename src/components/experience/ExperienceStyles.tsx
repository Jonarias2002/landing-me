'use client'

export function ExperienceStyles() {
  return (
    <style jsx>{`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes bounceIn {
        0% {
          opacity: 0;
          transform: scale(0.3);
        }
        50% {
          opacity: 1;
          transform: scale(1.05);
        }
        70% {
          transform: scale(0.9);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }
      
      /* Efectos de hover para badges */
      .mantine-Badge-root:hover {
        transform: scale(1.05) !important;
        box-shadow: 0 4px 12px rgba(51, 154, 240, 0.3) !important;
      }
      
      /* Cursor pointer para tarjetas clickeables */
      .mantine-Paper-root[style*="cursor: pointer"]:hover {
        transform: translateY(-8px) !important;
        box-shadow: 0 25px 50px rgba(51, 154, 240, 0.2) !important;
      }
    `}</style>
  )
}
