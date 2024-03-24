const { Kafka } = require('kafkajs')
const kafka = new Kafka({
  clientId: 'my-kafka-app',
  brokers: [process.env.IP],
})

module.exports = { kafka }
