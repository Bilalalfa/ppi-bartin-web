"use server";

import { studentAccount } from "./account";
import prisma from "./prisma";

export const userData = async () => {
  return await prisma.user.findMany({
    orderBy: {
      name: "desc",
    },
    select: {
      id: true,
      name: true,
      nomorSiswa: true,
      email: true,
      image: true,
    },
  });
};

export type UserData = Awaited<ReturnType<typeof userData>>[0];

export const checkNoSiswa = async () => {
  const session = await studentAccount();

  return await prisma.user.findUnique({ where: { id: session.user.id } });
};

export const dataSiswa = async () => {
  return await prisma.dataSiswa.findMany({
    take: 10,
    orderBy: {
      nama_siswa: "desc",
    },
    select: {
      nama_siswa: true,
      id_siswa: true,
    },
  });
};

export type DataSiswa = Awaited<ReturnType<typeof dataSiswa>>[0];
