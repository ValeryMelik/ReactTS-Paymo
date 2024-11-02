import './Form.scss';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../Input';
import Button from '../Button/Button';
import { zodResolver } from '@hookform/resolvers/zod';

import Schemas, { TPayment } from '../../schemas';

import useTransaction from '../../hooks/useTransaction';

interface FormProps {
  initiator: string;
  target: string;
}

const Form: FC<FormProps> = ({ initiator = '', target = '' }) => {
  const { payment } = Schemas;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TPayment>({
    resolver: zodResolver(payment),
  });

  const { mutate, isPending } = useTransaction();

  const onSubmit = (data: TPayment): void => {
    const transactionData = {
      amount: +data.amount,
      custom_data: {
        initiator: data.name,
        collection: target,
      },
    };

    mutate(transactionData);
  };

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <h1 className='title-reset form__title'>
        {`${initiator} собирает 10 000 ₽ на "${target}"`}
      </h1>

      <Input
        labelText='Номер карты'
        htmlFor='cardNumber'
        register={register}
        name='cardNumber'
        error={errors.cardNumber?.message as string | undefined}
        mask='9999 9999 9999 9999'
      />

      <div className='form__input-block'>
        <Input
          labelText='Срок действия'
          htmlFor='expirationDate'
          register={register}
          name='expirationDate'
          error={errors.expirationDate?.message as string | undefined}
          mask='99/99'
        />

        <Input
          labelText='CVV'
          htmlFor='cvv'
          type='password'
          register={register}
          name='cvv'
          error={errors.cvv?.message as string | undefined}
          mask='999'
        />
      </div>

      <Input
        labelText='Сумма перевода'
        htmlFor='amount'
        register={register}
        name='amount'
        error={errors.amount?.message as string | undefined}
      />

      <Input
        labelText='Ваше имя'
        htmlFor='name'
        register={register}
        name='name'
        error={errors.name?.message as string | undefined}
      />

      <Input
        labelText='Сообщение получателю'
        htmlFor='message'
        register={register}
        name='message'
        error={errors.message?.message as string | undefined}
        textArea
      />

      <div className='form__btn-block'>
        <Button type='submit' kind='primary' isLoading={isPending}>
          Перевести
        </Button>
        <Button type='button' kind='secondary'>
          Вернуться
        </Button>
      </div>
    </form>
  );
};

export default Form;
