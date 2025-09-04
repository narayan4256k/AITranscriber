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
          You are a spiritual language assistant.
          The user will provide a devotional chant, mantra, or shloka.

          Provide response in **plain text only**, structured as:

          **Chant:** <user input>  
          **Translation:** <simple meaning>  
          **Transliteration:** <Latin script>  
          **Pronunciation Guide:** <phonetic hints>
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
