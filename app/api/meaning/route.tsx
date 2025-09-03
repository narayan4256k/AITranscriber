import { openai } from "@/config/OpenAiModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { value } = await req.json();
  try {
    const completion = await openai.chat.completions.create({
      model: "deepseek/deepseek-chat-v3.1:free",
      messages: [
        {
          role: "system",
          content: `
            You are a spiritual guide. 
            The user will enter Indian hymns, mantras, or shlokas. 
            Your job is to explain them in clear, respectful language. 
            First, give the literal meaning. Then explain the deeper spiritual context, 
            and finally describe how it is used in practice. 
            Respond in plain text, well-structured with headings or bullet points for clarity.
            Dont give output more than 10 lines(less 150 words).
            dont include large gaps
            dont include ** to bold text as my text is already bolded
          `,
        },
        {
          role: "user",
          content: value, // pass hymn/shloka entered by user
        },
      ],
    });

    const response = completion.choices[0].message?.content || "No response";
    return NextResponse.json({ text: response }); // ✅ wrap as plain text
  } catch (e: any) {
    return NextResponse.json({ error: e.message || e });
  }
}
