import {useState} from 'react';

interface UseFormProps<T> {
  initialValue: T;
}

export const useForm = ({initialValue}: UseFormProps<T>) => {
  const [values, setValues] = useState(initialValue);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChangeText = (name: keyof T, text: string) => {
    setValues({...values, [name]: text});
  };

  const handleBlur = (name: keyof T) => {
    setTouched({...touched, [name]: true});
  };

  const getTextInputProps = (name: keyof T) => {
    const value = values[name];
    const onChangeText = (text: string) => handleChangeText(name, text);
    const onBlur = () => handleBlur(name);

    return {value, onChangeText, onBlur};
  };

  return {values, touched, getTextInputProps};
};
