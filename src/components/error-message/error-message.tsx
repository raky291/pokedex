interface IErrorMessageProps {
  message: string;
}

export function ErrorMessage(props: IErrorMessageProps) {
  const { message } = props;
  return <div className={"error-message"}>{message}</div>;
}
