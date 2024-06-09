import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

const registerHandler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, password } = req.body

    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' })
    }

    const hashedPassword = bcrypt.hashSync(password, 10)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    res.status(201).json(user)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

export default registerHandler