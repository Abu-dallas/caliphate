import { ConnectToDb } from "@/database/connectToDb";
import Members from "@/models/memberSchema";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await ConnectToDb();
    const allmembers = await Members.find();
    return new NextResponse(JSON.stringify(allmembers), { status: 200 });
  } catch (error) {
    console.log("[GET_MEMBERS_ERROR]", error);
    return new NextResponse("internal server error", { status: 500 });
  }
};
