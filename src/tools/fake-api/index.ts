// ตัวอย่าง mock API สำหรับสร้างข้อมูลปลอม
import { faker } from "@faker-js/faker";

export function getFakeUser() {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
  };
}
