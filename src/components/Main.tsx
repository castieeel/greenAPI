import React from 'react'

// interface IQuery {
//   idInstance: number
//   apiTokenInstance: string
// }

export const Main: React.FunctionComponent = () => {
  return (
<div>
<div>
Список диалогов
{/* { isLoading && <p>Идет загрузка...</p>}
{ isError && <p>Ошибка</p>} */}
<ul>
{/* { chats?.map(chat => (
      <li key={ chat.id } onClick= {() => { clickHandler(chat.id) }}>
       { chat.name }
      </li>
)) } */}
</ul>
</div>
<div>
Отправка сообщений
</div>
</div>
  )
}
