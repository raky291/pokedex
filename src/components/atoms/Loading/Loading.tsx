import classNames from "classnames";

interface LoadingProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function Loading({ className, style }: LoadingProps) {
  return (
    <div
      className={classNames(
        "d-flex",
        "align-items-center",
        "justify-content-center",
        "flex-grow-1",
        className
      )}
      style={style}
    >
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
