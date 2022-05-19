import { Inject } from '@wendellhu/redi'
import { VDI_ROUTER } from 'vdi'
import { LogService, VDI_LOG, type APP_INITIALIZER_TYPE } from 'vdi'
import type { Router } from 'vue-router'
import { TestService } from '../service/Test.Service'

export class StartupService implements APP_INITIALIZER_TYPE {
    constructor(
        @Inject(VDI_LOG) public VLog: LogService,
        @Inject(TestService) public TestService: TestService,
        @Inject(VDI_ROUTER) public router: Router
    ) {}
    startup() {
        return new Promise((resolve) => {
            return setTimeout(() => {
                this.TestService.inc()
                this.router.push('/test/father')
                this.VLog.primaryGroup('startup中我们都干了什么', [
                    () => console.log('我们修改了TestService的count值为1'),
                    () => console.log('我们跳转到了/test/father')
                ])
                resolve(true)
            }, 1000)
        })
    }
}
