import { Enrolment } from "database/models";

export default async function handler(req, res) {
  res.headers = {
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
  };
  const { userId, courseId } = req.query;
  // console.log(courseId);
  try {
    let enroll;
    enroll = await Enrolment.findOne({
      where: { userId: userId, courseId: courseId },
    });

    if (enroll) {
      enroll = true;
    } else {
      enroll = false;
    }

    res.status(200).json({
      enroll,
    });
  } catch (e) {
    res.status(400).json({
      error_code: "get_course",
      message: e.message,
    });
  }
}
