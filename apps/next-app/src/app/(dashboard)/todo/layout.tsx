export default function ToDoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2 className="text-3xl">My Todo</h2>
      {children}
    </>
  );
}