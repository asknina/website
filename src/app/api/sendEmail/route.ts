const { GoogleSpreadsheet } = require("google-spreadsheet");
const { JWT } = require('google-auth-library')

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY,
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets',
  ],
});
const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);

export async function POST(request: Request) {
  const body = await request.json();
  const email = body.email
  const role = body.role
  try {
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow({ email, role })
    return new Response("A ok!", { status: 200 })
  } catch (error) {
    return new Response(error?.toString(), { status: 500 });
  }
}
