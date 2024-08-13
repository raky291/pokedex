import { isNil } from "@/app/lib/is-nil";
import { Breakpoint } from "@mui/material/styles";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { CSSProperties } from "react";

type Breakpoints<T extends string = string> = Record<T, number>;
export type ImageSizes = string | Partial<Breakpoints<Breakpoint>>;

export interface ImageProps extends Omit<NextImageProps, "sizes"> {
  sizes?: ImageSizes;
  responsive?: boolean;
}

const breakpoints: Breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const responsiveStyle: CSSProperties = {
  display: "block",
  width: "100%",
  height: "auto",
};

const getMedia = (
  key: string,
  breakpoints: Breakpoints,
): string | undefined => {
  const keys = Object.keys(breakpoints);
  const index = keys.indexOf(key);
  if (index === -1 || index === keys.length - 1) {
    return undefined;
  }

  const next = keys[index + 1];
  const value = breakpoints[next];
  return `(max-width: ${value - 1}px)`;
};

const getValue = (size: number, columns: number = 12): string => {
  return `${Math.trunc((size / columns) * 100)}vw`;
};

const getSourceSize = (
  [key, size]: [string, number],
  index: number,
  array: [string, number][],
  breakpoints: Breakpoints,
): string => {
  const media = getMedia(key, breakpoints);
  const value = getValue(size);
  if (isNil(media) || index === array.length - 1) {
    return value;
  }

  return `${media} ${value}`;
};

const buildSourceSizes = (
  breakpoints: Breakpoints,
  sizes?: ImageSizes,
): string | undefined => {
  if (isNil(sizes)) {
    return undefined;
  }

  if (typeof sizes === "string") {
    return sizes;
  }

  return Object.entries(sizes).reduce((result, value, index, array) => {
    const sourceSize = getSourceSize(value, index, array, breakpoints);
    return result ? `${result}, ${sourceSize}` : sourceSize;
  }, "");
};

export default function Image({
  sizes,
  responsive,
  style,
  ...rest
}: Readonly<ImageProps>) {
  return (
    <NextImage
      sizes={buildSourceSizes(breakpoints, sizes)}
      style={{
        ...(responsive && responsiveStyle),
        ...style,
      }}
      {...rest}
    />
  );
}
