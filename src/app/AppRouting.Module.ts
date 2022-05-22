import { VdiRouterModule, vueModule } from 'vdi'
import { createWebHistory } from 'vue-router'
import { TestSelfModule } from './pages/test-module-self/TestSelf.Module'
import { TestModule } from './pages/test/Test.Module'

export const AppRoutingModule = vueModule({
    imports: [
        VdiRouterModule.forRoot({
            history: createWebHistory(import.meta.env.BASE_URL),
            routes: [
                {
                    path: '/',
                    module: TestSelfModule
                },
                {
                    path: '/test',
                    module: TestModule
                }
            ]
        })
    ]
})
