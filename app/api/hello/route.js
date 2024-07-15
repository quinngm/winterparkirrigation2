import { NextResponse } from "next/server";

export async function POST(req) {
  const { email } = await req.json();
  console.log("email: ", email);

  return NextResponse.json({ ok: "ok" }, { status: 200 });
}

// ON TOP
// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// const { name, email, phone, message } = await req.json();

// if (!name || !email || !phone || !message) {
//   return NextResponse.json(
//     { error: "Fields not filled in the form..." },
//     { status: 400 }
//   );
// }

// const msg = {
//   to: "todd@rosamondconstruction.com",
//   from: "support@vjxsoft.com",
//   replyTo: email,
//   subject: `Customer: ${name} Email: ${email} Phone: ${phone}`,
//   text: message,
// };

// return sgMail
//   .send(msg)
//   .then(() => {
//     return NextResponse.json(
//       { message: "All good, email sent" },
//       { status: 200 }
//     );
//   })
//   .catch((error: any) => {
//     return NextResponse.json({ error: error }, { status: 500 });
//   });
