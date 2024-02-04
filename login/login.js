"use strict";

// Function to get cookie by name from cookie storage
const getCookieByName = (name) => {
  const cookies = document.cookie;
  let start = cookies.indexOf(name + "=");
  if (start === -1) {
    return "";
  } else {
    start = start + (name.length + 1);
    let end = cookies.indexOf(";", start);
    if (end === -1) {
      end = cookies.length;
    }
    const cookieValue = cookies.substring(start, end);
    return decodeURIComponent(cookieValue);
  }
};

// Fuction to set a cookie
const setCookie = (name, value, days) => {
  let cookie = name + "=" + encodeURIComponent(value);
  if (days) {
    cookie += "; max-age=" + days * 24 * 60 * 60;
  }

  cookie += "; path=/";
  document.cookie = cookie;
};

// Function to delete a cookie
const deleteCookie = (name) =>
  (document.cookie = name + "=''; max-age=0; path=/");

// Function to redirect to different page.
const goToPage = (url) => (location = url);
