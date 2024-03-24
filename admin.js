const { kafka } = require('./client')
async function init() {
  const admin = kafka.admin()
  console.log('Admin Connecting')
  admin.connect()
  console.log('Admin Connected..................')

  console.log('Creating Topic Driver Update')
  await admin.createTopics({
    topics: [
      {
        topic: 'driver-updates',
        numPartitions: 2,
      },
    ],
  })
  console.log('Topic Created Successfully')
  console.log('Disconnecting Admin')
  await admin.disconnect()
}
init()
