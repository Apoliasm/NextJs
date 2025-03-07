export default function DashBoardDetailPage({ params, searchParams }) {
  return (
    <main>
      Dashboard Detail{params.id} {searchParams.code}
    </main>
  );
}
