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
    <div style={{ 
      minHeight: height,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {isImageLoading ? (
        <div>Loading image...</div>
      ) : (
        <img 
          src={src} 
          alt="Random dog" 
          style={{ 
            width: '100%', 
            height: 'auto',
            borderRadius: '4px',
            maxHeight: height,
            objectFit: 'cover'
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