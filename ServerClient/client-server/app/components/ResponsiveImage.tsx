import Image from 'next/image';
import { ImageProps } from '../../types/ImageProps'; 

export default function ResponsiveImage({
  alt,
  className = '',
  src,
  width,
  height,
  ...rest
}: ImageProps) {  
  const aspectRatio = (height / width) * 100;
  return (
    // o contêiner pai deve ter 'relative' para que 'fill' funcione corretamente
    <div
      className={`relative ${className}`}
      style={{
        width: '100%',
        paddingTop: `${aspectRatio}%`,
      }}
    >
      <Image        
        fill  // o `fill` faz a imagem se expandir para preencher o contêiner 'relative'      
        style={{ objectFit: 'cover' }} // usa objectFit para controlar como a imagem preenche o espaço
        alt={alt} // acessibilidade: obrigatório!
        src={src}        
        width={width} // as props 'width' e 'height' originais são passadas para otimização do Next.js
        height={height}
        {...rest}
      />
    </div>
  );
}