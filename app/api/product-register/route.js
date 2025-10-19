import { ConnectToDb } from "@/database/connectToDb";
import Members from "@/models/memberSchema";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { name, email, phone, organisation, company, image } = await req.json();
  try {
    await ConnectToDb();
    if (!name || !email || !phone || !organisation || !company) {
      return new NextResponse("All fields are required", { status: 404 });
    }
    const newMember = await Members.create({
      name,
      email,
      phone,
      organisation,
      company,
    });

    await newMember.save();
    return new NextResponse(
      "member created successfully",
      { newMember },
      { status: 201 }
    );
  } catch (error) {
    console.log("[Members_Register_Backend]", error);
    return new NextResponse("internal server error", { status: 500 });
  }
};
