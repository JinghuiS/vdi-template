<script setup lang="ts">
import { useDependency } from 'vdi'
import { TestService } from '@/app/core/service/Test.Service'

const TestServiceSelf = useDependency(TestService)
</script>
<template>
    <div class="self">
        TestServiceModuleSelf: {{ TestServiceSelf.count }}
        <button @click="TestServiceSelf.inc">inc</button>
        <div>在子模块重新声明的依赖，点击inc时 该模块下的组件都会响应</div>
    </div>
</template>

<style>
.self {
    margin-top: 100px;
    text-align: center;
}
</style>
