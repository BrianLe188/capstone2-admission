import { Channel } from "amqplib";

const applyAdmissionQueue = async ({ channel }: { channel: Channel }) => {
  const exchange = "admission";
  const queue = "apply_admission";

  await channel.assertExchange(exchange, "direct");
  await channel.assertQueue(queue);
  await channel.bindQueue(queue, exchange, "write");

  channel.consume(
    queue,
    (msg) => {
      if (msg?.fields.routingKey === "write") {
        const data = JSON.parse(msg.content.toString());
      }
    },
    {
      noAck: false,
    }
  );
};

export default applyAdmissionQueue;
