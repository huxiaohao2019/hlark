const replace = require('replace-in-file');
const fs = require('fs');

const filepath = 'index.d.ts';
const libName = 'hlark';

const options = {
    files: filepath,
    from: /export default/g,
    to: 'export =',
};

async function r1() {
    try {
        const results = await replace(options)
        console.log('Replacement results:', results);
    }
    catch (error) {
        console.error('Error occurred:', error);
    }
}
r1();

fs.appendFile(filepath, 'export as namespace ' + libName + ';\n', function () {
    console.log('ok');
});