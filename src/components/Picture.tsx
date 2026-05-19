type PictureProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
};

const Picture = ({
  src,
  alt,
  width,
  height,
  className,
  loading = 'lazy',
  fetchPriority,
}: PictureProps) => {
  const avifSrc = src.replace(/\.png$/i, '.avif');
  return (
    <picture>
      <source srcSet={avifSrc} type="image/avif" />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        className={className}
      />
    </picture>
  );
};

export default Picture;
