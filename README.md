<a href="https://novela.narative.co" target="_blank">
<img src="https://cdn.jsdelivr.net/gh/mostafachatillon/gatsby-theme-novela-example_test@master/assets/gatsby-theme-novela-hero.jpg" alt="gatsby-novela-theme hero image" />
</a>

<br/>

Deploy this to netlify, with netlifyCMS integrated, by clicking the button below!

<br/>

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kaziridwan/gatsby-starter-novela-netlifycms)

<br/>

# Gatsby Starter Novela

With minimal styling and maximum features — including multiple homepage layouts, built-in social sharing and dark mode — Novela makes it easy to start publishing beautiful articles and stories with Gatsby.

Novela is built by the team at [Narative](https://www.narative.co), and built for everyone that loves the web.

<div>
<a href="https://novela.narative.co" target="_blank">
<img src="https://cdn.jsdelivr.net/gh/mostafachatillon/gatsby-theme-novela-example_test@master/assets/gatsby-theme-novela-cta-demo.jpg" alt="gatsby-novela-theme live demo" width="295px" />
</a>
</div>

<div>
<a href="https://www.narative.co/design/open/novela" target="_blank">
<img src="https://cdn.jsdelivr.net/gh/mostafachatillon/gatsby-theme-novela-example_test@master/assets/gatsby-theme-novela-cta-figma.jpg" alt="gatsby-novela-theme figma link" width="295px" />
</a>
</div>

# Using Gatsby Starter Novela

This guide will take you through setting up Novela with Gatsby Starter Novela.

### Step 1: Starter installation

##### With `gatsby-cli`:

```sh
gatsby new novela-site https://github.com/narative/gatsby-starter-novela
```

##### With `git clone`:

```sh
git clone git@github.com:narative/gatsby-starter-novela.git novela-site

cd novela-site

yarn
```

### Step 2: Develop & Build

Once installed or cloned locally and all packages are installed you can begin developing your site.

```sh
# Run localhost
yarn dev

# Build your Gatsby site
yarn build
```

If wanting to use Netlify CMS as the content editor, then you need to be run the proxy in another terminal tab. Then visit
http://localhost:8000/admin to view the editor.
```sh
# Run proxy
yarn proxy
```

### Step 3: Enabling Netlify CMS
1. Edit the `static/admin/config.yml` and change the URL to your own repo URL
2. Enable Oauth access from github. Visit [this url](https://docs.netlify.com/visitor-access/oauth-provider-tokens/#setup-and-settings) for instructions

### Help

For more information visit the [Theme repository](https://github.com/narative/gatsby-theme-novela)

### Deploy Site
```curl -X POST -d {} https://api.netlify.com/build_hooks/617c43a2f0301b4f88470335```