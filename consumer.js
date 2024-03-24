const { kafka } = require('./client')

async function init() {
  const consumer = kafka.consumer({ groupId: 'user-1' })

  await consumer.connect()

  await consumer.subscribe({ topics: ['driver-updates'], fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, messsage, heartbeat, pause }) => {
      console.log(
        `${group}: [${topic}]: PART:${partition}:`,
        message.value.toString()
      )
    },
  })
  //   await consumer.disconnect()
}
init()
