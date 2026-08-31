import { NextResponse } from "next/server";
import { connectToDatabase } from "../../lib/mongodb.js";
import User from "../../models/user.js";

export async function POST(request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    await connectToDatabase();
    const user = await User.create({ email });
    return NextResponse.json({ success: true, message: "Email saved", user });
  } catch (error) {
    console.error(" Error saving email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save email" },
      { status: 500 }
    );
  }
}
