import { slugify } from "@/utils/auth";
import Category from "database/models/category";

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
      await categoryById(req, res);
      break;
    case "POST":
      await createCategory(req, res);
      break;
    case "PUT":
      await updateCategory(req, res);
      break;
    default:
      res.status(405).json({
        message: `Method ${req.method} not allowed`,
      });
  }
}

const categoryById = async (req, res) => {
  res.headers = {
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
  };
  const { catId } = req.query;
  // console.log("####", catId);
  try {
    const category = await Category.findOne({
      where: { id: catId },
    });

    res.status(200).json({ category });
  } catch (e) {
    res.status(400).json({
      error_code: "get_category_by_id",
      message: e.message,
    });
  }
};

const createCategory = async (req, res) => {
  res.headers = {
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
  };
  const { category } = req.body;

  try {
    let slug = slugify(category);
    const categoryExist = await Category.findOne({
      where: { slug: slug },
    });

    if (categoryExist) {
      slug = `${slug}-${Math.floor(Math.random() * (999 - 100 + 1) + 100)}`;
    }

    const newcat = await Category.create({
      name: category,
      slug: slug,
    });

    res.status(200).json({
      message: "New category added",
      category: newcat,
    });
  } catch (e) {
    res.status(400).json({
      error_code: "create_category",
      message: e.message,
    });
  }
};

const updateCategory = async (req, res) => {
  res.headers = {
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
  };
  try {
    const { category, catId } = req.body;

    let slug = slugify(category);
    const categoryExist = await Category.findOne({
      where: { slug: slug },
    });

    if (categoryExist) {
      slug = `${slug}-${Math.floor(Math.random() * (999 - 100 + 1) + 100)}`;
    }

    await Category.update(
      {
        name: category,
        slug: slug,
      },
      {
        where: { id: catId },
      }
    );

    res.status(200).json({
      message: "Category updated.",
    });
  } catch (e) {
    res.status(400).json({
      error_code: "update_category",
      message: e.message,
    });
  }
};
