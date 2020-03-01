<template>
  <form @submit.prevent>
    <div class="field">
      <label class="label" for="user-name">ユーザー名</label>
      <div class="control">
        <input
          id="user-name"
          name="user-name"
          type="text"
          :value="userNameField.props.value.value"
          @input="userNameField.props.onInput"
          @blur="userNameField.props.onBlur"
        />
      </div>
      <p
        class="help"
        v-show="
          userNameField.meta.isTouched.value && userNameField.meta.error.value
        "
      >
        ユーザー名を入力してください。
      </p>
    </div>

    <div class="field">
      <label class="label" for="email">メールアドレス</label>
      <div class="control">
        <input
          id="email"
          name="email"
          type="text"
          :value="emailField.props.value.value"
          @input="emailField.props.onInput"
          @blur="emailField.props.onBlur"
        />
      </div>
      <p
        class="help"
        v-show="emailField.meta.isTouched.value && emailField.meta.error.value"
      >
        メールアドレスの形式で入力してください。
      </p>
    </div>
    <button type="submit" @click="onSubmit">作成する</button>
  </form>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import useField from '../Field/useField';
import { presenceValidator, emailValidator } from '../../utils/validators';

export default defineComponent({
  setup() {
    const userNameField = useField('', presenceValidator);
    const emailField = useField('', emailValidator);

    const onSubmit = async () => {
      if (userNameField.meta.error.value && emailField.meta.error.value) {
        return;
      }
      console.log(
        userNameField.props.value.value,
        emailField.props.value.value
      );
    };

    return { userNameField, emailField, onSubmit };
  },
});
</script>
