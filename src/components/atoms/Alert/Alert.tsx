interface AlertProps {
  message: string;
}

export default function Alert({ message }: AlertProps) {
  return (
    <div className="alert alert-danger" role="alert">
      {message}
    </div>
  );
}
