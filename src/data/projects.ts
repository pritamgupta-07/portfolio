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
        image: '/admin-dashboard.png',
        description: 'Our MERN dashboard: The all-in-one command center for managing and visualizing data, simplified for you.',
        keyFeatures: ['CRUD operation', 'Jwt auth', 'forget/reset password', 'Admin and User based access'],
        preview: 'https://admin-dashboard-s3zt.onrender.com',
        sourceCode: 'https://github.com/pritamgupta-07/admin-dashboard'
    },
    {
        id: 2,
        name: 'Chat App',
        image: '/chat-app.png',
        description: 'Discover our Chat App — an uncomplicated chat app for straightforward conversations, powered by the latest technologies including TypeScript, Redis database, and Next.js for a seamless user experience.',
        keyFeatures: ['Quick login with Google', 'Add friend with Email', 'Send Messages at realtime'],
        preview: 'https://chat-app-szxt.netlify.app',
        sourceCode: 'https://github.com/pritamgupta-07/chat-app'
    },
    
]

export default projects