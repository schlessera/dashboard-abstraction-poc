import React, { useEffect } from 'react';
import { RemoteDataWidget } from './RemoteDataWidget';
import { RemoteDataProvider } from '../../services/RemoteDataProvider';

interface DoggoWidgetProps {
  id: string;
  title?: string;
  onRemove?: (id: string) => void;
  width?: number;
  height?: number;
}

interface DogApiResponse {
  message: string;  // URL to the dog image
  status: string;
}

// Separate component to handle image loading
const DogImage: React.FC<{ 
  src: string; 
  height: number;
}> = ({ src, height }) => {
  const [isImageLoading, setIsImageLoading] = React.useState(true);

  useEffect(() => {
    setIsImageLoading(true);
    const img = new Image();
    img.onload = () => {
      setIsImageLoading(false);
    };
    img.src = src;

    return () => {
      img.onload = null;
    };
  }, [src]);

  return (
    <div 
      style={{ 
        minHeight: height,
        height: height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {isImageLoading ? (
        <div>Loading image...</div>
      ) : (
        <img 
          src={src} 
          alt="Random dog" 
          style={{ 
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            position: 'absolute',
            margin: 'auto',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: '4px'
          }} 
        />
      )}
    </div>
  );
};

export const DoggoWidget: React.FC<DoggoWidgetProps> = ({
  id,
  title = 'Random Doggo',
  onRemove,
  width = 300,
  height = 200,
}) => {
  const remoteDataProvider = new RemoteDataProvider({
    endpoint: 'https://dog.ceo/api/breeds/image/random',
    type: 'json'
  });

  return (
    <RemoteDataWidget
      id={id}
      title={title}
      onRemove={onRemove}
      remoteDataProvider={remoteDataProvider}
      cacheKey={`doggo-${id}`}  // Cache each widget's data separately
      cacheTTL={30 * 60 * 1000}  // 30 minutes cache
      renderData={(data: DogApiResponse) => (
        <DogImage src={data.message} height={height} />
      )}
    />
  );
}; 