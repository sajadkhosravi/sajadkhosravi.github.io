# CV/Portfolio Website

A production-ready, single-page Hugo website for academic and professional CV/portfolio with a dark terminal theme.

## Features

- **Single-page design** with smooth scrolling navigation
- **Dark terminal theme** with programmer aesthetic
- **Fully responsive** and mobile-friendly
- **Print-optimized** with dedicated print styles
- **Accessible** (WCAG AA compliant)
- **Data-driven content** using YAML data files
- **Fast loading** with optimized assets
- **No external dependencies** except for fonts and icons

## Tech Stack

- **Static Site Generator**: Hugo (latest stable, extended)
- **Theme**: Custom `cv-one` theme (MIT licensed)
- **Styling**: Pure CSS with CSS custom properties
- **Icons**: Font Awesome (free version)
- **Fonts**: JetBrains Mono + Inter (Google Fonts)
- **Deployment**: GitHub Pages via GitHub Actions

## Quick Start

### Prerequisites

- Hugo (extended version) installed locally
- Git for version control

### Local Development

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd <repo-name>
   ```

2. **Start the development server**:
   ```bash
   hugo server --buildDrafts --bind 0.0.0.0
   ```

3. **Open your browser** to `http://localhost:1313`

### Customization

#### Personal Information

Edit `data/cv.yaml` to update your personal information:

```yaml
personal:
  name: "Dr. Your Name"
  title: "PhD in Edge/Cloud Computing"
  email: "your.email@example.com"
  # ... more fields
```

#### Site Configuration

Update `hugo.toml` for site-wide settings:

```toml
baseURL = 'https://yourusername.github.io/'
title = 'Your Name - CV/Portfolio'
[params]
  author = "Your Name"
  email = "your.email@example.com"
  # ... more settings
```

#### Profile Photo

1. Add your profile photo to `static/images/profile.jpg`
2. Update the path in `hugo.toml` if needed:
   ```toml
   [params]
     photo_path = "images/profile.jpg"
   ```

## Content Structure

The website is organized into the following sections:

- **About Me**: Personal information, contact details, summary
- **Research Interests**: Key research areas and focus
- **Education**: Academic background and degrees
- **Work Experience**: Professional and research experience
- **Publications**: Research papers, articles, and preprints
- **Teaching**: Teaching experience and courses
- **Supervision**: Student supervision and mentoring

All content is managed through `data/cv.yaml` for easy editing without touching templates.

## Deployment

### GitHub Pages

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages** in repository settings

3. **Set up GitHub Actions** (workflow file included):
   - The site will automatically build and deploy on every push
   - Uses Hugo extended version for full feature support

### Manual Deployment

```bash
# Build the site
hugo --minify

# Deploy the public/ directory to your hosting provider
```

## Customization Options

### Theme Settings

Available in `hugo.toml`:

```toml
[params]
  dark_mode = true          # Enable dark theme
  terminal_style = true     # Terminal aesthetic
  show_photo = true         # Display profile photo
  show_nav = true          # Show navigation menu
  nav_style = "fixed"      # Navigation style
```

### Color Scheme

The theme uses CSS custom properties for easy color customization. Edit `themes/cv-one/static/css/style.css`:

```css
:root {
  --bg-primary: #0d1117;      /* Background */
  --text-primary: #f0f6fc;    /* Primary text */
  --text-accent: #58a6ff;     /* Accent color */
  /* ... more colors */
}
```

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## Accessibility

- WCAG AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast mode support
- Reduced motion support

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For issues and questions:
- Open an issue on GitHub
- Check the Hugo documentation
- Review the theme documentation

## Credits

- **Hugo**: Static site generator
- **Font Awesome**: Icons
- **Google Fonts**: Typography
- **GitHub**: Hosting and CI/CD

---

Built with ❤️ using Hugo and modern web technologies.

