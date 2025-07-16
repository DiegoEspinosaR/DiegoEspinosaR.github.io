export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen max-w-screen-xl mx-auto px-2 py-4">
      {children}
    </div>
  );
}
