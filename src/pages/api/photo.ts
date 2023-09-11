import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method == "GET") {
        if (!req.query.id) {
            const data = await prisma.photo.findMany()
            if (data) {
                return res.status(200).json({
                    status: 200,
                    data
                })
            } else {
                return res.status(404).json({
                    status: 404,
                    message: "No data returned"
                })
            }
        } else {
            const data = await prisma.photo.findFirst({
                where: {
                    "id": parseInt(req.query.id as string)
                }
            })
            if (data) {
                return res.status(200).json({
                    status: 200,
                    data
                })
            } else {
                return res.status(404).json({
                    status: 404,
                    message: "No data returned"
                })
            }
        }
    } else if (req.method == "POST") {
        try {
            await prisma.photo.create({
                data: {
                    subtitle: req.body.subtitle,
                    game: req.body.game,
                    photoUrl: req.body.photoUrl
                }
            })

            return res.status(200).json({
                status: 200,
                message: "Successfully created record"
            })
        } catch (e) {
            return res.status(500).json({
                status: 500,
                message: "An error occurred while trying to create that record"
            })
        }
    } else if (req.method == "DELETE") {
        try {
            await prisma.photo.delete({
                where: {
                    id: parseInt(req.query.id as string)
                }
            })

            return res.status(200).json({
                status: 200,
                message: "Successfully deleted record"
            })
        } catch (e) {
            return res.status(500).json({
                status: 500,
                message: "Failed to delete record"
            })
        }
    } else {
        return res.status(405).json({
            status: 405,
            request: "This HTTP method is not allowed on this endpoint"
        })
    } 
}