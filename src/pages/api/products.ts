import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (response.status !== 200) {
      return res.status(404).json({ success: false, message: 'Something went wrong' });
    }

    res.status(200).json({ data: response, success: true, message: 'Data Fetched Successfully' });

  } catch (err) {
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}