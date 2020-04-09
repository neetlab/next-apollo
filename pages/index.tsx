import React, { useState, useCallback } from "react";
import { NextPage } from "next";
import { useTranslation } from '../i18next';

const Index: NextPage = () => {
  const { t } = useTranslation();
  const [count, increment] = useState(0);

  const handleClick = useCallback(() => increment(count + 1), [count]);

  return (
    <div>
      <h3>{t('index.title', 'Your count: {{count}}', { count })}</h3>
      <button onClick={handleClick}>{t('index.click', 'Click')}</button>
    </div>
  );
};

export default Index;
