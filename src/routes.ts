import express from 'express';
import { NodeMailerMailAapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedback-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router()


routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;

    const prismaFeedbacksRepository = new  PrismaFeedbacksRepository()
    const nodeMailerMailAapter = new NodeMailerMailAapter()

    const submitFeedbackUseCase = new SubmitFeedbackUseCase( prismaFeedbacksRepository,  nodeMailerMailAapter )


    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
    })

    return res.status(201).send()
});