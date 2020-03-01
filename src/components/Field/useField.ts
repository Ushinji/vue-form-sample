import { ref, computed } from 'vue';

const useField = (
  initialValue: string,
  validate: (value: string) => boolean = () => false
) => {
  const value = ref(initialValue);
  const isTouched = ref(false);

  const error = computed(() => {
    return !validate(value.value);
  });

  const onInput = (event: InputEvent) => {
    if (event.target instanceof HTMLInputElement) {
      value.value = event.target.value;
    }
  };

  const onBlur = () => {
    isTouched.value = true;
  };

  return {
    props: { value, onInput, onBlur },
    meta: {
      isTouched,
      error,
    },
  };
};

export default useField;
