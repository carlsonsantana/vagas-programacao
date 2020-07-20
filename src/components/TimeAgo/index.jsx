import React from 'react';

import DateDiff from 'date-diff';

export default function TimeAgo({date}) {
  const diff = new DateDiff(new Date(), new Date(date));
  const daysAgo = Math.round(diff.days());
  const hoursAgo = Math.round(diff.hours());
  const minutesAgo = Math.ceil(diff.minutes());
  const showDays = daysAgo >= 1;
  const showHours = !showDays && (hoursAgo >= 1);

  return (
    <small>
      {
        showDays ? (daysAgo > 1 ? `${daysAgo} dias ` : '1 dia ') : (
          showHours ? (hoursAgo > 1 ? `${hoursAgo} horas ` : '1 hora ') : (
            minutesAgo > 1 ? `${minutesAgo} minutos ` : '1 minuto '
          )
        )
      }
      atrás
    </small>
  );
}
