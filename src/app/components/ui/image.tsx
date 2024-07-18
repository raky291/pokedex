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

export default function Image({
  sizes,
  responsive,
  style,
  ...rest
}: Readonly<ImageProps>) {
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

  function createSourceSizes(
    sizes?: ImageSizes,
    breakpoints?: Breakpoints,
  ): string | undefined {
    if (isNil(sizes)) {
      return undefined;
    }

    if (typeof sizes === "string") {
      return sizes;
    }

    if (isNil(breakpoints)) {
      return undefined;
    }

    function getMediaQuery(
      key: string,
      breakpoints: Breakpoints,
    ): string | undefined {
      const keys = Object.keys(breakpoints);
      const index = keys.indexOf(key);
      if (index === -1) {
        return undefined;
      }
      const next = keys.at(index + 1);
      if (isNil(next)) {
        return undefined;
      }
      const value = breakpoints[next];
      return `(max-width: ${value - 1}px)`;
    }

    function getViewportWidth(size: number, columns: number = 12): string {
      return `${Math.trunc((size / columns) * 100)}vw`;
    }

    function createSourceSize(
      [key, size]: [string, number],
      index: number,
      array: [string, number][],
      breakpoints: Breakpoints,
    ): string {
      const mediaQuery = getMediaQuery(key, breakpoints);
      const viewportWidth = getViewportWidth(size);
      if (isNil(mediaQuery) || index === array.length - 1) {
        return viewportWidth;
      }
      return `${mediaQuery} ${viewportWidth}`;
    }

    return Object.entries(sizes)
      .map((value, index, array) => {
        return createSourceSize(value, index, array, breakpoints);
      })
      .join(", ");
  }

  return (
    <NextImage
      sizes={createSourceSizes(sizes, breakpoints)}
      style={{
        ...(responsive && responsiveStyle),
        ...style,
      }}
      {...rest}
    />
  );
}
