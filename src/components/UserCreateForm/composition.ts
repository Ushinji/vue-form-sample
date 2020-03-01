import { ref, computed } from 'vue';

import useField from '../Field/useField';
import { presenceValidator, emailValidator } from '../../utils/validators';
import sleep from '../../utils/sleep';

const useUserCreateForm = () => {
  const userNameField = useField('', presenceValidator);
  const emailField = useField('', emailValidator);
  const isSubmitting = ref(false);
  const error = computed(() => {
    return userNameField.meta.error.value || emailField.meta.error.value;
  });

  const onSubmit = async () => {
    if (error.value) {
      return;
    }
    isSubmitting.value = true;
    console.log(userNameField.props.value.value, emailField.props.value.value);
    await sleep(3000);
    isSubmitting.value = false;
  };

  return {
    userNameField,
    emailField,
    onSubmit,
    meta: {
      error,
      isSubmitting,
    },
  };
};

export default useUserCreateForm;
