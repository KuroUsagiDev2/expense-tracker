# 🚀 Expense Tracker (Laravel + Svelte)

## **Overview**
Expense Tracker is a **full-stack web application** that allows users to track their income and expenses efficiently. Built with **Laravel 11** for the backend and **SvelteKit** for the frontend, it provides a seamless experience for managing personal finances.

## **Key Features**
✅ **User Authentication** (Sanctum/JWT)  
✅ **CRUD Operations** for income & expenses  
✅ **Category-based expense tracking**  
✅ **CSV Export/Import for financial reports**  
✅ **Real-time data visualization with Chart.js**  
✅ **Dark Mode Support** (optional)  

## **Showcase Feature**
The project highlights **CSV export/import functionality** for financial reports, allowing users to easily back up and restore their expense data.

## **Tech Stack**
### **Backend (Laravel 10)**
- Laravel Sanctum for API authentication
- MySQL/PostgreSQL as the database
- Laravel Eloquent ORM
- API resource controllers for structured endpoints

### **Frontend (SvelteKit)**
- Vite for a fast development experience
- Svelte stores for state management
- Chart.js for expense analytics
- Tailwind CSS for styling

## **Project Structure**
```
expense-tracker/
│── backend/ (Laravel API)
│   ├── app/
│   ├── bootstrap/
│   ├── config/
│   ├── database/
│   ├── routes/
│   ├── tests/
│   ├── .env
│   ├── composer.json
│── frontend/ (SvelteKit)
│   ├── src/
│   │   ├── components/
│   │   ├── routes/
│   │   ├── stores/
│   │   ├── lib/
│   ├── static/
│   ├── package.json
│   ├── vite.config.js
│── .gitignore
│── README.md
```

## **API Endpoints**
### **Authentication**
- `POST /api/register` - Register a new user
- `POST /api/login` - Authenticate user
- `POST /api/logout` - Log out user

### **Expenses**
- `GET /api/expenses` - Fetch all expenses
- `POST /api/expenses` - Add a new expense
- `PUT /api/expenses/{id}` - Update an expense
- `DELETE /api/expenses/{id}` - Delete an expense

### **CSV Import/Export**
- `POST /api/expenses/import` - Import expenses from CSV
- `GET /api/expenses/export` - Export expenses to CSV

## **Setup Instructions**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/expense-tracker.git
cd expense-tracker
```

### **2️⃣ Backend (Laravel API) Setup**
```sh
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

### **3️⃣ Frontend (SvelteKit) Setup**
```sh
cd frontend
npm install
npm run dev
```

## **Deployment Strategy**
- **Backend (Laravel):** Deploy on DigitalOcean, AWS, or Heroku using Docker.
- **Frontend (SvelteKit):** Deploy on Vercel or Netlify.
- **Database:** Managed MySQL/PostgreSQL on AWS RDS or Supabase.

## **Contributing**
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## **License**
[MIT License](LICENSE)