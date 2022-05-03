import fs from 'fs/promises'

const fileData = [
    '# Spanish Verbs Masterlist',
    `> Generated at ${(new Date()).getDate()}/${(new Date()).getMonth()}/${(new Date()).getFullYear()}`,
    '  ',
]

const masterlist = (await fs.readFile('./data/verbmasterlist.txt', 'utf-8')).split('\n\n').map(verbdata => {
    return {
        name: verbdata.split('\n')[0].toLowerCase(),
        desc: verbdata.split('\n')[1],
        usage: verbdata.split('\n').slice(2).length > 0 ? verbdata.split('\n').slice(2) : null,
    }
}).sort((a, b) => {
    return a.name.toUpperCase().localeCompare(b.name.toUpperCase());
});

for (const verb of masterlist) {

    await fs.open('./docs/verbs/mlist/' + verb.name + '.md', 'w')
    const tempfile = [
        '# ' + verb.name,
        '',
        '## Definition',
        verb.desc,
        '',
        '## Conjugation',
        '',
        '- Yo: **' + verb.name.toLowerCase().slice(0, -2) + 'o**',
        '- Tu: **' + verb.name.toLowerCase().slice(0, -2) + 'as**',
        '- El/Ella/Usted: **' + verb.name.toLowerCase().slice(0, -2) + 'a**',
        '- Nosotros: **' + verb.name.toLowerCase().slice(0, -2) + 'amos**',
        '- Ustedes/Ellos/Ellas: **' + verb.name.toLowerCase().slice(0, -2) + 'an**',
    ]

    if (verb.usage) {
        tempfile.push('', '## Usage', verb.usage.join('\n'));
    }

    await fs.writeFile('./docs/verbs/mlist/' + verb.name + '.md', tempfile.join('\n'))

    fileData.push(`- [${verb.name}](verbs/mlist/${verb.name}.md)`, `  ${verb.desc}`, '');
}

fs.writeFile('./docs/verbs/masterlist.md', fileData.join('\n'))

console.log('Done!')
