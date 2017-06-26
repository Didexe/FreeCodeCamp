const USERS = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "test-channel", "habathcx", "RobotCaleb", "noobs2ninjas"];

function getStreams() {
    let url;
    let container = document.createElement('DIV');
    container.id = 'container';
    let main = document.querySelector('main');
    USERS.forEach((user) => {
        let url = 'https://wind-bow.gomix.me/twitch-api/streams/' + user + '?callback=?';
        $.get(url, (data) => {
            let div = document.createElement('DIV');
            if(data.stream === null) {
                // case: account offline 
                // make request to channels to get the logo
                let url = 'https://wind-bow.gomix.me/twitch-api/channels/' + user + '?callback=?';
                $.get(url, (data) => {
                    let logo = document.createElement('IMG');
                    logo.setAttribute('src', data.logo);
                    logo.className = 'stream-logo flex-item';
                    div.appendChild(logo);
                }, 'jsonp')
                .done( () => {
                        let name = document.createElement('A');
                        name.setAttribute('href', 'https://twitch.tv/' + user);
                        name.setAttribute('target', '_blank');
                        name.innerHTML = '<h2>' +user + '</h2>';
                        name.className = 'stream-name flex-item';
                        div.appendChild(name);
                        // status
                        let status = document.createElement('p');
                        status.className = 'stream-status flex-item';
                        status.innerText = 'off-line';
                        div.appendChild(status);
                        div.className = 'channel flex-container offline';
                    }
                );
            } else if (data.stream === undefined) {
                // case: account closed
                div = undefined;
                alert('Account' + user + 'has been closed');
            } else {
                // case: account online 
                // get logo from the current request
                let logo = document.createElement('IMG');
                logo.setAttribute('src', data.stream.channel.logo);
                logo.className = 'stream-logo flex-item';
                div.appendChild(logo);
                // name
                let name = document.createElement('A');
                name.setAttribute('href', 'https://twitch.tv/' + user);
                name.setAttribute('target', '_blank');
                name.innerHTML = '<h2>' + user + '</h2>';
                name.className = 'stream-name flex-item';
                div.appendChild(name);
                // status
                let status = document.createElement('p');
                status.className = 'stream-status flex-item';
                status.innerText = data.stream.game ;
                div.appendChild(status);
                div.className = 'channel flex-container online';
            }
            if(div) {
                container.appendChild(div);
            }
        }, 'jsonp');
    })
    main.appendChild(container);
}

$(document).ready(() => {
    getStreams()
})