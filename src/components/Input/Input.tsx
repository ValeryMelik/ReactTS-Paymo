import './Input.scss';
import { FC } from 'react';
import InputMask from 'react-input-mask';
import { UseFormRegister } from 'react-hook-form';
import { TPayment } from '../../schemas';

interface InputProps {
  labelText: string;
  htmlFor: string;
  type?: string;
  register: UseFormRegister<TPayment>;
  name: 'message' | 'cardNumber' | 'expirationDate' | 'cvv' | 'amount' | 'name';
  error?: string;
  textArea?: boolean;
  mask?: string;
  placeholder?: string;
}

const Input: FC<InputProps> = ({
  labelText,
  htmlFor,
  type = 'text',
  register,
  name,
  error,
  textArea = false,
  mask,
  placeholder,
}) => {
  return (
    <div className='input'>
      <label className='input__label' htmlFor={htmlFor}>
        {labelText}
      </label>
      {textArea ? (
        <textarea
          className={`input__field input__field_textarea ${
            error ? 'input__field_error' : ''
          }`}
          id={htmlFor}
          {...register(name)}
          placeholder={placeholder}
        />
      ) : mask ? (
        <InputMask
          mask={mask}
          maskChar=''
          {...register(name)}
          className={`input__field ${error ? 'input__field_error' : ''} `}
          id={htmlFor}
          type={type}
          placeholder={placeholder}
          alwaysShowMask={true}
        />
      ) : (
        <input
          className={`input__field ${error ? 'input__field_error' : ''}`}
          id={htmlFor}
          type={type}
          {...register(name)}
          placeholder={placeholder}
        />
      )}
      <span className={`input__error ${error ? 'input__error_active' : ''}`}>
        {error}
      </span>
    </div>
  );
};

export default Input;
