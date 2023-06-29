import { string } from 'yup'
import { NextApiRequest, NextApiResponse } from 'next'
import redis, { databaseName } from 'utils/redis'
import { FeatureStatus } from '../../stores'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // const session = (await unstable_getServerSession(
  //   req,
  //   res,
  //   authOptions as NextAuthOptions
  // )) as any

  try {
    const { title } = req.body

    let schema = string().required().trim().min(10).max(70)
    const isValid = await schema.isValid(title)

    if (!isValid) {
      throw new Error('Min 10 and Max 70 characters please.')
    }

    const newFeature = {
      title,
      createdAt: Date.now(),
      user: { name: "Sunit", sub: "Sunit" },
      status: FeatureStatus.Active
    }

    await redis.zadd(
      databaseName,
      { nx: true },
      { score: 0, member: JSON.stringify(newFeature) }
    )

    if (process.env.WEBHOOK_URL) {
      // post webhook message to slack
      fetch(process.env.WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          blocks: [
            {
              type: 'context',
              elements: [
                {
                  type: 'plain_text',
                  text: 'New feature request:'
                }
              ]
            },
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: `*${title.trim()}*`
              }
            }
          ]
        })
      })
        .then((res) => res.json())
        .then((json) => console.log(json))
    }

    res.json({ body: 'success' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
