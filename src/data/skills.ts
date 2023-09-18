interface Skills {
    name: string
    src: string
    style?: string
}

export const frontEnd: Skills[] = [
    {name: 'Html', src: 'html.svg'},
    {name: 'CSS', src: 'css.svg'},
    {name: 'JavaScript', src: 'javascript.svg'},
    {name: 'TypeScript', src: 'typescript.svg'},
    {name: 'ReactJs', src: 'reactjs.svg'},
    {name: 'NextJs', src: 'nextjs.svg', style: 'bg-white border rounded-full'},
    {name: 'Material UI', src: 'material-ui.svg'},
    {name: 'Tailwind CSS', src: 'tailwind-css.svg'},
]

export const backEnd: Skills[] = [
    {name: 'NodeJs', src: 'nodejs.svg'},
    {name: 'ExpressJs', src: 'expressjs.svg'},
    {name: 'MongoDB', src: 'mongodb.svg'},
    {name: 'Redis', src: 'redis.svg'},
    {name: 'Postman', src: 'postman.svg', style: 'bg-white border rounded-full'},
]

export const other: Skills[] = [
    {name: 'Git', src: 'git.svg'},
    {name: 'Jest', src: 'jest.svg'},
]