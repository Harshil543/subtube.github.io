import Coupon from "database/models/coupon";

export default async function handler(req, res) {
  res.headers = {
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
  };
  if (!("authorization" in req.headers)) {
    return res.status(401).json({ message: "No autorization token" });
  }
  switch (req.method) {
    case "GET":
      await handleGet(req, res);
      break;
    case "DELETE":
      await handleDelete(req, res);
      break;
    default:
      res.status(405).json({
        message: `Method ${req.method} not allowed`,
      });
  }
}

const handleGet = async (req, res) => {
  res.headers = {
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
  };

  try {
    const coupons = await Coupon.findAll({
      order: [["created_at", "DESC"]],
      limit: 20,
    });

    res.status(200).json({ coupons });
  } catch (e) {
    res.status(400).json({
      error_code: "get_coupons",
      message: e.message,
    });
  }
};

const handleDelete = async (req, res) => {
  res.headers = {
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
  };
  const { couponId } = req.query;
  try {
    const coupon = await Coupon.findOne({
      where: { id: couponId },
    });

    coupon.destroy();

    res.status(200).json({ message: "Coupon deleted successfully." });
  } catch (e) {
    res.status(400).json({
      error_code: "get_Coupon",
      message: e.message,
    });
  }
};
