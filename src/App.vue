<template>
  <div>
    <h1>ユーザー作成フォーム</h1>
    <UserCreateForm />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import UserCreateForm from '@/components/UserCreateForm/index.vue';

export default defineComponent({
  components: {
    UserCreateForm,
  },
});
</script>

<style lang="scss">
@import '../node_modules/bulma/bulma.sass';
</style>
