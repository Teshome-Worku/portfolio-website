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

    if (!TELEGRAM_BOT_TOKEN || !CHAT_ID) {
        console.error('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID environment variable');
        return res.status(500).json({ error: 'Server misconfiguration: missing env vars' });
    }

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

        if (!data.ok) throw new Error(`Telegram error: ${JSON.stringify(data)}`);

        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error sending telegram message:', error);
        // If telegram responded with a body, include it when available (helps debugging in Vercel logs)
        if (error && error.message) {
            return res.status(500).json({ error: 'Failed to send message', detail: error.message });
        }

        res.status(500).json({ error: "Failed to send message" });
    }
}