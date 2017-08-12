const hapi = require('hapi')

const server = new hapi.Server()

server.connection({ port: 8080 })

server.register(
    [
        { register: require('inert') }
    ], function (err) {

        if (err) console.log(err)

        server.route({
            method: 'GET',
            path: '/{param*}',
            handler: {
                directory: {
                    path: 'public/',
                    redirectToSlash: true,
                    index: true
                }
            },
            config: {
                auth: false
            }
        })

    }
)

server.start(function (err) {
    if (err) {
        throw err
    }
    console.log(`Server running at: ${server.info.uri}`)
})