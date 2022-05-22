import { VdiRouterModule, vueModule } from 'vdi'

export const TestModule = vueModule({
    imports: [
        VdiRouterModule.forChild([
            {
                path: '/test/father',
                component: () => import('./TestFatherView.vue')
            },
            {
                path: '/test/self',
                component: () => import('./TestSelfView.vue')
            }
        ])
    ]
})
