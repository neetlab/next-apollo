import React, { useState, useCallback } from "react";
import { NextPage } from "next";
import { useTranslation } from '../i18next';

const Index: NextPage = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => setCount(count + 1), [count]);
  const handleDecrement = useCallback(() => setCount(count - 1), [count]);

  return (
    <div>
      <h3>{t('index.title', 'Your count: {{count}}', { count })}</h3>
      <button onClick={handleIncrement}>{t('index.add', 'Add')}</button>
      <button onClick={handleDecrement}>{t('index.subtract', 'Subtract')}</button>
    </div>
  );
};

Index.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Index;
