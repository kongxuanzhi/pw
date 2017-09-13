import Hello from '@/components/Hello'
import Lock from '@/components/Lock'

export default {
    routes: [{
        path: '/',
        name: 'Lock',
        component: Lock
    },
    {
        path: '/',
        name: 'Hello',
        component: Hello
    }]
}