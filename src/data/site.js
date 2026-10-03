// Source: LinkedIn export. TODO: replace github with your real profile URL.
export const site = {
  name: 'Harsh Jha', role: 'Web Designer & Developer', location: 'Banga, Punjab, India',
  tagline: 'Turning ideas into web experiences.',
  intro: "I build modern, responsive and user-focused websites for businesses, creators and organizations. Let's turn your idea into a real digital experience.",
  email: 'hjha1289@gmail.com', linkedin: 'https://www.linkedin.com/in/harshjha08', github: 'https://github.com/harshjha08', cv: '/cv.pdf',
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '', // e.g. https://formspree.io/f/xxxx
  nav: [['/', 'Home'], ['/about', 'About'], ['/projects', 'Work'], ['/services', 'Services'], ['/certificates', 'Credentials'], ['/contact', 'Contact']],
  stack: { Frontend: ['HTML', 'CSS', 'JavaScript', 'React'], Languages: ['Java', 'C', 'C++', 'Python'] },
  education: [['Lovely Professional University', 'BCA, Computer Applications', '2025 – 2028'], ['Govt. Sen. Sec. School Mahil Gaila', '12th, Humanities', 'Mar 2023 – Apr 2024'], ['Govt. Sen. Sec. School Mahil Gaila', '10th', 'Mar 2021 – Apr 2022']],
}
export const isSet = (v) => v && !v.startsWith('[')
