var app = new Vue({
    el: '#content',
    data: {
        /*Text datas*/
        SignUpPhotos: 'Sign up to see photos and videos from your friends.',
        LoginFacebook: 'Log in with Facebook',
        Or: 'OR',

        Meta: 'Meta',
        About: 'About',
        Blog: 'Blog',
        Jobs: 'Jobs',
        Help: 'Help',
        API: 'API',
        Privacy: 'Privacy',
        Terms: 'Terms',
        TopAccounts: 'Top Accounts',
        Hashtags: 'Hashtags',
        Locations: 'Locations',
        InstagramLite: 'Instagram Lite',
        ContactUploadingNonUsers: 'Contact Uploading & Non-Users',

        People: 'People who use our service may have uploaded your contact information to Instagram.',
        LearnMore: 'Learn More',
        Agreement: 'By signing up, you agree to our',
        Terms: 'Terms',
        CollectData: 'Learn how we collect, use and share your data in our',
        DataPolicy: 'Data Policy',
        UseCookies: 'and how we use cookies and similar technology in our',
        CookiesPolicy: 'Cookies Policy',

        MetaFooter: '© 2022 Instagram from Meta',

        /*Password hide & show*/
        password: '',
        passwordFieldType: 'password',
        show: 'Show'
    },
    methods: {
        switchVisibility() {
            this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
            this.show = this.show === 'Show' ? 'Hide' : 'Show';
        }
    }
});