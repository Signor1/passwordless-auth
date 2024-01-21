import { getAuth } from "@clerk/nextjs/server";

export default function handler(req, res) {
  const { userId } = getAuth(req);
  console.log("userId", userId);

  if (!userId) {
    res.status(401).json({
      status: "Unauthorized access",
    });
    return;
  }
  res.status(200).json({
    favourites: 10,
    tracking: 5,
    watched: 2,
  });
}
