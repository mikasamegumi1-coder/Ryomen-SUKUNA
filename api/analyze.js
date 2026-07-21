export default async function handler(req, res) {
  res.status(200).json({
    status: "online",
    ai: "Gemini",
    tool: "Ryomen Sukuna: King of Curses Analytics",
    version: "1.0"
  });
}
