import express, { Application, request } from "express";
import { handleErrors } from "./errors/errors";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
const multer = require("multer");
const path = require("path");

export const app: Application = express();
const audioStorage = multer.memoryStorage();
const audioUpload = multer({ storage: audioStorage });

const profileImageStorage = multer.diskStorage({
  destination: function (
    req: any,
    file: any,
    cb: (arg0: null, arg1: string) => void
  ) {
    cb(null, "profileImages/");
  },
  filename: function (
    req: any,
    file: { originalname: number },
    cb: (arg0: null, arg1: any) => void
  ) {
    cb(null, Date.now() + file.originalname);
  },
});
const profileImageUpload = multer({ storage: profileImageStorage });

app.post("/uploadAudio", audioUpload.single("audio"), async (req, res) => {
  try {
    const { title } = req.body;
    const audioData = req.filter;

    const music = await PrismaClient.music.create({
      data: {
        title: title,
        audioUrl: "",
      },
    });
    res.json({ message: "Áudio enviado com sucessor!" });
  } catch (err) {
    res.status(500).json({ error: "Ocorreu um erro ao enviar o audio" });
  }
});

app.post(
  "/uploadProfileImage",
  profileImageUpload.single("profileImage"),
  (req, res) => {
    if (req.file) {
      const profileImage = req.filter.filename;
      res
        .status(200)
        .json({ message: "Foto do perfil foi carregada com sucesso" });
    } else {
      res.status(400).json({ error: "Falha ao carregar a foto de perfil" });
    }
  }
);

app.use(express.json());
app.use(cors());

app.use(handleErrors);
