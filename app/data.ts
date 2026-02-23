type Project = {
  name: string
  description: string
  link: string
  image: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  id: string
  description: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Loan Eligibility Checker',
    description:
      'A comprehensive machine learning system for assessing loan eligibility of Malaysian Small and Medium Enterprises (SMEs) in the Food and Beverages sector.',
    link: 'https://github.com/mzaidaqil/loan-eligibility-ml-new',
    image: '/projects/projects1.webp',
    id: 'project1',
  },
  {
    name: 'Runtrackr',
    description: 'RunTrackr is a web-based event management system specifically designed for the Kuala Lumpur RunFest 2025.',
    link: 'https://github.com/mzaidaqil/runtrackr-web',
    image: '/projects/projects2.webp',
    id: 'project2',
  },
  {
    name: 'Urban Heat Island (UHI) Index Prediction',
    description: 'The project aims to predict the Urban Heat Island (UHI) Index for various locations in New York City using satellite imagery data and machine learning techniques.',
    link: 'https://github.com/mzaidaqil/EY-Open-Data-Science-Challenge-2025',
    image: '/projects/projects3.webp',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Trez Sport',
    title: 'Web Developer & Social Media Admin',
    start: '2024',
    end: '2025',
    id: 'work1',
    description: `•	Collaborated with cross-functional teams to design, develop, and maintain an engaging and user-friendly e-commerce website using Elementor software, and implementing WooCommerce to manage backend services of the ecommerce store resulting best customer experience on websites.

•	Implementing WooCommerce to manage the backend operations of the ecommerce store, including order processing, inventory management, and sakes tracking, optimizing efficiency and accuracy. 

•	Design, edit & publish contents on Tiktok with focused on sports branding using Capcut, Adobe Illustrators & Photoshop
`
  },
  {
    company: 'TYPO Cotton On',
    title: 'Retail Assistant',
    start: '2023',
    end: '2024',
    id: 'work2',
    description: `•	Processed over 100+ daily transactions while maintaining exceptional customer service and achieving daily sales targets through personalized product recommendations.

•	Managed inventory operations including restocking merchandise, organizing stockroom, and conducting weekly stock counts to ensure optimal product availability

`
  },
  {
    company: 'Putrajaya Corporation',
    title: 'Civil Engineering Intern',
    start: '2023',
    end: '',
    id: 'work3',
    description: `•	Collaborated with Eagle Engineering & Trading SDN. BHD. To collect borehole data and conduct soil exploration at Taman Ekuestrian Presint 8, Putrajaya. Successfully completed 70% of the soil exploration from sampling to laboratory testing.

•	Analyzed data obtain from soil exploration and conducted laboratory tests and compared the current soil conditions with 2013 data, offering insights for informed decision-making based on consultation from department engineers.
`
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'WIP',
    description: 'WIP',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/mzaidaqil',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/zaid-aqil-7a126b181/',
  },
]

export const EMAIL = 'zaidaqil.work@gmail.com'
