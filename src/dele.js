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