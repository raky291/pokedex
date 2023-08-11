interface IAlertProps {
  message: string;
}

export function Alert(props: IAlertProps) {
  const { message } = props;
  return <div className={"alert"}>{message}</div>;
}
