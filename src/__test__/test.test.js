const supertest = require("supertest");
const app = require("../..");
const userController = require("../controllers/user");
const messageController = require("../controllers/message");
const { messageWebhook } = require("../helpers/webhook");

describe("TEST", () => {
  it("should show all messages", async () => {
    const res = await supertest(app).get("/messages");
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("data");
  });

  it("should show a message by ID", async () => {
    const res = await supertest(app).get("/messages/20");
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("data");
  });

  it("should show all messages by users", async () => {
    const res = await supertest(app).get("/summary");
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("data");
  });

  it("should show user by id", async () => {
    const res = await userController.getById(4989863981057811);
    expect(res.dataValues).toMatchObject({
      user: "4989863981057811",
      first_name: "Felix",
      birthdate: "1999-06-20",
    });
  });
  it("shoud success send message", async () => {
    const res = await messageWebhook({
      user: "12345678",
      mid: "m_12345678",
      message: "TEST",
      timestamp: "12345678",
    });

    expect(res).toBe("SUCCESS");
  });
});
