const { kafka } = require('./client')

async function init() {
  const producer = kafka.producer()

  console.log('Connecting Producer')
  await producer.connect()
  console.log('Producer Connetected Successfully')
  await producer.send({
    topic: 'driver-updates',
    messages: [
      {
        key: 'location-update',
        value: JSON.stringify({ name: 'Random User', loc: 'SOUTH' }),
      },
    ],
  })
  await producer.disconnect()
}
init()
