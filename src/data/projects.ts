interface Project {
    id: number
    name: string
    image: string
    description: string
    keyFeatures: Array<string>
    preview: string
    sourceCode: string
}

const projects: Project[] = [
    {
        id: 1,
        name: 'Dashboard',
        image: '/mock-profile-photo.jpg',
        description: 'It is a simple dashboard It is a simple dashboard It is a simple dashboard It is a simple dashboard It is a simple dashboardIt is a simple dashboard',
        keyFeatures: ['crud operation', 'jwt auth', 'forget password'],
        preview: 'https://hiteshchoudhary.com',
        sourceCode: 'https://github.com/pritamgupta-07/admin-dashboard'
    },
    {
        id: 2,
        name: 'Dashboard',
        image: '/mock-profile-photo.jpg',
        description: 'It is a simple dashboard It is a simple dashboard It is a simple dashboard It is a simple dashboard It is a simple dashboardIt is a simple dashboard',
        keyFeatures: ['crud operation', 'jwt auth', 'forget password'],
        preview: 'https://hiteshchoudhary.com',
        sourceCode: 'https://github.com/pritamgupta-07/admin-dashboard'
    },
    {
        id: 3,
        name: 'Dashboard',
        image: '/mock-profile-photo.jpg',
        description: 'It is a simple dashboard It is a simple dashboard It is a simple dashboard It is a simple dashboard It is a simple dashboardIt is a simple dashboard',
        keyFeatures: ['crud operation', 'jwt auth', 'forget password'],
        preview: 'https://hiteshchoudhary.com',
        sourceCode: 'https://github.com/pritamgupta-07/admin-dashboard'
    },
    {
        id: 4,
        name: 'Dashboard',
        image: '/mock-profile-photo.jpg',
        description: 'It is a simple dashboard It is a simple dashboard It is a simple dashboard It is a simple dashboard It is a simple dashboardIt is a simple dashboard',
        keyFeatures: ['crud operation', 'jwt auth', 'forget password'],
        preview: 'https://hiteshchoudhary.com',
        sourceCode: 'https://github.com/pritamgupta-07/admin-dashboard'
    },
]

export default projects