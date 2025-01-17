export type CoverProps = {
  src: string;
  animate: boolean;
  size: "xsmall" | "small" | "medium" | "large" | "xlarge";
  tint?: "20" | "40" | "80" | "100" | "120";
  coverUrl?: string;
  description?: string;
  shadow?: boolean;
  ariaLabel?: string;
};
