<script lang="ts" setup>
  import {  router  } from '../../router/index'
</script>

<template>
    <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">LOGO</el-menu-item>
      <el-menu-item index="2" @click="router.push('/')">首页</el-menu-item>
    </el-menu>
</template>