import { ref, readonly } from 'vue'

export class TestService {
    private _count = ref(0)
    public count = readonly(this._count)

    public inc() {
        this._count.value++
    }
}
