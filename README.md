# Captcha.bot Clone Website

A pixel-perfect clone of the Captcha.bot Discord verification website, created using HTML, CSS, and JavaScript.

## Features

- 🎨 **Exact Visual Clone**: Matches the original design, colors, and layout
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Interactive Verification**: Functional captcha verification system
- 🌟 **Smooth Animations**: Polished UI with hover effects and transitions
- 🎭 **Demo Mode**: Safe to use without actual Discord integration
- 🚀 **No Server Required**: Just open in your browser!

## Files Structure

```
clonesite/
├── index.html          # Main HTML file - open this in your browser
├── style.css           # Complete styling (matches original design)
├── script.js           # Interactive JavaScript functionality
└── README.md           # This file
```

## Quick Start

**Super Simple - Just open the file:**
1. Double-click `index.html` to open in your browser
2. Click "Press to Verify" to test the verification modal
3. Complete the captcha to see the success animation

That's it! No server setup required.

## What You Get

### 🎨 Visual Elements (Pixel-Perfect Clone)
- ✅ Exact Discord branding and colors
- ✅ Server icon and information display
- ✅ Dynamic member count updates
- ✅ Promotional advertisement section
- ✅ Information cards with statistics
- ✅ Complete footer with all links
- ✅ Responsive navigation header

### 🔧 Functionality
- ✅ Interactive verification modal
- ✅ Working captcha checkbox
- ✅ Form validation and submission
- ✅ Success/error message system
- ✅ Smooth animations and transitions
- ✅ Keyboard navigation support (ESC to close, Enter to submit)

### 📱 Responsive Design
- ✅ Mobile-first approach
- ✅ Tablet and desktop optimizations
- ✅ Touch-friendly interface
- ✅ Flexible layouts that adapt to any screen size

## Browser Compatibility

- ✅ Chrome 60+ (Recommended)
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

## Technologies Used

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern styling with Grid, Flexbox, and animations
- **JavaScript ES6+**: Interactive functionality
- **Responsive Design**: Works on all devices

## License

This project is for educational purposes only. The original Captcha.bot design belongs to Privy.gg LLC.

---

**Note**: This clone replicates the visual design and basic functionality of the original Captcha.bot verification page. It's intended for educational purposes and does not include actual Discord integration.

### 1. Install the Theme
1. Copy the entire `raheeq-theme` folder to your WordPress themes directory:
   - For LocalWP: `app/public/wp-content/themes/`
   - For XAMPP: `htdocs/yoursite/wp-content/themes/`

2. In WordPress Admin, go to Appearance > Themes
3. Find "Raheeq Honey Clone" and click "Activate"

### 2. Install Required Plugins
1. Go to Plugins > Add New
2. Install and activate:
   - **WooCommerce** (for e-commerce functionality)
   - **Elementor** (for easy page editing)
   - **Yoast SEO** (optional, for SEO)

### 3. Download Images
1. Run the Python script to download some images:
   ```bash
   cd /path/to/clonesite
   python download_images.py
   ```

2. Manually download the following from raheeqhoney.com:
   - Logo image (save as `logo.png`)
   - Hero background (save as `hero-bg.jpg`)
   - Product images for each product
   - Category images

3. Upload all images to WordPress:
   - Go to Media > Add New in WordPress Admin
   - Upload all downloaded images

### 4. Set Up Pages
1. Create a new page called "Home"
2. Set it as your homepage:
   - Go to Settings > Reading
   - Select "A static page"
   - Choose "Home" as your Homepage

### 5. Configure WooCommerce
1. Run the WooCommerce setup wizard
2. Add product categories:
   - أنواع الأعسال (Honey Types)
   - الأكثر مبيعا (Best Sellers)
   - خلطات رحيق (Raheeq Mixes)
   - بكجات رحيق (Raheeq Packages)
   - منتجات النحلة (Bee Products)

3. Add sample products with the names and prices from the original site

### 6. Customize with Elementor (Optional)
1. Edit any page with Elementor
2. Import the sections from the theme
3. Customize colors, fonts, and spacing to match exactly

### 7. Configure Menus
1. Go to Appearance > Menus
2. Create a menu with the following items:
   - الرئيسية (Home)
   - أنواع الأعسال (Honey Types)
   - خلطات رحيق (Raheeq Mixes)
   - منتجات النحلة (Bee Products)
   - بكجات رحيق (Raheeq Packages)
   - منتجات العناية (Care Products)
   - منتجات صحية (Health Products)
   - منتجات أخرى (Other Products)

3. Assign to "Primary Menu" location

## Features Included

### ✅ Complete Homepage Clone
- Header with navigation
- Hero section
- Category sections
- Product grids
- Feature highlights
- Footer with social links

### ✅ WooCommerce Integration
- Product pages
- Shopping cart
- Checkout process
- Product categories

### ✅ Responsive Design
- Mobile-friendly
- Tablet optimized
- Desktop layout

### ✅ Arabic/RTL Support
- Right-to-left layout
- Arabic typography
- Proper text alignment

### ✅ SEO Optimized
- Clean HTML structure
- Meta tags
- Fast loading

## File Structure
```
raheeq-theme/
├── style.css          # Main styles
├── index.php          # Homepage template
├── header.php         # Header template
├── footer.php         # Footer template
├── functions.php      # Theme functions
├── js/
│   └── main.js        # JavaScript functionality
└── images/            # Theme images
```

## Next Steps

1. **Add Real Products**: Replace sample products with real ones
2. **Payment Integration**: Set up payment gateways in WooCommerce
3. **Contact Forms**: Add contact forms using Contact Form 7
4. **Language Support**: Install WPML for multilingual support
5. **Performance**: Install caching plugins for better speed

## Support

For customization and additional features:
- Use Elementor for visual editing
- Modify the CSS in style.css for design changes
- Add custom functionality in functions.php

## Important Notes

- This theme includes all the visual elements from raheeqhoney.com
- You'll need to add your own content and products
- Make sure to test all functionality before going live
- Consider SSL certificate for secure payments

The theme is now ready for your client to edit using WordPress and Elementor!
