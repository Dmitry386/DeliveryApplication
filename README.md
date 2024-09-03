# Проект:
Web приложение для приемки заказа на доставку со следующим функционалом:

1. Форма создания нового заказа (все поля обязательны для заполнения):
- Город отправителя
- Адрес отправителя
- Город получателя
- Адрес получателя
- Вес груза
- Дата забора груза

2. Форма отображения списка заказов: все созданные заказы должны отображаться в отдельной форме. Помимо полей, введенных пользователем при создании заказа, должен отображаться автоматически сгенерированный номер заказа.

3. Форма просмотра созданного заказа в режиме чтения. Должна открываться при клике на заказ в списке заказов.

# Стек технологий
* ASP.NET 8
* Entity Framework
* PostgeSQL
* React.JS
* Next.JS
* Ant Design
* Docker

# Запуск backend
```
Открыть проект с помощью  Visual Studio 2022
docker-compose up -d
dotnet ef migrations add init -s .\DeliveryApp.API\ -p .\DeliveryApp.DataAccess\
dotnet ef database update -s .\DeliveryApp.API\ -p .\DeliveryApp.DataAccess\
Запустить проект (https)
```
# Запуск frontend
```
cd .\deliveryapp\
npm run dev
```

# Браузер
```
https://localhost:7051/swagger/index.html
http://localhost:3000/
```

# Демонстрация
https://youtu.be/ItJAcsqAe2c

#
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/ItJAcsqAe2c/0.jpg)](https://www.youtube.com/watch?v=ItJAcsqAe2c)