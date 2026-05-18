import React, { useEffect, useRef, useState } from 'react';

const TRANSPARENT = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

export default function LazyImage({ src, alt, className, style, placeholder, rootMargin = '200px', ...rest }) {
  const imgRef = useRef(null);
  const [visibleSrc, setVisibleSrc] = useState(placeholder || TRANSPARENT);

  useEffect(() => {
    if (!src) return;
    let observer;
    const node = imgRef.current;
    if ('IntersectionObserver' in window && node) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSrc(src);
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin }
      );
      observer.observe(node);
    } else {
      // Fallback: load immediately
      setVisibleSrc(src);
    }
    return () => observer && observer.disconnect();
  }, [src, rootMargin, placeholder]);

  return (
    <img
      ref={imgRef}
      src={visibleSrc}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      decoding="async"
      {...rest}
    />
  );
}
