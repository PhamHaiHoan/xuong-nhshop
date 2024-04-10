import Joi from "joi";
import User from "../models/user";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";

const signupSchema = Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
        "any.required": "Trường Name là bắt buộc",
        "string.empty": "Trường Name không được để trống",
        "string.min": "Trường Name phải có ít nhất {#limit} ký tự",
        "string.max": "Trường Name phải có nhiều nhất {#limit} ký tự",
    }),
    email: Joi.string().email().required().messages({
        "any.required": "Trường Email là bắt buộc",
        "string.empty": "Trường Email không được để trống",
        "string.email": "Email của bạn không hợp lệ"
    }),
    password: Joi.string().min(6).max(30).required().messages({
        "any.required": "Trường Password là bắt buộc",
        "string.empty": "Trường Password không được để trống",
        "string.min": "Mật khẩu phải chứa ít nhất {#limit} kí tự",
        "string.max": "Mật khẩu phải chứa nhiều nhất {#limit} kí tự",
    }),
    confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
        "any.only": "Mật khẩu không trùng khớp",
        "any.required": "Trường Confirm Password là bắt buộc",
    })
});

export const signup = async (req, res) => {
    const { email, password, name } = req.body;
    const { error } = signupSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const messages = error.details.map(item => item.message);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ messages });
    }

    const existUser = await User.findOne({ email });
    if (existUser) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: ["Email đã tồn tại"] });
    }

    const hashedPassword = await bcryptjs.hash(password, 12);
    const role = (await User.countDocuments({})) === 0 ? "admin" : "user";

    const user = await User.create({
        ...req.body,
        password: hashedPassword,
        role,
    });

    return res.status(StatusCodes.CREATED).json({ user });
};

const signinSchema = Joi.object({
    email: Joi.string().email().required().messages({
        "any.required": "Trường Email là bắt buộc",
        "string.empty": "Trường Email không được để trống",
        "string.email": "Email của bạn không hợp lệ"
    }),
    password: Joi.string().min(6).max(30).required().messages({
        "any.required": "Trường Password là bắt buộc",
        "string.empty": "Trường Password không được để trống",
        "string.min": "Mật khẩu phải chứa ít nhất {#limit} kí tự",
        "string.max": "Mật khẩu phải chứa nhiều nhất {#limit} kí tự",
    })
});
export const signin = async (req, res) => {
    const { email, password, name } = req.body;
    const { error } = signinSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const messages = error.details.map(item => item.message);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ messages });
    }

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: ["Email không tồn tại"] });
    }

    const isMatch = await bcryptjs.compare( req.body.password, user.password);
    if(!isMatch){
        return res.status(400).json({
            message: "Mật khẩu không dúng",
        });
    }

    const token = jwt.sign({id: user._id}, "123456" ,{expiresIn: "1h"});

    const role = (await User.countDocuments({})) === 0 ? "admin" : "user";

    return res.status(StatusCodes.CREATED).json({ user, token});
};
export const logout = async (req, res) => {};
