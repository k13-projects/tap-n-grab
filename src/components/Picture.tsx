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
  // React 18 only maps the lowercase `fetchpriority` attribute to the DOM;
  // the camelCase prop triggers an "unknown prop" warning.
  const priorityAttr = (fetchPriority ? { fetchpriority: fetchPriority } : {}) as Record<string, string>;
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
        className={className}
        {...priorityAttr}
      />
    </picture>
  );
};

export default Picture;
