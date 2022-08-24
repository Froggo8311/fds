window.__PYTHONREADY__ = false;
// This file is for integrating brython (brython.js, brythin_stdlib.js)
// into the BrowserLinux environment.

// Init brython
head_element = document.querySelector("head");
brython_js = document.createElement("script");
brython_js.src = "/assets/brython.js";
head_element.appendChild(brython_js);
brython_stdlib_js = document.createElement("script");
brython_stdlib_js.src = "/assets/brython_stdlib.js";
head_element.appendChild(brython_stdlib_js);


function installBrython(){
  try {
    brython({debug: 0, pythonpath: ["/Lib", "/pip"], indexedDB: true});
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
      callback();
    }
  };
} else {
  brython_stdlib_js.onload = installBrython;
}

function cmd_pip(args) {
  arglist = args.split(" ");
  subcmd = arglist.shift();
  if (subcmd == "install") {
    
  }
}

function python_interpreter_quit(){
  userHasAccess = true;
  delete(cmdkeybind);
  currline = "";
  print(" ");
  triggerPrompt();
  return;
}

