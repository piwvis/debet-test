import {
  bindViewportCSSVars,
  useSwipeBehavior,
  useViewport,
} from "@telegram-apps/sdk-react";
import { useEffect } from "react";

export default function TelegramSDK() {
  const viewport = useViewport();
  const swipeBehavior = useSwipeBehavior();

  useEffect(() => {
    if (
      swipeBehavior &&
      swipeBehavior.supports("disableVerticalSwipe") &&
      swipeBehavior.isVerticalSwipeEnabled
    ) {
      swipeBehavior.disableVerticalSwipe();
    }
  }, [swipeBehavior]);

  useEffect(() => {
    if (viewport && !viewport?.isExpanded) viewport.expand();
    return viewport && bindViewportCSSVars(viewport);
  }, [viewport]);

  return <></>;
}
