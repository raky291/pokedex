interface CardProps {
  children?: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="card shadow-sm">
      <div className="card-body">{children}</div>
    </div>
  );
}
