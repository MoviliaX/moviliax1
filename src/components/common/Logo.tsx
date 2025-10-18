import Image from 'next/image';

const dimensions = sizeMap[size];

return (
  <div className={`flex items-center ${className}`}>
    <Image 
      src={variant === 'light' ? '/logo-light.svg' : '/logo-dark.svg'}
      alt="MoviliaX"
      width={dimensions.width}
      height={dimensions.height}
      priority
    />
    {/* ...resto del markup */}
  </div>
);
