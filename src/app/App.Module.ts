import { vueModule } from 'vdi'
import { AppRoutingModule } from './AppRouting.Module'
import App from './AppView.vue'
import { CoreModule } from './core/Core.Module'
import { TestService } from './core/service/Test.Service'

export const AppModule = vueModule({
    declarations: App,
    providers: [[TestService]],
    imports: [CoreModule, AppRoutingModule]
})
