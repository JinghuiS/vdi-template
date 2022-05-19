<script setup lang="ts">
import { onProvider, useDependency } from 'vdi'
import { TestService } from '@/app/core/service/Test.Service'

onProvider([[TestService]])
const TestServiceSelf = useDependency(TestService, { self: true })
</script>
<template>
    <div class="self">
        TestServiceSelf: {{ TestServiceSelf.count }}
        <button @click="TestServiceSelf.inc">inc</button>
        <div>在子组件重新声明的依赖，点击inc时只会响应子组件的inc</div>
    </div>
</template>

<style>
.self {
    margin-top: 100px;
    text-align: center;
}
</style>
