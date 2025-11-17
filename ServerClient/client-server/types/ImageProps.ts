
import { ImageProps } from 'next/image';

export interface ImageProps
  // TypeScript usa o Omit (um Utility Type) para criar uma nova interface (ResponsiveImageProps) 
  // a partir da interface padrão do Next.js (ImageProps), removendo quatro propriedades: alt, layout, fill e style.
  // Omit<...>: Diz ao TypeScript para herdar todas as propriedades de ImageProps exceto aquelas listadas.
  extends Omit<ImageProps, 'alt' | 'layout' | 'fill' | 'style'> {
  
  //  texto alternativo para acessibilidade. **OBRIGATÓRIO** para WCAG.   
  alt: string;
  
  // classes tailwind para estilização do contêiner (ex: width, margin, border-radius) - opcional.   
  className?: string;
  
  // largura intrínseca da imagem original.   
  width: number;
  
  // altura intrínseca da imagem original.   
  height: number;
}

