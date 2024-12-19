import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import prisma from "../lib/prisma.js"
import 'dotenv/config'

export const register = async (req, res) => {
     const { username, email, password } = req.body;

     try {
          //hash the password
          const hashPass = await bcrypt.hash(password, 10)
          console.log(hashPass)

          //create new user and save to database
          const newUser = await prisma.user.create({
               data: {
                    username,
                    email,
                    password: hashPass,
               }
          });
          console.log(newUser)
          res.status(201).json({ "message": "user created successfully" })
     } catch (err) {
          console.log(err)
          res.status(500).json({ "message": "error in creating user." })
     }
}

export const login = async (req, res) => {
     const { username, password } = req.body

     try {
          //check if user exists or not
          const user = await prisma.user.findUnique({
               where: { username }
          })
          if (!user) return res.status(401).json({ message: "Invalid credentials!" })

          //check if password is correct
          const isPassValid = await bcrypt.compare(password, user.password)
          if (!isPassValid) return res.status(401).json({ message: "Invalid credentials!" })

          //generate cookie token and send to the user
          // res.setHeader("Set-Cookie", "test=" + "myValue").json("success")
          const age = 1000 * 60 * 60 * 24 * 7

          const token = jwt.sign(
               {
                    id: user.id,
                    isAdmin: false,
               },
               process.env.JWT_SECRET_KEY,
               { expiresIn: age }
          )

          const { password: userPassword, ...userinfo } = user

          res.cookie("token", token, {
               httpOnly: true,
               maxAge: age,
          }).status(200).json(userinfo)
     } catch (err) {
          res.status(500).json({ message: "failed to login" })
     }
}

export const logout = (req, res) => {
     res.clearCookie("token").status(200).json({ message: "logout successfully" })
}