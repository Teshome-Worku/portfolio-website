export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing fields" });
    }

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    const text = `
  📩 New Portfolio Message
  
  👤 Name: ${name}
  📧 Email: ${email}
  💬 Message:
  ${message}
    `;

    try {
        const telegramRes = await fetch(
            `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: text,
                }),
            }
        );

        const data = await telegramRes.json();

        if (!data.ok) throw new Error("Telegram error");

        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ error: "Failed to send message" });
    }
}