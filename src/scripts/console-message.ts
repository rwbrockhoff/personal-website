console.log(
  `
    %c🚀 Welcome to the console, fellow developer!
    
    If you're here, you probably appreciate clean code and
    attention to detail. Let's connect!

    💼 I'm currently seeking full-stack development opportunities.

    📧 Let's build something amazing together:
        ryanbrockhoff@protonmail.com

    🔗 GitHub: github.com/rwbrockhoff
    💼 LinkedIn: linkedin.com/in/rwbrockhoff
    `,
  'color: #7a845e; font-family: monospace; font-size: 12px; line-height: 1.4;'
);

// Add some interactive easter eggs
console.log(
  '%c🎯 Try these console commands:',
  'color: #ff6b6b; font-weight: bold; font-size: 14px;'
);

console.log('%cshowSkills()', 'color: #4ecdc4; font-family: monospace;');
console.log('%cshowContact()', 'color: #4ecdc4; font-family: monospace;');

// Interactive functions

(window as any).showSkills = (): void => {
  const skills: Record<string, string[]> = {
    languages: ['JavaScript/Typescript', 'Python'],
    frameworks: ['React', 'Node.js'],
    databases: ['PostgreSQL'],
    tools: ['Git', 'Docker', 'AWS'],
    analytics: ['Pandas', 'Matplotlib', 'Numpy', 'Seaborn'],
  };

  console.group('%c🛠️ Technical Skills', 'color: #f39c12; font-weight: bold; font-size: 14px;');
  Object.entries(skills).forEach(([category, items]: [string, string[]]) => {
    console.log(
      `%c${category.toUpperCase()}:`,
      'color: #e67e22; font-weight: bold;',
      items.join(', ')
    );
  });
  console.groupEnd();
};

(window as any).showContact = (): void => {
  console.log(
    `
    %c📬 Ready to collaborate? Here's how to reach me:
    
   %c📧 Email: ryanbrockhoff@protonmail.com
    🐙 GitHub: github.com/rwbrockhoff
    💼 LinkedIn: linkedin.com/in/rwbrockhoff`,

    'color: #9b59b6; font-weight: bold; font-size: 14px;',
    'color: #3498db; font-family: monospace;'
  );
};
