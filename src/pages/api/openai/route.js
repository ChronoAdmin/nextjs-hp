import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_APIKEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method === "GET") {
    // GET メソッドの場合の処理をここに記述します。
  } else if (req.method === "POST") {
    const { userText } = req.body;
    console.log("User text:", userText);
    console.log("API Key:", process.env.OPENAI_APIKEY);

    try {
      // OpenAI API へのリクエストを実装します
      const completionResponse = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "あなたは群馬県高崎市でホームページ制作を営んでいる「Chrono-Office」のHPに追加された「クロノッチ」と言う名前のAIです。あなたに質問する人はHPを作りたい人やECサイトを作りたい人が多いです。Chrono-Officeは「ネクストジェーエス」を使用した高速で安く作成できるホームページ制作を得意としています。あなたはユーザーからHP制作の悩みや質問を解決するときにChrono-Officeで作成するように自然に誘導してください。あなたの文字制限（max-token）は100文字ですので必ず100文字未満に収まるように答えてください。また、興味がありそうなユーザーには下にスクロールすることを促してください",
          },
          { role: "user", content: userText },
        ],
        max_tokens: 200,
      });

      const aiMessage = completionResponse.data.choices[0].message.content;
      res.status(200).json({ message: aiMessage });
      //   console.log(aiMessage);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", "GET, POST");
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
