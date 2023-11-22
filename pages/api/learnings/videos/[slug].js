import { Video, Course } from "@/database/models";

export default async function handler(req, res) {
  res.headers = {
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
  };
  const { slug } = req.query;
  // console.log(slug);
  try {
    const course = await Course.findOne({ where: { slug: slug } });
    if (course) {
      const videos = await Video.findAll({
        order: [["short_id", "ASC"]],
        where: { courseId: course.id },
      });

      res.status(200).json({
        course,
        videos,
      });
    } else {
      res.status(200).json({
        videos: [],
      });
    }
  } catch (e) {
    res.status(400).json({
      error_code: "get_videos",
      message: e.message,
    });
  }
}
