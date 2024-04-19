interface LoadingProps {
  style?: React.CSSProperties;
}

export default function Loading({ style }: LoadingProps) {
  return (
    <div
      className="d-flex align-items-center justify-content-center flex-grow-1"
      style={style}
    >
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
