import Booking from "../../(models)/Booking";
import { NextResponse } from "next/server";
import Category from "../../(models)/Category";
import { connectToDatabase } from "@/lib/mongoose";

// POST create booking
export async function POST(req) {
  try {
    const body = await req.json();
    const bookingData = body.formData;
    await Booking.create(bookingData);
    return NextResponse.json({ message: "Booking created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

//GET get bookings
export async function GET() {
  try {
    connectToDatabase();
    const bookings = await Booking.find();
    return NextResponse.json({ bookings }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Could not get bookings from database", error },
      { status: 500 }
    );
  }
}
