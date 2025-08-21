type ErrorProps = { error: Error };

export default function Error({ error }: ErrorProps) {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="text-red-500 text-center">
        <h2 className="text-xl font-semibold mb-2">Error loading images</h2>
        <p>{error.message}</p>
      </div>
    </div>
  );
}
