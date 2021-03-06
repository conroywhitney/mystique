var
  hostname = window.location.hostname,
  domain   = hostname.substr(0, hostname.indexOf('.', 4)).replace('www.', '').replace('-', ''),
  themes   = {
    dropbox: {
      buttons: {
        primary:   '//*[@id="page-content"]/div[3]/div[2]/a[1]',
        secondary: '//*[@id="page-content"]/div[3]/div[2]/a[2]'
      },
      text: {
        primary:   '//*[@id="page-content"]/div[3]/div[1]/div[1]/div[2]/p[1]',
        secondary: '//*[@id="page-content"]/div[3]/div[1]/div[1]/div[2]/p[2]',
        link:      '//*[@id="page-header"]/a[2]'
      },
      inputs: {
        text: '//*[@id="pyxl3839271058322690198"]'
      }
    },
    slack: {
      buttons: {
        primary:   '//*[@id="video_form"]/div[2]/div/form/input[6]',
        secondary: '//*[@id="signin_link"]'
      },
      text: {
        primary:   '//*[@id="landing"]/div[1]/div[1]/h1',
        secondary: '//*[@id="landing"]/div[1]/div[1]/p[1]',
        link:      '//*[@id="landing"]/div[4]/div/p/a[5]'
      },
      inputs: {
        text: '//*[@id="email"]'
      }
    },
    getbootstrap: {
      buttons: {
        primary:   '/html/body/div[2]/div/div[1]/div[7]/div[10]/p[1]/button[1]',
        secondary: '/html/body/div[2]/div/div[1]/div[7]/div[10]/p[1]/button[2]'
      },
      text: {
        primary:   '/html/body/div[1]/div/h2',
        secondary: '/html/body/div[1]/div/p[1]',
        link:      '/html/body/div[1]/div/div/div[1]/p/a[1]'
      },
      inputs: {
        text: null
      }
    },
    semanticui: {
      buttons: {
        primary:   '//*[@id="example"]/div[4]/div[1]/div[5]/div/div[2]/div',
        secondary: '//*[@id="example"]/div[4]/div[1]/div[5]/div/div[3]/a'
      },
      text: {
        primary:   '//*[@id="example"]/div[4]/div[1]/div[3]/div[1]/div[1]/h1',
        secondary: '//*[@id="example"]/div[4]/div[1]/div[3]/div[1]/div[1]/p',
        link:      '//*[@id="example"]/div[4]/div[1]/div[5]/div/div[3]/p/a[1]'
      },
      inputs: {
        text: '//*[@id="example"]/div[4]/div[1]/div[4]/div/div/form/div/div/input'
      }
    },
    github: {
      buttons: {
        primary:   '//*[@id="site-container"]/div[1]/div[1]/form/button',
        secondary: '/html/body/div[1]/div[1]/div/div[1]/a[2]'
      }
    },
    facebook: {
      buttons: {
        primary:   '//*[@id="u_0_l"]',
        secondary: '//*[@id="content"]/div/div[1]/div/div/div[1]/div/div/a/span'
      }
    }
  },
  theme  = themes[domain],
  dimensions = ['display', 'padding', 'min-height', 'max-height', 'min-width', 'max-width', 'font', 'border', 'border-radius', 'color', 'background', 'text-align', 'text-decoration', 'text-shadow', 'box-shadow', 'line-height', 'vertical-align', 'cursor', 'transition'],
/* --------------------------------------------- */
/* CHANGE THIS TO WHICH ITEM YOU WANT TO INSPECT */
  xpath  = theme.buttons.secondary,
/* --------------------------------------------- */
  $elem  = $x(xpath)[0],
  stylez = window.getComputedStyle($elem, null),
  hoverz = null,
  iframe = document.createElement('iframe'),
  baseline = null,
  memory = []
;

iframe.style.display = "none";
iframe.src           = "about:blank";
document.body.appendChild(iframe);
baseline = window.getComputedStyle(iframe, null);


for(var i = 0; i < dimensions.length; i++) {
  var
    style = dimensions[i],
    value = stylez.getPropertyValue(style),
    orig  = baseline.getPropertyValue(style)
  ;
  memory[style] = value;
  if (value != orig) {
    console.log(style + ": "+ value + ";");
  }
}



/******************************************/
/**********   HOVER PART ******************/
/******************************************/

console.log("\n\nhover\n");
hoverz = window.getComputedStyle($elem, null);
for(var i = 0; i < dimensions.length; i++) {
  var
    style = dimensions[i],
    hover = hoverz.getPropertyValue(style),
    before = memory[style]
  ;
  if (hover != before) {
    console.log(style + ": "+ hover + ";");
  }
}


