// Only run redirect if NOT on localhost or 127.0.0.1
if (window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1") {
    // Redirect to HTTPS if not already
    if (location.protocol !== 'https:') {
        location.replace(`https:${location.href.substring(location.protocol.length)}`);
    }

    // Redirect non-www to www (after HTTPS is ensured)
    else if (window.location.hostname === "lolife.xyz") {
        window.location.href = "https://www.lolife.xyz" + window.location.pathname + window.location.search;
    }
}