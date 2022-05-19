<script setup lang="ts">
import { useDependency } from 'vdi'
import { TestService } from '@/app/core/service/Test.Service'

const TestServiceSelf = useDependency(TestService)
</script>

<template>
    <div class="father">
        FatherTestServiceSelf:{{ TestServiceSelf.count }}
        <button @click="TestServiceSelf.inc">inc</button>
        <div>父子组件共用一个状态，点击inc时都会响应</div>
    </div>
</template>

<style>
.father {
    margin-top: 100px;
    text-align: center;
}
</style>
