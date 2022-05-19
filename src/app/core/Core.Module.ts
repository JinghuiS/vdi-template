import type { Dependency } from '@wendellhu/redi'
import { APP_INITIALIZER, CommonModule, DIRECTIVE, vueModule } from 'vdi'
import { TestDirective } from './directive/Test.Directive'
import { StartupService } from './startup/Startup.Service'

const DIRECTIVE_LIST: Dependency<any>[] = [
    [DIRECTIVE, { useClass: TestDirective }]
]

export const CoreModule = vueModule({
    imports: [CommonModule],
    providers: [
        ...DIRECTIVE_LIST,
        [APP_INITIALIZER, { useClass: StartupService }]
    ]
})
