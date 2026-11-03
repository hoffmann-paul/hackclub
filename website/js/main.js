async function loadNavigation() {
    const response = await fetch("/navigation.html");
    const navigation = await response.text();

    document.querySelector("#navigation").innerHTML = navigation;
}

loadNavigation();