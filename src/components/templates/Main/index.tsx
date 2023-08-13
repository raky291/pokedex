interface MainProps {
  children?: React.ReactNode;
}

export default function Main({ children }: MainProps) {
  return (
    <main className="bg-body-tertiary py-4">
      <div className="container">{children}</div>
    </main>
  );
}
