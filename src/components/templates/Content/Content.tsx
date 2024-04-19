interface ContentProps {
  children?: React.ReactNode;
}

export default function Content({ children }: ContentProps) {
  return (
    <main className="bg-body-secondary d-flex flex-column flex-grow-1">
      <div className="container d-flex flex-column flex-grow-1 py-4">
        {children}
      </div>
    </main>
  );
}
