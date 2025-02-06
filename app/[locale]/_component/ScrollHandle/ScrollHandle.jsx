'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { ReactLenis, useLenis } from '../../../../utils/lenis';

export default function ScrollHandle({ children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lenis = useLenis(); // الحصول على كائن Lenis

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, searchParams, lenis]);

  return <ReactLenis root>{children}</ReactLenis>;
}
