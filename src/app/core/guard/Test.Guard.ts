import { Inject } from '@wendellhu/redi'
import { LogService, VDI_LOG, type RouterGuardImplements } from 'vdi'
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

export class TestGuard implements RouterGuardImplements {
    constructor(@Inject(VDI_LOG) public log: LogService) {}
    beforeEach(
        to: RouteLocationNormalized,
        from: RouteLocationNormalized,
        next: NavigationGuardNext
    ) {
        this.log.primary('TestGuard beforeEach', '#00a870')
        next()
    }
}
