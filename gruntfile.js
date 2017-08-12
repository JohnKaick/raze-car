module.exports = function (grunt) {

    grunt.initConfig({
        'htmlbuild': {
            build: {
                src: [
                    'source/pages/index.html',
                    'source/pages/servicos-produtos.html',
                    'source/pages/atendimentos-prestados.html'
                ],
                dest: 'public/',
                options: {
                    sections: {
                        geral: {
                            header: 'source/geral/header.html',
                            footer: 'source/geral/footer.html',
                            head: 'source/geral/head.html',
                            componentes: 'source/geral/componentes.html',
                        },
                    }
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-html-build')

    grunt.registerTask('default', [
        'htmlbuild:build'
    ])

}