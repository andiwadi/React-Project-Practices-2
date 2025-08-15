import { useState } from 'react';

// این کامپوننت اصلی اپلیکیشن To-Do است.
export default function App() {
  // تعریف وضعیت (state) برای نگهداری لیست کارها
  const [todos, setTodos] = useState([]);
  // تعریف وضعیت برای نگهداری متن ورودی کاربر
  const [newTodo, setNewTodo] = useState('');

  // تابع برای اضافه کردن یک کار جدید
  const addTodo = (e) => {
    // جلوگیری از رفرش شدن صفحه هنگام ارسال فرم
    e.preventDefault();
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo(''); // پاک کردن ورودی پس از اضافه شدن کار
    }
  };

  // تابع برای حذف یک کار از لیست
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // تابع برای تغییر وضعیت (تکمیل شده / نشده) یک کار
  const toggleCompleted = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center p-4 sm:p-8 font-sans">
      <div className="w-full max-w-xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8">
        {/* عنوان برنامه */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-indigo-600 dark:text-indigo-400">
          لیست کارهای روزانه
        </h1>

        {/* فرم برای اضافه کردن کار جدید */}
        <form onSubmit={addTodo} className="flex gap-2 mb-8">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="یک کار جدید اضافه کنید..."
            className="flex-grow p-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300"
          >
            افزودن
          </button>
        </form>

        {/* نمایش لیست کارها */}
        <div className="space-y-4">
          {todos.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400 text-lg">
              لیست شما خالی است. یک کار جدید اضافه کنید!
            </p>
          ) : (
            todos.map(todo => (
              <div
                key={todo.id}
                className={`flex items-center gap-4 p-4 rounded-xl shadow-sm transition-all duration-300 ${
                  todo.completed ? 'bg-green-100 dark:bg-green-800' : 'bg-gray-50 dark:bg-gray-700'
                }`}
              >
                {/* دکمه checkbox برای تغییر وضعیت */}
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleCompleted(todo.id)}
                  className="form-checkbox h-6 w-6 text-indigo-600 rounded-full transition-all duration-300 transform scale-125 focus:ring-2 focus:ring-indigo-500"
                />

                {/* متن کار */}
                <span className={`flex-grow text-lg sm:text-xl ${todo.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-white'}`}>
                  {todo.text}
                </span>

                {/* دکمه حذف کار */}
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="p-2 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-500 rounded-full hover:bg-red-100 dark:hover:bg-red-900 transition-all duration-300"
                  aria-label="حذف کار"
                >
                  {/* استفاده از SVG برای آیکون سطل زباله به جای پکیج react-icons */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
