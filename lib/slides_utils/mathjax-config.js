const initMathJax = function() {
  window.MathJax = {
    loader: {load: ['[tex]/color']},
    tex: {
      packages: {'[+]': ['color']},
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']],
      macros: {
        bm: ["{\\boldsymbol #1}",1]
      }
    },
    chtml: {
      scale: 0.9,
    }
  };

  const mathJaxHeader = `$$
  % Common symbols
  \\newcommand{\\N}{\\mathbb{N}}
  \\newcommand{\\R}{\\mathbb{R}}
  \\newcommand{\\D}{\\mathcal{D}}
  \\newcommand{\\bigO}{\\mathcal{O}}
  \\newcommand{\\E}{\\mathbb{E}}
  \\newcommand{\\data}{\\D}
  \\newcommand{\\eps}{\\varepsilon}

  % Vectors, matrices & random variables
  \\newcommand{\\vec}[1]{\\boldsymbol{#1}}
  \\newcommand{\\mat}[1]{\\boldsymbol{#1}}
  \\newcommand{\\rand}[1]{\\textnormal{#1}}
  \\newcommand{\\randvec}[1]{\\mathbf{#1}}

  % Brackets
  \\newcommand{\\pth}[1]{\\left( #1 \\right) }
  \\newcommand{\\bpth}[1]{\\left[ #1 \\right] }
  \\newcommand{\\braces}[1]{\\left\\lbrace #1 \\right\\rbrace }
  \\newcommand{\\abs}[1]{{\\left| #1 \\right| }}
  \\newcommand{\\ceil}[1]{\\lceil {#1} \\rceil}
  \\newcommand{\\floor}[1]{\\lfloor {#1} \\rfloor}
  \\newcommand{\\norm}[1]{\\left\\lVert#1\\right\\rVert}

  % Common functions
  \\newcommand{\\expected}[1]{\\E\\bpth{#1}}
  \\newcommand{\\argmax}[1]{\\mathop{\\mathrm{argmax}}\\limits_{#1}\\  }
  \\newcommand{\\argmin}[1]{\\mathop{\\mathrm{argmain}}\\limits_{#1}\\  }
  \\newcommand{\\indicator}[1]{\\mathbb{1}_{\\braces{#1}}}
  \\newcommand{\\softmax}[1]{\\mathrm{softmax}\\left( #1 \\right) }
  \\newcommand{\\logsoftmax}[1]{\\mathrm{log\\ softmax}\\left( #1 \\right) }
  \\newcommand{\\KL}[2]{D_{\\mathrm{KL}}\\left( #1 || #2 \\right) }

  % Colors
  \\definecolor{color1}{rgb}{0.12,0.47,0.71}
  \\definecolor{color2}{rgb}{1.00,0.50,0.05}
  \\definecolor{color3}{rgb}{0.17,0.63,0.17}
  \\definecolor{color4}{rgb}{0.84,0.15,0.16}
  \\definecolor{color5}{rgb}{0.58,0.40,0.74}
  \\definecolor{color6}{rgb}{0.55,0.34,0.29}
  \\definecolor{color7}{rgb}{0.81,0.93,0.98}
  \\definecolor{color8}{rgb}{0.50,0.50,0.50}
  \\definecolor{color9}{rgb}{0.74,0.74,0.13}
  \\definecolor{color10}{rgb}{0.09,0.75,0.81}
  $$`;

  var div = document.createElement('div');
  div.id = 'mathJaxHeaderDiv';
  div.style.display = 'none';
  document.body.prepend(div);

  var p = document.createElement('p');
  p.innerText = mathJaxHeader;
  div.append(p);

  var script = document.createElement('script');
  script.src = 'https://polyfill.io/v3/polyfill.min.js?features=es6';
  document.head.appendChild(script);

  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
  // script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3.0.1/es5/tex-mml-chtml.js';
  script.async = true;
  document.head.appendChild(script);
};