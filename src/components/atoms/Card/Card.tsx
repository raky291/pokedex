import classNames from "classnames";

interface CardProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function Card({ className, style, children }: CardProps) {
  return (
    <div className={classNames("card", "shadow-sm", className)} style={style}>
      <div className="card-body">{children}</div>
    </div>
  );
}
