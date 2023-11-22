import User from "database/models/user";

export default async function handler(req, res) {
  res.headers = {
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
  };
  try {
    const users = await User.findAll({
      attributes: ["first_name", "last_name", "email"],
      order: [["created_at", "DESC"]],
      limit: 100,
    });

    res.status(200).json({ users });
  } catch (e) {
    res.status(400).json({
      error_code: "get_users",
      message: e.message,
    });
  }
}
