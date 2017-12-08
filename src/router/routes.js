import Hello from '@/components/Hello'
import Lock from '@/components/Lock'
import Share from '@/components/Share'
import Gallary from '@/components/Gallary'

export default {
    routes: [{
        path: '/',
        name: 'Share',
        component: Share
    },
    {
        path: '/lock',
        name: 'Lock',
        component: Hello
    },
    {
        path: '/hello',
        name: 'Hello',
        component: Hello
    },
    {
        path: '/gallary',
        name: 'Gallary',
        component: Gallary
    }
  ]
}