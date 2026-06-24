import KanbanBoard from "@/components/KanbanBoard";
import { getSession } from "@/lib/auth/auth";
import connectDB from "@/lib/db";
import { Board } from "@/lib/models";
import { initializeUserBoard } from "@/lib/init-user-board";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/sign-in");
  }

  await connectDB();

  let board = await Board.findOne({
    userId: session.user.id,
    name: "Job Hunt",
  }).populate({
    path: "columns",
  });

  if (!board) {
    await initializeUserBoard(session.user.id);
    board = await Board.findOne({
      userId: session.user.id,
      name: "Job Hunt",
    }).populate({
      path: "columns",
    });
  }

  const boardData = board ? JSON.parse(JSON.stringify(board)) : null;

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto p-4">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-black">
            {board?.name || "Job Hunt"}
          </h1>
          <p className="text-gray-600">Lacak Pekerjaanmu!</p>
          {boardData ? (
            <KanbanBoard board={boardData} userId={session.user.id} />
          ) : (
            <div className="mt-6 rounded-lg border border-dashed border-gray-300 p-6 text-gray-700">
              Board belum tersedia.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
