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
        primary:   '/html/body/div[2]/div/a',
        secondary: '//*[@id="content"]/div/p[2]/a'
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
    }
  },
  theme  = themes[domain],
  dimensions = ['display', 'padding', 'min-height', 'max-height', 'min-width', 'max-width', 'font', 'border', 'border-radius', 'color', 'background', 'text-align', 'text-decoration', 'text-shadow', 'box-shadow', 'line-height', 'vertical-align', 'cursor', 'transition'],
/* --------------------------------------------- */
/* CHANGE THIS TO WHICH ITEM YOU WANT TO INSPECT */
  xpath  = theme.buttons.primary,
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


