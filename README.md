# 📋 Task Manager

> Веб-приложение для управления личными задачами с JWT-авторизацией

[![Python](https://img.shields.io/badge/Python-3.12-blue?style=for-the-badge&logo=python)](https://python.org)
[![Django](https://img.shields.io/badge/Django-5.0-green?style=for-the-badge&logo=django)](https://djangoproject.com)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

---

## 📖 Описание

**Task Manager** — это полноценное веб-приложение для управления задачами. Оно позволяет пользователям создавать, редактировать, отмечать выполненные и удалять свои задачи. Авторизация построена на JWT-токенах, а интерфейс адаптирован под мобильные устройства.

Проект создан в рамках стажировки и демонстрирует навыки **Fullstack-разработки** на современном стеке.

---

## 🚀 Демо

> **Скоро будет доступно по ссылке**

---

## 📦 Стек технологий

### Бэкенд
| Технология | Версия | Описание |
|------------|--------|----------|
| Django | 5.0.x | Основной фреймворк |
| Django REST Framework | 3.15.x | API-интерфейс |
| Simple JWT | 5.4.x | JWT-авторизация |
| SQLite / PostgreSQL | — | База данных |

### Фронтенд
| Технология | Версия | Описание |
|------------|--------|----------|
| React | 18.3.x | UI-библиотека |
| React Router | 6.27.x | Маршрутизация |
| Axios | 1.7.x | HTTP-запросы |
| Vite | 5.4.x | Сборка проекта |

---

## ⚙️ Функциональность

| Функция | Описание |
|---------|----------|
| 🔐 Авторизация | JWT-токены с автоматическим обновлением |
| 📝 Регистрация | Создание нового пользователя |
| ➕ Создание задач | Добавление с заголовком и описанием |
| ✏️ Редактирование | Изменение любой задачи |
| ✅ Отметка о выполнении | Переключение статуса |
| 🗑️ Удаление | Безвозвратное удаление |
| 👤 Персональность | Каждый видит только свои задачи |
| 📱 Адаптивность | Работает на телефонах и планшетах |

---

## 🛠️ Запуск проекта локально

### 📥 Клонирование

```bash
#backend
cd backend

# Создание виртуального окружения
python -m venv venv

# Активация (Windows)
venv\Scripts\activate

# Активация (Mac/Linux)
source venv/bin/activate

# Установка зависимостей
pip install -r requirements.txt

# Миграции
python manage.py migrate

# Создание суперпользователя
python manage.py createsuperuser

# Запуск сервера
python manage.py runserver


#frontend

cd frontend

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev
```

🤝 Как внести вклад
Форкни репозиторий

Создай ветку: git checkout -b feature/your-feature

Сделай коммит: git commit -m '✨ Add: your feature'

Запушь: git push origin feature/your-feature

Открой Pull Request

👤 Автор
Rusik192010

GitHub: @Rusik192010

SourceCraft: safrus19062010

📄 Лицензия
Этот проект распространяется под лицензией MIT.
Подробнее: MIT License

⭐ Поддержать проект
Если проект тебе понравился — поставь ⭐ на GitHub!
git clone https://github.com/Rusik192010/task-manager.git
cd task-manager
