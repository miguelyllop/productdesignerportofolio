export function ModeToggle({ currentTheme, onToggle }) {
  console.log('Rendering ModeToggle');
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {currentTheme === 'dark' ? '🌞' : '🌙'}
    </button>
  );
}
