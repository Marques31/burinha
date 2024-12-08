let teamNames = ['Jacinto Pinto', 'E o bambu?', 'Comando URSAL', 'Fitness imaginários', 'Tem time?', 'Maxisto', 'daqui pro dota', '100 pavê'];
const teamsCadastrados = [];

function addTeam() {
    if (teamsCadastrados.length === 8) return console.log('8 times já cadastrados');

    const indice = gerarIndiceAleatorio(teamNames);

    const jogador1 = document.getElementById('jog1').value;
    const jogador2 = document.getElementById('jog2').value;
    const twitch1 = document.getElementById('tw1').value;
    const twitch2 = document.getElementById('tw2').value;
    const insta1 = document.getElementById('insta1').value;
    const insta2 = document.getElementById('insta2').value;
    const twitter1 = document.getElementById('twitter1').value;
    const twitter2 = document.getElementById('twitter2').value;

    if (jogador1 === '' || jogador2 === '') {
        return console.log('Adiciona 2 jogador ai corno');
    }

    const team = {
        nomeTeam: teamNames[indice],
        jogador1: {
            nomeJogador: jogador1,
            twitch: twitch1,
            instagram: insta1,
            twitter: twitter1
        },
        jogador2: {
            nomeJogador: jogador2,
            twitch: twitch2,
            instagram: insta2,
            twitter: twitter2
        }
    };

    teamNames.splice(indice, 1);
    teamsCadastrados.push(team);
    createNotification(team);
}

function gerarIndiceAleatorio(array) {
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    return indiceAleatorio;
}

function createNotification(team) {
    const notification = document.createElement('div');
    notification.classList.add('notification');

    const notiglow = document.createElement('div');
    notiglow.classList.add('notiglow');
    notification.appendChild(notiglow);

    const notiborderglow = document.createElement('div');
    notiborderglow.classList.add('notiborderglow');
    notification.appendChild(notiborderglow);

    const notititle = document.createElement('div');
    notititle.classList.add('notititle');
    notititle.textContent = team.nomeTeam;
    notification.appendChild(notititle);

    const notibody = document.createElement('div');
    notibody.classList.add('notibody');
    notibody.innerHTML = `${escapeHtml(team.jogador1.nomeJogador)} <br> ${escapeHtml(team.jogador2.nomeJogador)}`;
    notification.appendChild(notibody);

    // Append the notification to a specific element (e.g., a container div)
    let id = 'cadTeam1';

    if (teamsCadastrados.length < 3) {
        id = 'cadTeam1';
    } else if (teamsCadastrados.length < 5) {
        id = 'cadTeam2';
    } else if (teamsCadastrados.length < 7) {
        id = 'cadTeam3';
    } else {
        id = 'cadTeam4';
    }
    const container = document.getElementById(id);
    container.appendChild(notification);
}

function escapeHtml(unsafe) {
    return unsafe.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}
