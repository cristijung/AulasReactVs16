// src/components/ResponsiveImage.tsx (Versão Genérica Corrigida)

import Image from 'next/image';
import { ResponsiveImageProps } from '../../types/ImageProps'; 
//import { ImageProps as NextImageProps } from 'next/image'; 

// Omitimos width/height da tipagem do rest, pois não podem ir para o <Image>
type RestProps = Omit<ResponsiveImageProps, 'src' | 'alt' | 'width' | 'height' | 'className'>;

export default function ResponsiveImage({
  alt,
  className = '', 
  src,
  width,
  height,
  ...rest // 'rest' contém props opcionais como 'priority'
}: ResponsiveImageProps) { 
  
  // Cálculo do aspect ratio (necessita de width/height)
  const aspectRatio = (height / width) * 100;

  return (
    <div
      className={`relative ${className}`}
      style={{
        width: '100%',
        paddingTop: `${aspectRatio}%`, 
      }}
    >
      <Image        
        fill 
        style={{ objectFit: 'cover' }}
        alt={alt} 
        src={src}
        // 🛑 REMOVIDO: width={width} e height={height} não devem ser passados com 'fill'
        {...rest as RestProps} // Type Assertion para garantir que 'rest' não contenha width/height/src/alt
      />
    </div>
  );
}