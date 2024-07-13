import { useEffect, useState } from "react";

export const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(false);

  useEffect(() => {
    const regexp = /android|iphone|kindle|ipad/i;
    const isMobileDevice = regexp.test(navigator.userAgent);
    if (!isMobileDevice) setIsDesktop(true);
  }, []);

  return { isDesktop };
};
