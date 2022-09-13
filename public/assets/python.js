window.__PYTHONREADY__ = false;
window.__PYTHONCMDS__ = false;
// This file is for integrating brython (brython.js, brythin_stdlib.js)
// into the BrowserLinux environment.

// Init brython
head_element = document.querySelector("head");
brython_js = document.createElement("script");
brython_js.src = "/lib/brython.js";
head_element.appendChild(brython_js);
setTimeout(function(){
  try {
    brython_stdlib_js = document.createElement("script");
    brython_stdlib_js.src = "/lib/brython_stdlib.js";
    head_element.appendChild(brython_stdlib_js);
  } catch {
    cmd_reload();
  }

  function installBrython(){
    try {
      brython({debug: 0, pythonpath: ["/browserlinux-lib/Lib"], indexedDB: true});
      console.log("Brython loaded.")
    } catch {
      console.log("Couldn't load brython. Retrying in half a second...");
      setTimeout(installBrython, 500);
    }
  }

  if(brython_stdlib_js.readyState) {
    brython_stdlib_js.onreadystatechange = function() {
      if (brython_stdlib_js.readyState === "loaded" || brython_stdlib_js.readyState === "complete") {
        brython_stdlib_js.onreadystatechange = null;
        setTimeout(installBrython, 50);
      }
    };
  } else {
    brython_stdlib_js.onload = function(){setTimeout(installBrython, 50);};
  }
}, 150);

function cmd_pip(args) {
  var arglist = args.split(" ");
  var subcmd = arglist.shift();
  if (subcmd == "install") {
    
  }
}

function python_interpreter_quit(){
  window.userHasAccess = true;
  delete(cmdkeybind);
  window.currline = "";
  print(" ");
  triggerPrompt();
  return;
}
