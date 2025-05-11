
// Redirect to HTTPS if not already
if (location.protocol !== 'https:') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
}

// Redirect non-www to www (after HTTPS is ensured)
else if (window.location.hostname === "lolife.xyz") {
    window.location.href = "https://www.lolife.xyz" + window.location.pathname + window.location.search;
}