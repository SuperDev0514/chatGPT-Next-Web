/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1120px',
      xl: '1440px',
      '2xl': '1980px'
    },
    fontSize: {
      sm: '0.75rem',
      'sm-mobile': '0.875rem',
      'sm-title': '0.875rem',
      'sm-mobile-tab': '0.625rem',
      'chat-header-title': '1rem',
      'actions-popover-menu-item': '15px',
      'setting-title': '1.25rem',
      'setting-items': '1rem',
    },
    fontWeight: {
      'setting-title': '700',
      'setting-card-title': '600',
    },
    fontFamily: {
      'common': ['Satoshi Variable', "SF Pro Text", "SF Pro Icons", "Helvetica Neue", 'Helvetica', 'Arial', 'sans-serif'],
      'time': ['Hind', "SF Pro Text", "SF Pro Icons", "Helvetica Neue", 'Helvetica', 'Arial', 'sans-serif'],
      'setting-card-title': ['PingFang HK', 'PingFang', "SF Pro Text", "SF Pro Icons", "Helvetica Neue", 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      lineHeight: {
        'slide-btn': "17px",
        'input': '22px',
      },
      backdropBlur: {
        'chat-header': '20px',
      },
      minHeight: {
        'chat-input-mobile': '19px',
        'chat-input': '60px',
      },
      height: {
        mobile: 'var(--siderbar-mobile-height)',
        // mobile: '3.125rem',
        'menu-title-mobile': '3rem',
        'thumbnail': '5rem',
        'chat-input-mobile': '19px',
        'chat-input': '60px',
        'chat-panel-mobile': '- var(--siderbar-mobile-height)',
        'setting-panel-mobile': 'calc(100vh - var(--siderbar-mobile-height))',
        'slide-btn': '18px',
        'switch': '1rem',
        'chat-header-title-mobile': '19px',
      },
      minWidth: {
        'select-mobile-lg': '200px',
        'select-mobile': '170px',
        'select': '240px',
        'slide-range-mobile-lg': '200px',
        'slide-range-mobile': '170px',
        'slide-range': '240px',
      },
      width: {
        'md': '15rem',
        'lg': '21.25rem',
        '2xl': '27.5rem',
        'page': 'calc(100% - var(--menu-width))',
        'thumbnail': '5rem',
        'actions-popover': '203px',
        'switch': '2.25rem',
        'confirm': '26.25rem',
      },
      flexBasis: {
        'sidebar': 'var(--menu-width)',
        'page': 'calc(100% - var(--menu-width))',
        'message-width': 'var(--max-message-width)',
      },
      spacing: {
        'chat-header-gap': '0.625rem',
        'chat-panel-mobile': 'var(--siderbar-mobile-height)',
        'message-img': 'calc((100%- var(--img-gap-count)*0.25rem)/var(--img-count))',
      },
      backgroundColor: {
        'global': 'var(--global-bg)',
        'actions-bar-btn-default': 'var(--actived-widget-bg)',
        'primary-btn': 'var(--actived-widget-bg)',
        'primary-btn-disabled': 'var(--primary-btn-disabled-bg)',
        'danger-btn': 'var(--danger-btn-bg)',
        'default-btn': 'var(--default-widget-bg)',
        'card': 'var(--similar-panel-bg)',
        'input': 'var(--default-widget-bg)',
        'list-item-divider': 'var(--similar-line-bg)',
        'menu': 'var(--default-container-bg)',
        'select-option-hovered': 'var(--similar-btn-hovered-bg)',
        'select-popover-panel': 'var(--similar-panel-bg)',
        'select-popover-panel-dark': 'var(--select-popover-panel-bg)',
        'select': 'var(--default-widget-bg)',
        'slider': 'var(--similar-line-bg)',
        'slider-slided-travel': 'var(--slider-slided-travel-bg)',
        'slider-block': 'var(--similar-widget-btn-bg)',
        'switch-unchecked': 'var(--switch-unchecked-bg)',
        'switch-checked': 'var(--actived-widget-bg)',
        'switch-btn': 'var(--similar-widget-btn-bg)',
        'chat-actions-popover-panel-mobile': 'var(--similar-panel-bg)',
        'chat-actions-btn-popover': 'var(--chat-actions-btn-popover-bg)',
        'chat-actions-btn-hovered': 'var(--similar-btn-hovered-bg)',
        'chat-panel-header-mask': 'var(--default-container-bg)',
        'chat-panel-header-mobile': 'var(--similar-highlight-hood-bg)',
        'chat-panel-input-hood': 'var(--similar-highlight-hood-bg)',
        'chat-panel-message-user': 'var(--chat-panel-message-user-bg)',
        'chat-panel-message-bot': 'var(--chat-panel-message-bot-bg)',
        'chat-panel-message': 'var(--default-container-bg)',
        'chat-panel-message-mobile': 'var(--chat-panel-message-mobile-bg)',
        'chat-message-actions': 'var(--similar-panel-bg)',
        'chat-message-actions-btn-hovered': 'var(--similar-btn-hovered-bg)',
        'chat-panel': 'var(--default-container-bg)',
        'chat-panel-message-clear-divider': 'var(--chat-panel-message-clear-divider-bg)',
        'chat-menu-session-selected': 'var(--menu-item-selected-bg)',
        'chat-menu-session-unselected': 'var(--chat-menu-session-unselected-bg)',
        'chat-menu-session-hovered': 'var(--chat-menu-session-hovered-bg)',
        'settings-menu-mobile': 'var(--default-container-bg)',
        'settings-menu-item-mobile': 'var(--similar-highlight-hood-bg)',
        'settings-menu-item-selected': 'var(--menu-item-selected-bg)',
        'settings-header-mobile': 'var(--similar-highlight-hood-bg)',
        'settings-panel': 'var(--default-container-bg)',
        'sidebar-mobile': 'var(--similar-highlight-hood-bg)',
        'delete-chat-popover-panel': 'var(--similar-panel-bg)',
        'confirm-mask': 'var(--confirm-mask-bg)',
        'confirm-panel': 'var(--similar-panel-bg)',
        'delete-chat-ok-btn': 'var(--delete-chat-ok-btn-bg)',
        'delete-chat-cancel-btn': 'var(--delete-chat-cancel-btn-bg)',
      },
      backgroundImage: {
        // 'chat-panel-message-user': 'linear-gradient(259deg, #9786FF 8.42%, #4A5CFF 90.13%)',
        'thumbnail-mask': 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%)',
      },
      transitionProperty: {
        'time': 'all ease 0.6s',
        'message': 'all ease 0.3s',
      },
      maxHeight: {},
      maxWidth: {
        'message-width': 'var(--max-message-width)',
        'setting-list': '710px',
      },
      boxShadow: {
        'btn': '0px 4px 10px 0px rgba(60, 68, 255, 0.14)',
        'chat-actions-popover-mobile': '0px 14px 40px 0px rgba(0, 0, 0, 0.12)',
        'chat-input-hood-focus-shadow': '0px 4px 20px 0px rgba(60, 68, 255, 0.13)',
        'select-popover-shadow': '0px 14px 40px 0px rgba(0, 0, 0, 0.12)',
        'message-actions-bar': '0px 4px 30px 0px var(--small-widget-border)',
        'prompt-hint-container': 'inset 0 4px 8px 0 rgba(0, 0, 0, 0.1)',
        'delete-chat-popover-shadow': '0px 0px 1px 0px rgba(0, 0, 0, 0.08), 0px 8px 20px 0px rgba(0, 0, 0, 0.08)',
      },
      colors: {
        'select-popover': 'var(--small-widget-border)',
        'slider-block': 'var(--slider-block-border)',
        'thumbnail': 'var(--small-widget-border)',
        'chat-actions-popover-mobile': 'var(--chat-actions-popover-mobile-border)',
        'chat-header-bottom': 'var(--panel-header-border)',
        'chat-input-top': 'var(--panel-header-border)',
        'chat-input-hood': 'var(--chat-input-hood-border)',
        'chat-input-hood-focus': 'var(--chat-input-hood-focus-border)',
        'chat-menu-session-selected': 'var(--menu-item-selected-border)',
        'settings-menu-item-selected': 'var(--menu-item-selected-border)',
        'settings-header': 'var(--panel-header-border)',
        'delete-chat-popover': 'var(--small-widget-border)',
        'delete-chat-cancel-btn': 'var(--delete-chat-cancel-btn-border)',
        'text-sidebar-tab-mobile-active': 'var(--sidebar-tab-mobile-active-text)',
        'text-sidebar-tab-mobile-inactive': 'var(--weakness-text)',
        'text-btn-primary': 'var(--bg-contract-text)',
        'text-btn-danger': 'var(--danger-btn-text)',
        'text-btn-default': 'var(--btn-default-text)',
        'text-input': 'var(--key-text)',
        'text-list-subtitle': 'var(--weakness-text)',
        'text-slider-block': 'var(--btn-default-text)',
        'text-chat-actions-btn-popover': 'var(--bg-contract-text)',
        'text-chat-header-title': 'var(--key-text)',
        'text-chat-header-subtitle': 'var(--description-text)',
        'text-chat-input-placeholder': 'var(--description-text)',
        'text-chat-message-date': 'var(--description-text)',
        'text-chat-message-markdown-user': 'var(--bg-contract-text)',
        'text-chat-message-markdown-bot': 'var(--key-text)',
        'text-chat-panel-message-clear': 'var(--weakness-text)',
        'text-chat-panel-message-clear-revert': 'var(--message-clear-revert-text)',
        'text-chat-menu-item-title': 'var(--key-text)',
        'text-chat-menu-item-time': 'var(--menu-item-time)',
        'text-chat-menu-item-description': 'var(--description-text)',
        'text-settings-menu-title': 'var(--key-text)',
        'text-settings-menu-item-title': 'var(--key-text)',
        'text-settings-panel-header-title': 'var(--key-text)',
        'text-confirm-mask': 'var(--confirm-mask-text)',
        'text-delete-chat-ok-btn': 'var(--delete-chat-ok-btn-text)',
        'text-delete-chat-cancel-btn': 'var(--delete-chat-cancel-btn-text)',
      },
      keyframes: {
        mask: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      animation: {
        mask: 'mask 150ms cubic-bezier(0.16, 1, 0.3, 1)'
      }
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.75rem',
      'lg': '1rem',
      'user-message': '16px 4px 16px 16px',
      'bot-message': '4px 16px 16px 16px',
      'action-btn': '0.5rem',
      'actions-bar-btn': '0.375rem',
      'chat-input': '0.5rem',
      'chat-img': '0.5rem',
      'slide': '0.625rem',
    },
    borderWidth: {
      DEFAULT: '1px',
    },
  },
  plugins: [],
}

