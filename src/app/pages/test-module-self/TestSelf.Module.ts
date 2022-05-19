import { TestService } from '@/app/core/service/Test.Service'
import { vueModule } from 'vdi'
import TestSelf from './TestModuleSelfView.vue'
export const TestSelfModule = vueModule({
    providers: [[TestService]],
    declarations: TestSelf
})
