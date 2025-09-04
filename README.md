# Oslo Chat - Campaign Targeting Frontend

A React + Vite application that recreates a campaign targeting interface with Oslo chat functionality.

## 🚀 Features

- **Interactive Oslo Chat Interface** - AI-powered conversation for campaign targeting
- **Campaign Progress Tracking** - Multi-step progress bar with Who/What/Where/When tabs
- **Company Profile Configuration** - Headcount, location, and revenue range settings
- **Prospect Profile Setup** - Department targeting options
- **Responsive Design** - Clean, modern UI matching the original design
- **Real-time Form Updates** - Dynamic form fields with dropdown selections

## 📸 Screenshot

![Oslo Chat Interface](./src/assets/screenshot.png)

*Campaign targeting interface with Oslo chat and form configurations - Live application running on localhost:5173*

## 🛠️ Tech Stack

- **React 18.2.0** - Component-based UI framework
- **Vite 4.4.5** - Fast development server and build tool
- **TypeScript** - Type-safe development
- **Material-UI 5.14.5** - Component library and design system
- **Emotion** - CSS-in-JS styling solution

## 🏗️ Project Structure

```
src/
├── App.tsx                 # Main application layout with sidebar and header
├── main.tsx               # Application entry point
├── index.css              # Global styles and Inter font import
└── components/
    ├── MainInterface.tsx  # Split-view chat and form interface
    └── TargetingForm.tsx  # Campaign targeting form component
```

## 🎨 Design Features

- **#FFB800 Yellow Theme** - Consistent brand color throughout
- **Inter Font Family** - Modern typography
- **64px Sidebar** - Navigation with diamond icon
- **Progress Bar** - Visual campaign step tracking
- **Chat Interface** - Oslo AI assistant with reaction buttons
- **Form Sections** - Company and Prospect profile configurations

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ayp47098/Frontend-Oslo-Chat.git
cd Frontend-Oslo-Chat
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5174`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Key Components

### App.tsx
- Main application layout
- Theme provider setup
- Sidebar navigation with diamond icon
- Progress bar with campaign steps
- Tab navigation (Who/What/Where/When)

### MainInterface.tsx
- Split-view layout (chat + forms)
- Oslo chat interface with messages
- Reaction buttons (👍/👎)
- Company and Prospect profile forms

### TargetingForm.tsx
- Campaign targeting configuration
- Dropdown selections for various criteria
- Form validation and state management

## 🎯 Features Implemented

- ✅ Exact UI recreation from reference design
- ✅ Oslo chat with conversation flow
- ✅ Progress tracking with visual indicators
- ✅ Company profile configuration
- ✅ Prospect profile setup
- ✅ Responsive layout
- ✅ Material-UI integration
- ✅ TypeScript implementation

## 🎨 Color Scheme

- **Primary Yellow**: #FFB800
- **Text Colors**: #1a1a1a, #666666
- **Background**: #f8f9fa, #ffffff
- **Borders**: #e0e0e0, #e9ecef

## 📱 Responsive Design

The interface is designed to work across different screen sizes while maintaining the clean, professional appearance of the original design.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from the original campaign targeting interface
- Material-UI for the component library
- Vite for the excellent development experience
