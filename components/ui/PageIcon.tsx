import { IconProps, PageType } from "@/types";
import { DetailsIcon, EndingIcon, InfoIcon } from "@/components/icons";

interface PageIconProps extends IconProps {
  type: string;
}

export function PageIcon({ type, className, size }: PageIconProps) {
  function getPageIcon() {
    switch (type) {
      case PageType.INFO:
        return InfoIcon;
      case PageType.DETAILS:
        return DetailsIcon;
      case PageType.OTHER:
        return DetailsIcon;
      case PageType.ENDING:
        return EndingIcon;
      default:
        return DetailsIcon;
    }
  }

  const Icon = getPageIcon();

  return <Icon {...(className && { className })} {...(size && { size })} />;
}
