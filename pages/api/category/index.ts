import type { NextApiRequest, NextApiResponse } from "next";

import { db } from "../../../database";
import { ICategory } from "../../../interface";
import { Category } from "../../../models";

type Data = { message: string } | ICategory[];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "POST":
      return postCategory(req, res);
    case "GET":
      return getAllCategory(req, res);

    default:
      res.status(400).json({
        message: "Bad request",
      });
  }
}

const postCategory = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { name = "" } = req.body as { name: string };

  if (name.length < 2) {
    return res.status(400).json({
      message: "El nombre debe de ser de 2 caracteres",
    });
  }

  await db.connect();
  const category = await Category.findOne({ name });

  if (category) {
    return res.status(400).json({
      message: "Categoria ya creada... ",
    });
  }

  const newCategory = new Category({
    name: name,
  });

  try {
    await newCategory.save({ validateBeforeSave: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Revisar logs del servidor",
    });
  }

  return res.status(200).json({
    message: "Categoria creada... ",
  });
};

const getAllCategory = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();
  const category = await Category.find({});

  if (!category) {
    return res.status(400).json({
      message: "No hay categorias creadas... ",
    });
  }

  return res.status(200).json(category);
};
