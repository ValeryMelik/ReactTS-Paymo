import './TransactionError.scss';

import { FC } from 'react';
import { useLocation } from 'react-router-dom';

const TransactionError: FC = () => {
  const location = useLocation();
  const { payload, error } = location.state || {};

  if (!payload) {
    return <p>Нет данных для отображения.</p>;
  }

  return (
    <div className='transaction-error'>
      <div className='transaction-error__container container'>
        <div className='transaction-error__content'>
          <h1 className='title-reset transaction-error__title'>
            API недоступен
          </h1>
          <p className='margin-reset transaction-error__text'>
            Так как это тестовое задание, API в данном случае не существует.
            <br /> Если бы API существовал, был бы отправлен следующий запрос:
          </p>
          <pre className='transaction-error__json'>
            {JSON.stringify(payload, null, 2)}
          </pre>
          <p>
            <span className='transaction-error__error'>Ошибка:</span>{' '}
            {error.message}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransactionError;
