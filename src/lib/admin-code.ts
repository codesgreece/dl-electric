import { scryptSync, timingSafeEqual } from "crypto";

const SALT = Buffer.from("1f5b6072290830bffe6464d0c67ec424", "hex");
const EXPECTED = Buffer.from(
  "f0811e50cea1b04d3a67f4f61ac3f7f7aba98ef1d93e51763771dbf73565012d1251b716a893bc700eaa8a3997b461261912a0914897c019f5a9b014ccdd4f6f",
  "hex",
);

const SCRYPT = { N: 16384, r: 8, p: 1 } as const;

function digest(code: string, salt: Buffer, length: number) {
  return scryptSync(code, salt, length, SCRYPT);
}

export function verifyAdminCode(code: string): boolean {
  if (code.length < 8 || code.length > 200) return false;

  const override = process.env.ADMIN_CODE?.trim();
  if (override) {
    const salt = Buffer.from("dl-electric-admin-code");
    const expected = digest(override, salt, 64);
    return timingSafeEqual(digest(code, salt, 64), expected);
  }

  return timingSafeEqual(digest(code, SALT, EXPECTED.length), EXPECTED);
}
