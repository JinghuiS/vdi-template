import type { Dependency } from '@wendellhu/redi'
import {
    APP_INITIALIZER,
    CommonModule,
    DIRECTIVE,
    ROUTER_GUARD,
    vueModule
} from 'vdi'
import { TestDirective } from './directive/Test.Directive'
import { TestGuard } from './guard/Test.Guard'
import { StartupService } from './startup/Startup.Service'

// 自定义全局指令
const DIRECTIVE_LIST: Dependency<any>[] = [
    [DIRECTIVE, { useClass: TestDirective }]
]

// 自定义路由守卫
const GUARD_LIST: Dependency<any>[] = [[ROUTER_GUARD, { useClass: TestGuard }]]

export const CoreModule = vueModule({
    imports: [CommonModule],
    providers: [
        ...DIRECTIVE_LIST,
        ...GUARD_LIST,
        [APP_INITIALIZER, { useClass: StartupService }]
    ]
})
