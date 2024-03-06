type VariantClass = Record<string, string>;

interface PaddingClasses {
  default: string;
  small: string;
  large: string;
}

interface LoadingIconClasses {
  default: string;
  small: string;
  large: string;
}

export interface ButtonConfig {
  positionClasses: string[];
  baseClasses: string;
  baseInvertedClasses: string;
  disabledClasses: string;
  variantClasses: VariantClass;
  nonAccentedClasses: VariantClass;
  accentedClasses: VariantClass;
  invertedClasses: VariantClass;
  heightClasses: Record<string, string>;
  paddingClasses: Record<string, PaddingClasses>;
  loadingIconClasses: LoadingIconClasses;
}
