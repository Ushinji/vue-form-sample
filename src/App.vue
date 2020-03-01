<template>
  <section class="section">
    <div class="container">
      <h1 class="title">ユーザー作成フォーム</h1>
      <UserCreateForm />
    </div>
  </section>
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
