(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.dele = require('../../src/dele');
},{"../../src/dele":2}],2:[function(require,module,exports){
module.exports = function () {
  'use strict';

  return {
    shareUrl: window.location.href,
    shareTitle: document.title,
    vendorShareUrl: false,

    url: function(url) {
      this.shareUrl = url;

      return this;
    },

    title: function(title) {
      this.shareTitle = title;

      return this;
    },

    facebook: function() {
      this.vendorShareUrl = 'http://www.facebook.com/sharer.php?u=' + this.shareUrl;

      this.openPopup();
    },

    twitter: function() {
      this.vendorShareUrl = 'http://www.twitter.com/share?text=' + this.shareTitle + '&url=' + this.shareUrl;

      this.openPopup();
    },

    google: function() {
      this.vendorShareUrl = 'https://plus.google.com/share?url=' + this.shareUrl;

      this.openPopup();
    },

    linkedIn: function() {
      this.vendorShareUrl = 'https://www.linkedin.com/shareArticle?mini=true&url=' + this.shareUrl + '&title=' + this.shareTitle + '&summary=&source=' + this.shareUrl;

      this.openPopup();
    },

    email: function() {
      this.vendorShareUrl = 'mailto:?&subject=' + this.shareTitle + '&body=' + this.shareTitle + ': ' + this.shareUrl;

      this.openPopup();
    },

    openPopup: function() {
      window.open(this.vendorShareUrl, 'share_window', 'height=320, width=640, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no');
    }
  };
};
},{}]},{},[1]);
