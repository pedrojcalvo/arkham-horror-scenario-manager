# 🌟 Arkham Horror Scenario Manager

A modern web application for managing Arkham Horror scenarios and campaigns, built with React, TypeScript, Tailwind CSS, and Supabase.

![Arkham Horror](https://img.shields.io/badge/Arkham-Horror-8B5A3C?style=for-the-badge)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

## 🎯 Features

- 🔐 **User Authentication** - Secure signup/login with email confirmation
- 🎨 **Dark Theme** - Atmospheric Arkham Horror-inspired design
- 📱 **Responsive Design** - Works perfectly on desktop and mobile
- ⚡ **Modern Stack** - React 19, TypeScript, Tailwind CSS
- 🛡️ **Type Safety** - Fully typed with TypeScript
- 🚀 **Fast Loading** - Optimized performance with modern React patterns

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS with custom Arkham Horror theme
- **Backend**: Supabase (Authentication, Database)
- **Build Tool**: Create React App
- **Fonts**: Google Fonts (Creepster, Inter)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/arkham-horror-scenario-manager.git
   cd arkham-horror-scenario-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your Supabase credentials:
   ```env
   REACT_APP_SUPABASE_URL=your_supabase_project_url
   REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Configure Supabase**
   - In your Supabase dashboard, go to Authentication > URL Configuration
   - Set Site URL: `http://localhost:3000`
   - Add Redirect URL: `http://localhost:3000/auth/confirm`

5. **Start the development server**
   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Login.tsx        # Login form
│   ├── Signup.tsx       # Registration form
│   ├── Dashboard.tsx    # Main dashboard
│   ├── AuthConfirm.tsx  # Email confirmation handler
│   └── LoadingSpinner.tsx
├── contexts/            # React contexts
│   └── AuthContext.tsx  # Authentication context
├── supabase/           # Supabase configuration
│   └── client.ts       # Supabase client setup
├── types/              # TypeScript type definitions
│   └── index.ts        # Shared types
└── App.tsx             # Main application component
```

## 🎨 Design System

### Colors
- **arkham-dark**: `#1a1a2e` - Primary dark background
- **arkham-purple**: `#16213e` - Secondary dark purple
- **arkham-blue**: `#0f3460` - Deep blue accents
- **arkham-gold**: `#e94560` - Primary accent color
- **arkham-light**: `#f5f7fa` - Light text color

### Typography
- **Headers**: Creepster (horror theme)
- **Body**: Inter (modern, readable)

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (one-way operation)

## 🚦 Authentication Flow

1. **Registration**: User signs up with email and password
2. **Email Confirmation**: Supabase sends confirmation email
3. **Verification**: User clicks link to verify account
4. **Login**: User can now log in with credentials
5. **Dashboard**: Access to the main application

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Update Supabase URLs for production

### Other Platforms
The app can be deployed to any static hosting service like Netlify, AWS S3, or GitHub Pages.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎮 About Arkham Horror

This application is inspired by the Arkham Horror board game series by Fantasy Flight Games. It's designed to help players manage their campaigns and scenarios in the cosmic horror universe created by H.P. Lovecraft.

## 🐛 Bug Reports & Feature Requests

Please use the [GitHub Issues](https://github.com/YOUR_USERNAME/arkham-horror-scenario-manager/issues) to report bugs or request features.

---

**Made with 🖤 for the Arkham Horror community**

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
