import './Base.scss';

import { FC } from 'react';
import Form from '../../components/Form/Form';

const Base: FC = () => {
  const initiator: string = 'Иван К.';
  const target: string = 'Экскурсия';

  return (
    <section className='base'>
      <div className='base__container container'>
        <Form initiator={initiator} target={target} />
      </div>
    </section>
  );
};

export default Base;
