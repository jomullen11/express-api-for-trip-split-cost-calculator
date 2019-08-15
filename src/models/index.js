import monk from 'monk'

const dbUrl = `mongodb://Jmullen:${process.env.DbPassword}@cluster0-shard-00-00-uud1q.mongodb.net:27017,cluster0-shard-00-01-uud1q.mongodb.net:27017,cluster0-shard-00-02-uud1q.mongodb.net:27017/${process.env.CollectionName}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`

const db = monk(dbUrl)

const peopleAndDays = db.get('People And Days')

export default {
    peopleAndDays
}