import Image from 'next/image';
import { ResponsiveImageProps } from '../../types/ImageProps'; 
type RestProps = Omit<ResponsiveImageProps, 'src' | 'alt' | 'width' | 'height' | 'className'>;
export default function ResponsiveImage({
  alt,
  className = '', 
  src,
  width,
  height,
  ...rest 
}: ResponsiveImageProps) {   
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
        {...rest as RestProps} // Type Assertion para garantir que 'rest' não contenha width/height/src/alt
      />
    </div>
  );
}


