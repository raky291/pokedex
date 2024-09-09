/* eslint-disable jsx-a11y/alt-text */
import { render } from "@testing-library/react";
import Image, { ImageProps } from "./image";

describe("Image Component", () => {
  const defaultProps: ImageProps = {
    src: "/test.jpg",
    alt: "test",
    fill: true,
  };

  it("renders with default props", () => {
    const { container } = render(<Image {...defaultProps} />);
    expect(container).toBeInTheDocument();
  });

  it("renders with string sizes", () => {
    const sizes = "100vw";
    const { container } = render(<Image {...defaultProps} sizes={sizes} />);
    const img = container.querySelector("img");
    expect(img).toHaveAttribute("sizes", "100vw");
  });

  it("renders with single breakpoint sizes", () => {
    const sizes = { xs: 12 };
    const { container } = render(<Image {...defaultProps} sizes={sizes} />);
    const img = container.querySelector("img");
    expect(img).toHaveAttribute("sizes", "100vw");
  });

  it("renders with multiple breakpoints sizes", () => {
    const sizes = { xs: 12, sm: 6, md: 4, lg: 3 };
    const { container } = render(<Image {...defaultProps} sizes={sizes} />);
    const img = container.querySelector("img");
    expect(img).toHaveAttribute(
      "sizes",
      "(max-width: 599px) 100vw, (max-width: 899px) 50vw, (max-width: 1199px) 33vw, 25vw",
    );
  });
});
