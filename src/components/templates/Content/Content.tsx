interface ContentProps {
  children?: React.ReactNode;
}

export default function Content({ children }: ContentProps) {
  return (
    <main className="bg-body-secondary flex-grow-1">
      <div className="container py-4">{children}</div>
    </main>
  );
}
