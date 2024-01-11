import { randomUUID } from 'node:crypto'

const database = {
  tools: [
    {
      id: randomUUID(),
      name: 'VS CODE',
      image_url: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png',
      categorie: 'development',
      tags: ['#frontend', '#backend', '#ide']
    },
    {
      id: randomUUID(),
      name: 'Sublime Text',
      image_url: 'https://cdn.icon-icons.com/icons2/1381/PNG/512/sublimetext_94866.png',
      categorie: 'development',
      tags: ['#frontend', '#backend', '#ide']
    },
    {
      id: randomUUID(),
      name: 'Figma',
      image_url: 'https://static-00.iconduck.com/assets.00/apps-figma-icon-2048x2048-ctjj5ab7.png',
      categorie: 'design',
      tags: ['#ui', '#ux', '#layout']
    },
    {
      id: randomUUID(),
      name: 'Gimp',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/The_GIMP_icon_-_gnome.svg/2048px-The_GIMP_icon_-_gnome.svg.png',
      categorie: 'design',
      tags: ['#ui', '#ux', '#photoeditor']
    },
  ]
}

export default database