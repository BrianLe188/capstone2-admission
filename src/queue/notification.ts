import { Channel } from "amqplib";
import { MyEventEmitter } from "../events";

const notificationQueue = async ({ channel }: { channel: Channel }) => {
  const mailQueue = "mail_queue";

  await channel.assertQueue(mailQueue);

  MyEventEmitter.on("send_mail", (data) => {
    channel.sendToQueue(mailQueue, Buffer.from(JSON.stringify(data)));
  });
};

export default notificationQueue;
