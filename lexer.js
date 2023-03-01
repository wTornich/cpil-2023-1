
const fs = require('fs')

const digits = ['0','1','2','3','4','5','6','7','8','9']

const openFile = () => {

    // se houver o terceiro parâmetro
    if (filename) {
        try {
            const fileContent = fs.readFileSync(filename, 'utf-8')
            return fileContent
        }
        catch (error) {
            console.error(error)
            return null
        }
    } else {
        console.log('Usage: node lexer.js <filename>')
        console.log('No filename provided')
        process.exit(-1) // termina com erro
    }

}

const analye = source => {
    let state = 0

    for (let pos = 0; pos < source.length; pos++) {
        const char = source.charAt(pos)

        switch(state) {
            case 0:
                if (char === 'r') state 
        }
    }
}

const source = openFile()
analyze(source)