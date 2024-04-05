import Fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import cookie from '@fastify/cookie'
import { createReadStream } from 'fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const fastify = Fastify({
	logger: true
})

fastify.register(cookie, {
	secret: 'not-so-secret',
	parseOptions: {}
})
fastify.register(fastifyStatic, {
	root: join(fileURLToPath(import.meta.url), 'public'),
	prefix: '/public/'
})

const USERS = { alice: 'pwned', bob: 'hunter2' }
const BALANCES = { alice: 500, bob: 100 }

fastify.get('/', (req, res) => {
	const username = req.cookies.username
	if (username) {
		res.send(`Hi ${username}`)
	} else {
		createReadStream('index.html').pipe(res)
	}
})

fastify.post('/login', (req, res) => {
	const username = req.body.username
	const password = USERS[username]

	if (password === req.body.password) {
		res.cookie('username', username, { path: '/', signed: true })
		res.redirect('/')
	} else {
		res.send('fail!')
	}
})

fastify.listen(8080)
