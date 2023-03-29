import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function Paragraph() {
  const { theme } = useContext(ThemeContext);

  return (
    <p className={theme}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised{' '}
    </p>
  );
}
