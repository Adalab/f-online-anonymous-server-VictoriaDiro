'use strict'

window.onload = init;

function init() {
  document.querySelector('.nav-trigger').addEventListener('click', openMenu);
  document.querySelector('.nav-close').addEventListener('click', closeMenu);
  document.querySelector('.nav > ul').style.display = 'none';
}

function openMenu() {
  const state = document.querySelector('.nav > ul').style.display;

  if(state == 'none') {
    document.querySelector('.nav > ul').style.display = 'block';
  } 
}

function closeMenu() {
  const state = document.querySelector('.nav > ul').style.display;

  if(state == 'block') {
    document.querySelector('.nav > ul').style.display = 'none';
  };
}
