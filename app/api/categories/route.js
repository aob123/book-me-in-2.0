import { NextResponse } from "next/server";
import Category from "../../(models)/Category";
import { connectToDatabase } from "@/lib/mongoose";

// GET get categories

export async function GET() {
  try {
    connectToDatabase();
    const categories = await Category.find();
    return NextResponse.json({ categories }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Could not get categories from database", error },
      { status: 500 }
    );
  }
}
