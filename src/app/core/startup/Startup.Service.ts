import { Inject } from '@wendellhu/redi'
import { LogService, VDI_LOG, type APP_INITIALIZER_TYPE } from 'vdi'
import { TestService } from '../service/Test.Service'

export class StartupService implements APP_INITIALIZER_TYPE {
    constructor(
        @Inject(VDI_LOG) public VLong: LogService,
        @Inject(TestService) public TestService: TestService
    ) {}
    startup() {
        return new Promise((resolve) => {
            return setTimeout(() => {
                this.TestService.inc()
                this.VLong.primary('startup中我们修改了TestService的count值为1')
                resolve(true)
            }, 1000)
        })
    }
}
