import { Favourite } from "database/models";

export default async function handler(req, res) {
  res.headers = {
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
  };
  switch (req.method) {
    case "GET":
      await handleGet(req, res);
      break;
    case "POST":
      await handlePost(req, res);
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
  const { userId, courseId } = req.query;

  try {
    const exist = await Favourite.findOne({
      where: { userId, courseId },
    });

    if (exist) {
      res.status(200).send(true);
    } else {
      res.status(200).send(false);
    }
  } catch (e) {
    res.status(400).json({
      error_code: "make_wishlist",
      message: e.message,
    });
  }
};

const handlePost = async (req, res) => {
  res.headers = {
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
  };
  const { userId, courseId, fav } = req.body;

  try {
    if (fav) {
      await Favourite.create({
        userId,
        courseId,
      });

      res.status(200).json({
        message: "Added to wishlist",
      });
    } else {
      const favexist = await Favourite.findOne({
        where: { userId, courseId },
      });

      favexist.destroy();

      res.status(200).json({
        message: "Remove from wishlist",
      });
    }
  } catch (e) {
    res.status(400).json({
      error_code: "make_wishlist",
      message: e.message,
    });
  }
};
