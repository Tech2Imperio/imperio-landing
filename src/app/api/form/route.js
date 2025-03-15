import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.json();
    const { name, email, mobile, state, city, userType, lookingFor, message } =
      formData;

    // Google API authentication
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    });
    // Append form data to Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A1:I1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            name,
            email,
            mobile,
            state,
            city,
            userType,
            lookingFor,
            message,
            timestamp,
          ],
        ],
      },
    });

    return NextResponse.json(
      { message: "Form submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { message: "Error submitting form. Please try again." },
      { status: 500 }
    );
  }
}
