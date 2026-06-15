import { PrismaClient, CaseStatus } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    await prisma.caseTag.deleteMany();
    await prisma.timelineEvent.deleteMany();
    await prisma.evidence.deleteMany();
    await prisma.case.deleteMany();

    const crimeTag = await prisma.tag.upsert({
        where: {
            slug: "crime-organizado",
        },
        update: {},
        create: {
            name: "Crime Organizado",
            slug: "crime-organizado",
        },
    });

    const grandeDepressaoTag = await prisma.tag.upsert({
        where: {
            slug: "grande-depressao",
        },
        update: {},
        create: {
            name: "Grande Depressão",
            slug: "grande-depressao",
        },
    });

    const texasTag = await prisma.tag.upsert({
        where: {
            slug: "texas",
        },
        update: {},
        create: {
            name: "Texas",
            slug: "texas",
        },
    });

    const louisianaTag = await prisma.tag.upsert({
        where: {
            slug: "louisiana",
        },
        update: {},
        create: {
            name: "Louisiana",
            slug: "louisiana",
        },
    });

    const ganguesTag = await prisma.tag.upsert({
        where: {
            slug: "gangues-americanas",
        },
        update: {},
        create: {
            name: "Gangues Americanas",
            slug: "gangues-americanas",
        },
    });

    const anos1930Tag = await prisma.tag.upsert({
        where: {
            slug: "anos-1930",
        },
        update: {},
        create: {
            name: "Anos 1930",
            slug: "anos-1930",
        },
    });

    const historiaCriminalTag = await prisma.tag.upsert({
        where: {
            slug: "historia-criminal",
        },
        update: {},
        create: {
            name: "História Criminal",
            slug: "historia-criminal",
        },
    });

    const fbiTag = await prisma.tag.upsert({
        where: {
            slug: "fbi",
        },
        update: {},
        create: {
            name: "FBI",
            slug: "fbi",
        },
    });

        const leiSecaTag = await prisma.tag.upsert({
        where: {
            slug: "lei-seca",
        },
        update: {},
        create: {
            name: "Lei Seca",
            slug: "lei-seca",
        },
    });

        const mafiaAmericanaTag = await prisma.tag.upsert({
        where: {
            slug: "mafia-americana",
        },
        update: {},
        create: {
            name: "Máfia Americana",
            slug: "mafia-americana",
        },
    });

    const assaltoABancoTag = await prisma.tag.upsert({
        where: {
            slug: "assalto-a-banco",
        },
        update: {},
        create: {
            name: "Assalto a Banco",
            slug: "assalto-a-banco",
        },
    });

    const chicagoTag = await prisma.tag.upsert({
        where: {
            slug: "chicago",
        },
        update: {},
        create: {
            name: "Chicago",
            slug: "chicago",
        },
    });

    const sequestroTag = await prisma.tag.upsert({
        where: {
            slug: "sequestro",
        },
        update: {},
        create: {
            name: "Sequestro",
            slug: "sequestro",
        },
    });

    const oklahomaTag = await prisma.tag.upsert({
        where: {
            slug: "oklahoma",
        },
        update: {},
        create: {
            name: "Oklahoma",
            slug: "oklahoma",
        },
    });

    const kansasCityTag = await prisma.tag.upsert({
        where: {
            slug: "kansas-city",
        },
        update: {},
        create: {
            name: "Kansas City",
            slug: "kansas-city",
        },
    });

    const eraDosGangstersTag = await prisma.tag.upsert({
        where: {
            slug: "era-dos-gangsters",
        },
        update: {},
        create: {
            name: "Era dos Gangsters",
            slug: "era-dos-gangsters",
        },
    });

    const prettyBoyFloydTag = await prisma.tag.upsert({
        where: {
            slug: "pretty-boy-floyd",
        },
        update: {},
        create: {
            name: "Pretty Boy Floyd",
            slug: "pretty-boy-floyd",
        },
    });

    const frankNashTag = await prisma.tag.upsert({
        where: {
            slug: "frank-nash",
        },
        update: {},
        create: {
            name: "Frank Nash",
            slug: "frank-nash",
        },
    });

    const novaYorkTag = await prisma.tag.upsert({
        where: {
            slug: "nova-york",
        },
        update: {},
        create: {
            name: "Nova York",
            slug: "nova-york",
        },
    });

    const tammanyHallTag = await prisma.tag.upsert({
        where: {
            slug: "tammany-hall",
        },
        update: {},
        create: {
            name: "Tammany Hall",
            slug: "tammany-hall",
        },
    });

    const investigacaoPublicaTag = await prisma.tag.upsert({
        where: {
            slug: "investigacao-publica",
        },
        update: {},
        create: {
            name: "Investigação Pública",
            slug: "investigacao-publica",
        },
    });

    const corrupcaoPoliticaTag = await prisma.tag.upsert({
        where: {
            slug: "corrupcao-politica",
        },
        update: {},
        create: {
            name: "Corrupção Política",
            slug: "corrupcao-politica",
        },
    });

    const historiaAmericanaTag = await prisma.tag.upsert({
        where: {
            slug: "historia-americana",
        },
        update: {},
        create: {
            name: "História Americana",
            slug: "historia-americana",
        },
    });

    const reformaGovernamentalTag = await prisma.tag.upsert({
        where: {
            slug: "reforma-governamental",
        },
        update: {},
        create: {
            name: "Reforma Governamental",
            slug: "reforma-governamental",
        },
    });

    const bonnieAndClyde = await prisma.case.upsert({
        where: {
            slug: "bonnie-and-clyde",
        },
        update: {},
        create: {
            title: "Bonnie & Clyde: A Última Estrada do Crime",

            slug: "bonnie-and-clyde",

            summary: "Durante os anos da Grande Depressão, Bonnie Parker e Clyde Barrow transformaram uma sequência de roubos, fugas e assassinatos em uma das maiores caçadas policiais da história americana. Entre 1932 e 1934, o casal cruzou diversos estados, acumulando crimes, confrontos armados e uma fama que ultrapassou as páginas dos jornais. O caso terminou em uma emboscada na Louisiana, mas sua lenda permanece viva até hoje.",

            content: `Nos anos sombrios da Grande Depressão, quando os Estados Unidos ainda tentavam se reerguer entre fábricas fechadas e cidades famintas, dois nomes começaram a circular com uma frequência inquietante nos relatórios policiais e nas manchetes dos jornais: Bonnie Parker e Clyde Barrow. O que começou como a história de dois jovens do Texas rapidamente se transformou em uma longa sequência de assaltos, fugas e mortes que cruzaram estados inteiros, deixando para trás um rastro de carros abandonados, testemunhas aterrorizadas e uma polícia cada vez mais pressionada a encerrar o caso antes que ele se tornasse um símbolo incontrolável.

Bonnie tinha apenas 19 anos quando conheceu Clyde. Ele, dois anos mais velho, já carregava no passado pequenas passagens pela prisão por crimes como roubo e arrombamento. O encontro entre os dois não parecia, à primeira vista, o início de uma lenda criminal, mas sim o começo de uma fuga compartilhada da própria realidade. Clyde chegou a ser preso novamente, mas escapou da prisão com ajuda de uma arma que, segundo investigações posteriores, teria sido levada até ele por Bonnie. A partir desse ponto, o destino dos dois parece ter se selado em definitivo: não mais vidas separadas, mas uma única trajetória fora da lei.

As primeiras investigações do que viria a ser conhecido como o “caso Barrow” começaram a se intensificar em 1932, quando autoridades passaram a ligar veículos roubados em diferentes estados a um mesmo padrão de movimentação. Um Ford abandonado em Michigan, outro em Oklahoma, e detalhes aparentemente insignificantes como um frasco de remédio acabaram se tornando peças-chave de uma investigação que cruzava fronteiras estaduais. O rastro levou agentes até o Texas, onde descobertas conectaram Clyde Barrow diretamente a uma rede de parentes e associados que ajudavam o casal a se mover com rapidez impressionante.

Com o tempo, Bonnie e Clyde deixaram de agir sozinhos. O grupo cresceu, envolvendo comparsas que entravam e saíam da gangue conforme prisões, fugas e traições. Entre eles estavam nomes como Raymond Hamilton, William Daniel Jones e membros da própria família Barrow. O que antes parecia um casal em fuga se transformou em uma pequena organização criminosa móvel, responsável por assaltos a bancos, roubos de carros e confrontos diretos com a polícia. Em várias ocasiões, os encontros terminaram em tiroteios, feridos e mortes, aumentando ainda mais a pressão pública por uma resposta definitiva das autoridades.

A escalada de violência atingiu seu ponto mais crítico em 1934. Fugas espetaculares, como a de prisioneiros libertados com ajuda direta de Clyde, reforçaram a imagem de que o casal havia ultrapassado qualquer limite de contenção. A cada novo incidente, o cerco se fechava um pouco mais. Informantes, rastros de viagens e ligações familiares começaram a desenhar o mapa final de seus movimentos, concentrando a atenção das autoridades em regiões isoladas entre Texas e Louisiana.

Foi ali, nesse cenário de estradas secundárias e zonas rurais pouco vigiadas, que a investigação encontrou seu ponto de virada. Informações indicavam encontros recentes do casal com a família Methvin, o que permitiu às autoridades prever deslocamentos futuros com uma precisão incomum até então. A emboscada começou a ser organizada em silêncio, com agentes estaduais e federais posicionados ao longo de uma estrada remota na região de Bienville Parish, Louisiana.

Na manhã de 23 de maio de 1934, o desfecho finalmente se desenhou. O veículo de Bonnie e Clyde surgiu na estrada como previsto, avançando sem suspeitar da armadilha cuidadosamente montada ao longo do caminho. Em poucos segundos, a emboscada foi ativada. Os disparos interromperam definitivamente a fuga que já durava anos. Bonnie Parker e Clyde Barrow foram declarados mortos no local.

O fim, no entanto, não encerrou o caso. Pelo contrário, consolidou sua permanência na história criminal americana. Estimativas atribuíram ao casal participação em uma série de roubos, assassinatos e sequestros ao longo de sua trajetória. Mas, para investigadores e curiosos que ainda revisitam o caso décadas depois, permanece uma questão mais profunda do que os números: como dois jovens conseguiram atravessar metade de um país em guerra contra a lei, transformando fuga em lenda e lenda em um dos episódios mais estudados da criminalidade moderna.`,

            coverImage: "/images/cases/bonnie-and-clyde-1.jpg",

            status: CaseStatus.PUBLISHED,
        },
    });

    await prisma.evidence.createMany({
        data: [
            {
                caseId: bonnieAndClyde.id,
                title: "Ford V8 Utilizado na Fuga Final",
                description: "Veículo associado a Bonnie Parker e Clyde Barrow durante os últimos meses de atividade da gangue. O automóvel tornou-se um dos símbolos mais conhecidos do caso após ser utilizado na viagem que terminou na emboscada organizada pelas autoridades em Bienville Parish, Louisiana, em 23 de maio de 1934.",
                image: "/images/evidences/bonnie-and-clyde-3.jpeg",
                order: 1,
            },
            {
                caseId: bonnieAndClyde.id,
                title: "Manchete do Assalto ao Banco de Cedar Hill",
                description: "Edição do jornal The Cedar Post publicado em 1934 destacando um assalto atribuído à Gangue Barrow. A manchete demonstra o alcance da notoriedade de Bonnie Parker e Clyde Barrow durante os anos da Grande Depressão, quando seus crimes passaram a ocupar espaço frequente na imprensa americana e a alimentar o imaginário popular.",
                image: "/images/evidences/bonnie-and-clyde-2.jpeg",
                order: 2,
            },
            {
                caseId: bonnieAndClyde.id,
                title: "Veículo Abandonado Durante a Perseguição",
                description: "Registro fotográfico de um automóvel supostamente abandonado pela Gangue Barrow durante uma das diversas fugas realizadas ao longo da investigação. A presença de agentes policiais no local evidencia o esforço contínuo das autoridades para rastrear os deslocamentos do grupo entre diferentes estados americanos.",
                image: "/images/evidences/bonnie-and-clyde-4.jpeg",
                order: 3,
            },
            {
                caseId: bonnieAndClyde.id,
                title: "Foto de Identificação de Clyde Barrow",
                description: "Fotografias de registro policial de Clyde Chestnut Barrow, produzidas durante uma de suas detenções antes do período de maior atividade criminosa. A imagem integrava arquivos utilizados por departamentos policiais para identificação e monitoramento de indivíduos considerados reincidentes.",
                image: "/images/evidences/bonnie-and-clyde-5.jpeg",
                order: 4,
            },
            {
                caseId: bonnieAndClyde.id,
                title: "Bonnie Parker Posando em Frente ao Veículo Durante o Período de Fuga",
                description: "Fotografia atribuída a Bonnie Parker durante os anos de atividade da Gangue Barrow. Na imagem, ela aparece armada e apoiando o pé no automóvel, em uma cena que posteriormente se tornaria um dos registros mais conhecidos do casal. Fotografias como essa contribuíram para a construção da imagem pública de Bonnie e Clyde como foragidos desafiando abertamente as autoridades durante a Grande Depressão.",
                image: "/images/evidences/bonnie-and-clyde-6.webp",
                order: 5,
            }
        ],
    });

    await prisma.timelineEvent.createMany({
        data: [
            {
                caseId: bonnieAndClyde.id,
                title: "Bonnie Parker Conhece Clyde Barrow",
                description: "Bonnie Parker conhece Clyde Barrow no Texas. O encontro marca o início de uma relação que, nos anos seguintes, se transformaria em uma das parcerias criminosas mais conhecidas da história americana.",
                eventDate: new Date("1930-01-01"),
                order: 1,
            },
            {
                caseId: bonnieAndClyde.id,
                title: "Fuga e Início da Vida Fora da Lei",
                description: "Após novas passagens de Clyde pela prisão e sua posterior fuga, o casal passa a viver em constante deslocamento, dando início à trajetória criminosa que os tornaria alvo de investigações em diversos estados.",
                eventDate: new Date("1931-03-01"),
                order: 2,
            },
            {
                caseId: bonnieAndClyde.id,
                title: "Investigação Interestadual é Iniciada",
                description: "Autoridades começam a relacionar roubos de veículos, assaltos e movimentações suspeitas ocorridos em diferentes estados a um mesmo grupo liderado por Clyde Barrow.",
                eventDate: new Date("1932-01-01"),
                order: 3,
            },
            {
                caseId: bonnieAndClyde.id,
                title: "Formação da Gangue Barrow",
                description: "Novos integrantes passam a atuar ao lado do casal, incluindo associados próximos e membros da família Barrow. A expansão da organização aumenta o alcance das operações criminosas e a frequência dos confrontos com a polícia.",
                eventDate: new Date("1933-01-01"),
                order: 4,
            },
            {
                caseId: bonnieAndClyde.id,
                title: "Escalada dos Confrontos Armados",
                description: "Uma sequência de perseguições, tiroteios e mortes eleva a pressão pública sobre as autoridades. O casal passa a ser considerado uma das maiores prioridades das forças policiais da região.",
                eventDate: new Date("1933-11-01"),
                order: 5,
            },
            {
                caseId: bonnieAndClyde.id,
                title: "Cerco Final se Fecha",
                description: "Informações fornecidas por informantes e rastros deixados durante as fugas permitem às autoridades mapear os deslocamentos mais recentes do casal entre Texas e Louisiana.",
                eventDate: new Date("1934-04-01"),
                order: 6,
            },
            {
                caseId: bonnieAndClyde.id,
                title: "Operação em Bienville Parish",
                description: "Agentes estaduais e federais organizam secretamente uma emboscada em uma estrada rural da Louisiana após obterem informações sobre os possíveis movimentos de Bonnie e Clyde.",
                eventDate: new Date("1934-05-22"),
                order: 7,
            },
            {
                caseId: bonnieAndClyde.id,
                title: "Fim da Fuga de Bonnie e Clyde",
                description: "O veículo do casal é interceptado em Bienville Parish, Louisiana. A operação policial termina com a morte de Bonnie e Clyde Barrow, encerrando uma perseguição que atravessou diversos estados americanos.",
                eventDate: new Date("1934-05-23"),
                order: 8,
            },
        ],
    });

    await prisma.caseTag.createMany({
        data: [
            {
                caseId: bonnieAndClyde.id,
                tagId: crimeTag.id,
            },
            {
                caseId: bonnieAndClyde.id,
                tagId: grandeDepressaoTag.id,
            },
            {
                caseId: bonnieAndClyde.id,
                tagId: texasTag.id,
            },
            {
                caseId: bonnieAndClyde.id,
                tagId: louisianaTag.id,
            },
            {
                caseId: bonnieAndClyde.id,
                tagId: ganguesTag.id,
            },
            {
                caseId: bonnieAndClyde.id,
                tagId: anos1930Tag.id,
            },
            {
                caseId: bonnieAndClyde.id,
                tagId: historiaCriminalTag.id,
            },
        ],
    });

    const johnDillinger = await prisma.case.upsert({
        where: {
            slug: "john-dillinger",
        },
        update: {},
        create: {
            title: "John Dillinger: O Homem que Personificou a Era dos Gangsters",

            slug: "john-dillinger",

            summary: "Durante a década de 1930, em meio ao colapso econômico da Grande Depressão, a figura de John Dillinger emergiu como um dos nomes mais marcantes do submundo criminal americano. Sua trajetória se entrelaça com um período em que a lei, a mídia e a opinião pública se confundiam diante do avanço do crime organizado e da crescente tensão social no país. Entre fugas, investigações e operações policiais de grande escala, Dillinger passou a ocupar o centro de uma caçada que mobilizou diferentes forças de segurança e atravessou fronteiras estaduais.",

            content: `Durante a década de 1930, enquanto os Estados Unidos enfrentavam o peso silencioso da Grande Depressão, um nome passou a dominar manchetes, relatórios policiais e o imaginário popular com uma intensidade rara. John Herbert Dillinger não foi apenas mais um criminoso entre tantos da época. Ele se tornou um símbolo distorcido de um país em crise, onde parte da população, esmagada por forças econômicas que mal compreendia, passou a enxergar em certos fora da lei uma espécie de justiça paralela, quase romântica, ainda que construída sobre violência e medo.
            
Nascido em 1903, em Indianápolis, Dillinger cresceu em um ambiente familiar instável, marcado pela perda precoce da mãe e pela rigidez alternada do pai. Ainda jovem, demonstrava comportamento inquieto, dificuldade de adaptação e uma crescente tendência à rebeldia. O que poderia ter sido apenas um percurso conturbado da adolescência se transformou, com o tempo, em uma sequência de conflitos com a lei, culminando em sua prisão por tentativa de roubo. A experiência no sistema prisional foi decisiva. O homem que saiu da cadeia anos depois já não parecia o mesmo jovem de antes, mas alguém moldado por ressentimento, endurecido e cada vez mais distante de qualquer possibilidade de retorno à vida comum.

Seu nome passou a ganhar notoriedade em 1933, logo após sua libertação. Pouco tempo depois, Dillinger voltou a cometer roubos a bancos, iniciando uma escalada criminosa que rapidamente chamou a atenção das autoridades. O que tornava sua trajetória ainda mais complexa era a capacidade de articulação com outros criminosos e a audácia de suas ações. Ele não apenas roubava, mas organizava fugas, planejava operações e se movia com uma eficiência que desafiava a polícia local e, mais tarde, o próprio governo federal.

O ponto de virada na investigação ocorreu quando Dillinger foi preso e levado a uma cadeia em Ohio. A partir desse momento, uma sequência de eventos violentos se desenrolou, incluindo fugas organizadas por seus aliados e ataques diretos a autoridades. Em uma dessas ações, um xerife foi morto durante a invasão de uma prisão, enquanto Dillinger era libertado por seu grupo. A partir daí, o caso deixou de ser apenas estadual e passou a ser tratado como uma ameaça de alcance nacional.

Com o avanço das investigações, Dillinger e sua gangue passaram a ser associados a uma série de roubos interestaduais, além de furtos a arsenais policiais que forneceram ao grupo armamento pesado, incluindo submetralhadoras e coletes à prova de balas. O nível de organização e a violência dos confrontos aumentaram de tal forma que as autoridades passaram a considerá-lo um dos criminosos mais perigosos em atividade nos Estados Unidos.

Em 1934, após uma sequência de fugas e reencontros com comparsas como Homer Van Meter e outros nomes conhecidos do crime organizado da época, Dillinger já era tratado como prioridade máxima pelo FBI. A investigação se intensificou, com vigilâncias constantes, infiltrações e operações em diferentes estados. O cerco começou a se fechar à medida que informantes e rastros de deslocamento indicavam a aproximação do desfecho.

O momento decisivo surgiu quando uma informante, conhecida como Anna Sage, ofereceu às autoridades uma pista concreta sobre o paradeiro de Dillinger em Chicago. Em troca de proteção contra deportação, ela revelou que o criminoso frequentaria um cinema naquela noite. A informação foi suficiente para mobilizar agentes federais que se posicionaram discretamente ao redor do local.

Na noite de 22 de julho de 1934, Dillinger entrou no Biograph Theater acompanhado de duas mulheres, sem saber que aquele seria seu último ato de liberdade. Ao sair do cinema, já sob vigilância dos agentes, percebeu a movimentação estranha e tentou reagir instintivamente. Em poucos segundos, os disparos foram efetuados. Dillinger foi atingido e caiu na rua, encerrando ali sua trajetória criminosa.

Sua morte marcou simbolicamente o fim de uma era. Poucos meses depois, outros nomes ligados ao seu grupo também seriam mortos ou capturados, e o FBI consolidaria sua atuação como força central no combate ao crime interestadual. Ainda assim, a figura de John Dillinger permaneceu envolta em ambiguidade histórica: um criminoso violento para as autoridades, mas também, para parte da população da época, um reflexo distorcido de um país em colapso, onde a linha entre justiça e sobrevivência parecia cada vez mais difícil de enxergar.`,

            coverImage: "/images/cases/john-dillinger-2.jpeg",

            status: CaseStatus.PUBLISHED,
        },
    });

    await prisma.evidence.createMany({
        data: [
            {
                caseId: johnDillinger.id,
                title: "Últimos Instantes no Biograph Theater",
                description: "Fotografia registrada logo após o tiroteio que resultou na morte de John Dillinger, mostrando a movimentação intensa de curiosos e autoridades ao redor do local. A cena evidencia o impacto imediato do evento e a rapidez com que a área foi tomada por policiais e civis.",
                image: "/images/evidences/john-dillinger-1.jpeg",
                order: 1,
            },
            {
                caseId: johnDillinger.id,
                title: "Biograph Theater",
                description: "Imagem da fachada do Biograph Theater, em Chicago, local onde John Dillinger foi visto pela última vez com vida. O edifício se tornou um ponto histórico associado ao desfecho de uma das mais famosas caçadas policiais da década de 1930.",
                image: "/images/evidences/john-dillinger-3.jpeg",
                order: 2,
            },
            {
                caseId: johnDillinger.id,
                title: "Coordenação Policial Durante a Operação em Chicago",
                description: "Fotografia de investigadores atuando no local com equipamentos de comunicação da época, utilizados para coordenação entre equipes durante operações de grande escala. A imagem reflete o nível de mobilização e a estrutura policial envolvida na caçada a Dillinger.",
                image: "/images/evidences/john-dillinger-4.jpeg",
                order: 3,
            },
            {
                caseId: johnDillinger.id,
                title: "Cartaz de Procura",
                description: "Cartaz oficial de recompensa emitido pelas autoridades americanas oferecendo valores pela captura ou por informações que levassem ao paradeiro de John Dillinger. O material fazia parte das operações federais de busca durante a intensificação da caçada ao criminoso nos 1930.",
                image: "/images/evidences/john-dillinger-5.jpg",
                order: 4,
            },
            {
                caseId: johnDillinger.id,
                title: "Consequências do Cerco em Little Bohemia",
                description: "Fotografia de Max Organist observando armas abandonadas por John Dillinger e sua gangue no Little Bohemia Resort, em Wisconsin, após uma operação do FBI em 22 de abril de 1934. Apesar do cerco policial ao local, os criminosos conseguiram escapar pela região do lado próximo, evidenciando a complexidade e as falhas iniciais da perseguição federal.",
                image: "/images/evidences/john-dillinger-6.jpg",
                order: 5,
            }
        ],
    });

    await prisma.timelineEvent.createMany({
        data: [
            {
                caseId: johnDillinger.id,
                title: "Nascimento de John Dillinger",
                description: "John Herbert Dillinger nasce em Indianápolis, Indiana. Décadas depois, seu nome se tornaria um dos mais conhecidos da história criminal americana.",
                eventDate: new Date("1903-06-22"),
                order: 1,
            },
            {
                caseId: johnDillinger.id,
                title: "Primeira Prisão por Tentativa de Roubo",
                description: "Após uma série de conflitos com a lei durante a juventude, Dillinger é condenado por tentativa de roubo. O período no sistema prisional teria forte influência em sua transformação futura.",
                eventDate: new Date("1924-09-01"),
                order: 2,
            },
            {
                caseId: johnDillinger.id,
                title: "Libertação e Retorno ao Crime",
                description: "Após deixar a prisão, Dillinger rapidamente volta à atividade criminosa, iniciando uma sequência de roubos a bancos que atrairia a atenção das autoridades.",
                eventDate: new Date("1933-05-01"),
                order: 3,
            },
            {
                caseId: johnDillinger.id,
                title: "Ascensão da Gangue Dillinger",
                description: "Dillinger passa a atuar ao lado de outros criminosos, organizando assaltos, fugas e operações cada vez mais ousadas em diferentes estados americanos.",
                eventDate: new Date("1933-08-01"),
                order: 4,
            },
            {
                caseId: johnDillinger.id,
                title: "Fuga de Prisão em Ohio",
                description: "A prisão de Dillinger em Ohio desencadeia uma série de ações violentas realizadas por seus aliados, incluindo ataques a instalações prisionais para garantir sua libertação.",
                eventDate: new Date("1933-10-12"),
                order: 5,
            },
            {
                caseId: johnDillinger.id,
                title: "Caso Passa a Ser Investigado Nacionalmente",
                description: "Após confrontos armados e a morte de um xerife durante uma operação ligada à gangue, o caso deixa de ser uma questão local e passa a mobilizar autoridades federais.",
                eventDate: new Date("1933-10-13"),
                order: 6,
            },
            {
                caseId: johnDillinger.id,
                title: "FBI Intensifica a Caçada",
                description: "Em 1934, Dillinger é considerado uma das maiores prioridades do FBI. Operações interestaduais, vigilâncias e rastreamentos são ampliados para localizar o criminoso.",
                eventDate: new Date("1934-03-01"),
                order: 7,
            },
            {
                caseId: johnDillinger.id,
                title: "Informação de Anna Sage",
                description: "A informante Anna Sage fornece às autoridades informações sobre o paradeiro de Dillinger em Chicago, permitindo o planejamento da operação que encerraria a perseguição.",
                eventDate: new Date("1934-07-22"),
                order: 8,
            },
            {
                caseId: johnDillinger.id,
                title: "Morte de John Dillinger",
                description: "Após deixar o Biograph Theater, em Chicago, Dillinger é cercado por agentes federais. O confronto encerra uma das caçadas policiais mais famosas da década de 1930.",
                eventDate: new Date("1934-07-22"),
                order: 9,
            }
        ],
    });

    await prisma.caseTag.createMany({
        data: [
            {
                caseId: johnDillinger.id,
                tagId: crimeTag.id,
            },
            {
                caseId: johnDillinger.id,
                tagId: grandeDepressaoTag.id,
            },
            {
                caseId: johnDillinger.id,
                tagId: anos1930Tag.id,
            },
            {
                caseId: johnDillinger.id,
                tagId: historiaCriminalTag.id,
            },
            {
                caseId: johnDillinger.id,
                tagId: fbiTag.id,
            },
            {
                caseId: johnDillinger.id,
                tagId: assaltoABancoTag.id,
            },
            {
                caseId: johnDillinger.id,
                tagId: chicagoTag.id,
            },
        ],
    });

    const alCapone = await prisma.case.upsert({
        where: {
            slug: "al-capone",
        },
        update: {},
        create: {
            title: "Al Capone: O Império Invisível de Chicago",

            slug: "al-capone",

            summary: "Durante a Lei Seca, enquanto o álcool era proibido nos Estados Unidos, um império criminoso cresceu nas ruas de Chicago sob o comando de Al Capone. Entre corrupção, disputas territoriais e investigações federais, sua organização se tornou uma das mais influentes da história do crime organizado americano. O caso revela como poder, dinheiro e violência se entrelaçaram em uma época em que a fronteira entre legalidade e criminalidade parecia cada vez mais tênue.",

            content: `Nos anos conhecidos como “os loucos anos vinte”, enquanto os Estados Unidos viviam um período de prosperidade aparente escondida sob leis rígidas de Proibição, uma figura emergiu em Chicago como o símbolo máximo de um sistema paralelo que crescia nas sombras da legalidade. Alphonse Gabriel Capone, conhecido simplesmente como Al Capone, não foi apenas um criminoso. Ele se tornou o arquiteto de um império subterrâneo que transformou a cidade de Chicago em um tabuleiro onde a lei oficial parecia, por vezes, apenas uma sugestão.

Nascido em uma família de imigrantes em Nova York, em 1899, Capone abandonou a escola ainda na infância e rapidamente se envolveu com gangues de rua. Sua trajetória muda de escala quando passa a integrar o círculo de Johnny Torrio, uma das figuras centrais do crime organizado da época. Em pouco tempo, o que era apenas uma associação local se transformou em uma estrutura criminosa altamente organizada, alimentada principalmente pelo lucro explosivo do álcool ilegal durante a Lei Seca. O que antes era contrabando disperso passou a ser um sistema estruturado de produção, distribuição e controle territorial.

Quando Torrio deixou a liderança após sobreviver a uma tentativa de assassinato, Capone assumiu o comando e consolidou sua posição como chefe absoluto do submundo de Chicago. Sob sua liderança, o império se expandiu para muito além do álcool ilegal. Jogos de azar, prostituição, extorsão, corrupção e violência passaram a fazer parte de uma engrenagem que operava com eficiência empresarial e brutalidade calculada. O controle de territórios inteiros da cidade, como o subúrbio de Cicero, demonstrava que o poder de Capone já não se limitava ao crime, mas influenciava diretamente a estrutura social e política local.

A rivalidade entre gangues atingiu seu ápice no final da década de 1920, culminando em episódios de extrema violência que marcaram para sempre a história do crime organizado nos Estados Unidos. Entre eles, o massacre do Dia de São Valentim, em 1929, quando sete membros de uma gangue rival foram executados em uma garagem por homens disfarçados de policiais. Embora Capone estivesse fora da cidade no momento, o episódio foi amplamente associado ao seu grupo, reforçando sua imagem pública como o principal responsável pela escalada de violência em Chicago.

Apesar da fama e da influência, o sistema jurídico inicialmente tinha dificuldades em alcançar Capone. O crime organizado da época operava em camadas de proteção, corrupção e intimidação que dificultavam a construção de casos sólidos. No entanto, o cerco começou a se fechar quando as autoridades federais passaram a investigar não apenas os crimes violentos, mas também as estruturas financeiras por trás do império. Foi nesse ponto que o foco se deslocou para algo aparentemente mais simples, mas juridicamente decisivo: impostos.

As investigações revelaram inconsistências graves em suas declarações financeiras, abrindo caminho para um caso de evasão fiscal que mudaria o rumo de sua história. Em 1931, após anos de tentativas frustradas de responsabilizá-lo por crimes mais diretos, Capone foi finalmente condenado por sonegação de impostos federais. A sentença foi severa, marcando uma virada histórica na forma como o Estado norte-americano lidava com o crime organizado: não foi a violência que o derrubou, mas o dinheiro.

Condenado a mais de uma década de prisão, Capone foi enviado a instituições federais, onde sua saúde começou a deteriorar-se progressivamente. Longe do poder, das ruas de Chicago e da rede de influência que havia construído, ele perdeu gradualmente a capacidade de exercer qualquer controle sobre o mundo que um dia dominou. A prisão não apenas encerrou seu império, mas também desfez a figura pública que o cercava, transformando o outrora temido chefe do crime em um detento isolado.

Quando deixou a prisão, anos depois, Capone já não era mais o mesmo homem. Doente e mentalmente fragilizado, afastou-se completamente da vida pública e do antigo universo do crime. O homem que um dia comandou uma cidade inteira a partir das sombras passou seus últimos anos em reclusão, até sua morte em 1947.

Ainda assim, sua história permanece como um dos capítulos mais emblemáticos da era dos gangsters. Capone não foi apenas um criminoso poderoso, mas o reflexo de um período em que o crime organizado se infiltrou profundamente na estrutura social americana, revelando fragilidades que o sistema levaria anos para compreender e combater.`,

            coverImage: "/images/cases/al-capone-6.webp",

            status: CaseStatus.PUBLISHED,
        },
    });

    await prisma.evidence.createMany({
        data: [
            {
                caseId: alCapone.id,
                title: "Penitenciária Federal de Alcatraz",
                description: "Fotografia da Penitenciária Federal de Alcatraz, localizada em uma ilha na Baía de São Francisco, Califórnia. Considerada uma das prisões mais seguras dos Estados Unidos, Alcatraz recebeu Al Capone em 1934 após sua transferência do sistema penitenciário federal. O isolamento rigoroso e a vigilância constante reduziram drasticamente sua influência sobre as operações criminosas que ainda tentava controlar do lado de fora. Sua passagem por Alcatraz simboliza o declínio definitivo do homem que havia comandado um dos maiores impérios do crime organizado durante a era da Lei Seca.",
                image: "/images/evidences/al-capone-1.jpeg",
                order: 1,
            },
            {
                caseId: alCapone.id,
                title: "Registro Prisional de Al Capone",
                description: "Fotografias de identificação produzidas pelas autoridades penitenciárias após a prisão de Al Capone. Os registros integravam os arquivos oficiais utilizados para catalogação, monitoramento e controle de detentos sob custódia federal.",
                image: "/images/evidences/al-capone-2.jpeg",
                order: 2,
            },
            {
                caseId: alCapone.id,
                title: "Al Capone Durante Procedimentos Judiciais",
                description: "Imagem registrada durante uma audiência relacionada às investigações conduzidas contra Al Capone. A fotografia evidencia a atenção da imprensa e das autoridades em torno de um dos nomes mais influentes do crime organizado americano durante a era da Lei Seca.",
                image: "/images/evidences/al-capone-3.jpeg",
                order: 3,
            },
            {
                caseId: alCapone.id,
                title: "Movimentação Urbana em Chicago Durante a Era de Capone",
                description: "Fotografia de uma movimentada rua de Chicago durante o período em que Al Capone consolidava sua influência na cidade. Registros como este ajudam a contextualizar o ambiente urbano onde organizações criminosas e negócios aparentemente legítimos coexistiam lado a lado.",
                image: "/images/evidences/al-capone-4.jpeg",
                order: 4,
            },
            {
                caseId: alCapone.id,
                title: "Al Capone em Ambiente Administrativo",
                description: "Fotogrifia de Al Capone em um ambiente interno utilizado para reuniões ou atividades administrativas. A imagem ilustra o contraste entre a figura pública associada à violência do crime organizado e a estrutura empresarial que sustentava grande parte das operações de sua organização.",
                image: "/images/evidences/al-capone-5.jpg",
                order: 5,
            }
        ],
    });

    await prisma.timelineEvent.createMany({
        data: [
            {
                caseId: alCapone.id,
                title: "Nascimento de Al Capone",
                description: "Alphonse Gabriel Capone nasce no Brooklyn, Nova York, em uma família de imigrantes italianos.",
                eventDate: new Date("1899-01-17"),
                order: 1,
            },
            {
                caseId: alCapone.id,
                title: "Entrada no Crime Organizado",
                description: "Durante a juventude, Capone passa a integrar gangues de rua e inicia sua aproximação com figuras influentes do submundo criminal.",
                eventDate: new Date("1917-01-01"),
                order: 2,
            },
            {
                caseId: alCapone.id,
                title: "Parceria com Johnny Torrio",
                description: "Capone passa a trabalhar ao lado de Johnny Torrio, consolidando sua posição dentro da estrutura do crime organizado em Chicago.",
                eventDate: new Date("1920-01-17"),
                order: 3,
            },
            {
                caseId: alCapone.id,
                title: "Assume o Controle da Organização",
                description: "Após a saída de Johnny Torrio, Capone assume a liderança do grupo e amplia significativamente suas operações ilegais.",
                eventDate: new Date("1925-01-24"),
                order: 4,
            },
            {
                caseId: alCapone.id,
                title: "Expansão do Império de Chicago",
                description: "A organização amplia seu domínio sobre atividades ligadas ao álcool ilegal, jogos de azar, extorsão e corrupção política.",
                eventDate: new Date("1926-01-01"),
                order: 5,
            },
            {
                caseId: alCapone.id,
                title: "Massacre do Dia de São Valentim",
                description: "Sete membros de uma gangue rival são executados em Chicago em um dos episódios mais violentos da guerra entre organizações criminosas.",
                eventDate: new Date("1929-02-14"),
                order: 6,
            },
            {
                caseId: alCapone.id,
                title: "Investigação Federal Intensificada",
                description: "Autoridades federais concentram esforços em rastrear as finanças da organização liderada por Capone.",
                eventDate: new Date("1930-01-01"),
                order: 7,
            },
            {
                caseId: alCapone.id,
                title: "Condenação por Evasão Fiscal",
                description: "Capone é considerado culpado por sonegação de impostos federais, encerrando anos de impunidade diante das autoridades.",
                eventDate: new Date("1931-10-17"),
                order: 8,
            },
            {
                caseId: alCapone.id,
                title: "Transferência para Alcatraz",
                description: "Capone é enviado para a penitenciária federal de Alcatraz, onde sua influência sobre o crime organizado diminui drasticamente.",
                eventDate: new Date("1934-08-22"),
                order: 9,
            },
            {
                caseId: alCapone.id,
                title: "Morte de Al Capone",
                description: "Após anos afastado da vida pública e com a saúde debilitada, Al Capone morre na Flórida, encerrando um dos capítulos mais conhecidos da história do crime organizado americano.",
                eventDate: new Date("1947-01-25"),
                order: 10,
            }
        ],
    });

    await prisma.caseTag.createMany({
        data: [
            {
                caseId: alCapone.id,
                tagId: crimeTag.id,
            },
            {
                caseId: alCapone.id,
                tagId: historiaCriminalTag.id,
            },
            {
                caseId: alCapone.id,
                tagId: chicagoTag.id,
            },
            {
                caseId: alCapone.id,
                tagId: anos1930Tag.id,
            },
            {
                caseId: alCapone.id,
                tagId: leiSecaTag.id,
            },
            {
                caseId: alCapone.id,
                tagId: mafiaAmericanaTag.id,
            }
        ],
    });

    const machineGun = await prisma.case.upsert({
        where: {
            slug: "machine-gun-kelly",
        },
        update: {},
        create: {
            title: "George 'Machine Gun' Kelly: O Caso que Redesenhou a Caçada ao Crime Organizado",

            slug: "machine-gun-kelly",

            summary: "Em 1933, o sequestro de um empresário do petróleo desencadeou uma investigação que atravessou estados, conectou pistas improváveis e colocou o FBI diante de um de seus maiores desafios até então. No centro do caso estava George 'Machine Gun' Kelly, um criminoso cuja captura ajudaria a redefinir o combate ao crime organizado nos Estados Unidos.",

            content: `Nos primeiros anos da década de 1930, quando os Estados Unidos ainda lidavam com os efeitos profundos da Grande Depressão, um novo tipo de criminalidade começava a ganhar forma no país. Já não se tratava apenas de assaltos isolados ou crimes de oportunidade, mas de operações organizadas, planejadas com precisão e executadas com violência calculada. Entre esses nomes emergentes, poucos chamaram tanta atenção quanto George Kelly Barnes, mais conhecido como George “Machine Gun” Kelly.

Sua fama não nasceu apenas da brutalidade de seus crimes, mas de um único episódio que mudaria para sempre a forma como o FBI conduziria investigações de sequestro. Em julho de 1933, o empresário do petróleo Charles F. Urschel foi raptado em sua própria residência, em Oklahoma City, por homens armados com metralhadoras e pistolas. O crime não foi apenas rápido e audacioso, mas meticulosamente planejado, com instruções detalhadas enviadas aos familiares da vítima, exigindo um resgate de duzentos mil dólares em dinheiro vivo, sem rastreamento e sem intervenção policial.

O sequestro de Urschel não foi um ato isolado, mas parte de uma rede criminosa mais ampla que operava entre diferentes estados americanos. O grupo responsável pela ação demonstrava um nível de organização incomum para a época, utilizando rotas rurais, casas de apoio e uma estrutura logística que dificultava qualquer tentativa imediata de localização. Durante os dias em que permaneceu em cativeiro, Urschel foi deslocado entre diferentes propriedades, mantido vendado e isolado, enquanto seus sequestradores negociavam friamente o pagamento do resgate.

Enquanto isso, uma investigação de escala nacional começava a se formar. O FBI passou a cruzar informações vindas de diferentes estados, analisando pistas aparentemente desconectadas: movimentos bancários suspeitos, relatos de testemunhas, padrões de deslocamento e até condições climáticas. Aos poucos, um detalhe aparentemente trivial revelou-se crucial: a observação de horários de aviões que sobrevoavam regularmente uma área rural específica entre Texas e Oklahoma, combinada com registros meteorológicos da região.

Esses elementos levaram os agentes a uma área próxima a Paradise, Texas, onde residências isoladas pertencentes à família Shannon passaram a ser monitoradas. A investigação revelou uma conexão direta entre essas propriedades e o cativeiro de Urschel, permitindo às autoridades montar o quebra-cabeça completo do esquema de sequestro. A operação culminou em uma série de prisões coordenadas em agosto de 1933, envolvendo não apenas cúmplices diretos, mas também uma rede de apoio que incluía criminosos já conhecidos das autoridades.

Foi nesse contexto que o nome de George Kelly emergiu como peça central do caso. Ao lado de sua esposa, Kathryn Kelly, ele havia desempenhado papel de liderança na organização do sequestro e na movimentação do dinheiro do resgate. Kathryn, em particular, desempenhou um papel ativo na estrutura logística do crime, conectando contatos, intermediando comunicações e ajudando a manter o casal em constante mobilidade entre diferentes estados.

A captura do casal ocorreu em Memphis, no final de setembro de 1933, encerrando uma intensa caçada interestadual. Sem oferecer resistência significativa, George Kelly foi detido por agentes federais, encerrando uma fuga que havia mobilizado recursos policiais em todo o país. O julgamento que se seguiu resultou na condenação de ambos à prisão perpétua, consolidando o caso como um dos mais importantes da história inicial do FBI.

O impacto do caso Kelly-Urschel foi profundo e duradouro. Pela primeira vez, o FBI havia conduzido uma investigação de sequestro em escala nacional com base em coordenação entre múltiplos estados, análise de padrões e uso sistemático de inteligência investigativa. O caso também ajudou a definir novas diretrizes para o combate ao crime organizado, especialmente no que dizia respeito a sequestros com exigência de resgate.

George “Machine Gun” Kelly passou o restante de sua vida no sistema penitenciário federal, onde sua figura foi gradualmente reduzida de lenda criminosa a prisioneiro comum. Kathryn Kelly, por sua vez, cumpriu longa pena e também desapareceu do cenário público após sua libertação.

Ainda assim, o eco do caso permanece. Não apenas pela violência ou pela notoriedade dos envolvidos, mas pelo momento em que o FBI deixou de ser apenas um órgão de investigação reativa e passou a atuar como uma força coordenada em nível nacional. O sequestro de Charles Urschel e a queda de George Kelly marcaram, assim, uma virada silenciosa, mas definitiva, na história da investigação criminal nos Estados Unidos.`,

            coverImage: "/images/cases/machine-gun-5.jpg",

            status: CaseStatus.PUBLISHED,
        },
    });

    await prisma.evidence.createMany({
        data: [
            {
                caseId: machineGun.id,
                title: "Melvin Purvis e Edgar Hoover Após a Captura de Kelly",
                description: "Fotografia de J. Edgar Hoover, diretor do FBI, ao lado do agente Melvin Purvis após a operação que levou à captura de George 'Machine Gun' Kelly. A imagem simboliza um momento decisivo para o FBI, quando a prisão de um dos criminosos mais procurados do país foi apresentada como prova da eficiência de uma nova estratégia federal de combate ao crime organizado.",
                image: "/images/evidences/machine-gun-1.jpeg",
                order: 1,
            },
            {
                caseId: machineGun.id,
                title: "Prisão de George Kelly por Agentes Federais",
                description: "Registro da detenção de George 'Machine Gun' Kelly após a operação conduzida por agentes federais em 1933. A imagem documenta o momento em que um dos criminosos mais produrados dos Estados Unidos deixa de ser alvo de uma caçada interestadual para se tornar prisioneiro sob custódia das autoridades.",
                image: "/images/evidences/machine-gun-2.jpeg",
                order: 2,
            },
            {
                caseId: machineGun.id,
                title: "Ficha Criminal de George 'Machine Gun' Kelly",
                description: "Fotografias de identificação produzidas após sua prisão. Os registros frontal e lateral passaram a integrar os arquivos federais utilizados para catalogação e monitoramento de criminosos envolvidos em atividades interestaduais durante a década de 1930.",
                image: "/images/evidences/machine-gun-3.jpeg",
                order: 3,
            },
            {
                caseId: machineGun.id,
                title: "A Escolta que Marcou o Fim da Caçada",
                description: "Imagem histórica de George Kelly sendo conduzido sob forte escolta policial após sua captura. Um dos agentes transporta uma submetralhadora Thompson, popularmente conhecida como 'Tommy Gun', arma frequentemente associada ao crime organizado da época e que ajudou a construir a reputação que originou o apelido de 'Machine Gun' Kelly.",
                image: "/images/evidences/machine-gun-4.jpeg",
                order: 4,
            },
            {
                caseId: machineGun.id,
                title: "George e Kathryn Kelly Diante da Justiça",
                description: "Fotografia do casal George e Kathryn Kelly durante os procedimentos judiciais relacionados ao sequestro de Charles F. Urschel. A imagem registra um dos momentos mais importantes do caso, quando ambos passaram de figuras centrais de uma das maiores investigações do FBI a réus perante a justiça federal americana.",
                image: "/images/evidences/machine-gun-6.gif",
                order: 5,
            }
        ],
    });

    await prisma.timelineEvent.createMany({
        data: [
            {
                caseId: machineGun.id,
                title: "Ascensão de George Kelly no Crime Organizado",
                description: "George Kelly Barnes passa a atuar em esquemas criminosos cada vez mais sofisticados durante o início da década de 1930, construindo a reputação que mais tarde lhe renderia o apelido de 'Machine Gun' Kelly.",
                eventDate: new Date("1930-01-01"),
                order: 1,
            },
            {
                caseId: machineGun.id,
                title: "Sequestro de Charles F. Urschel",
                description: "Homens armados invadem a residência do empresário do petróleo Charles F. Urschel, em Oklahoma City, e o levam como refém. O crime rapidamente se torna um dos casos de sequestro mais importantes da época.",
                eventDate: new Date("1933-07-22"),
                order: 2,
            },
            {
                caseId: machineGun.id,
                title: "Negociação do Resgate",
                description: "Os sequestradores exigem duzentos mil dólares em troca da libertação de Urschel, utilizando uma rede de apoio interestadual para dificultar a localização do cativeiro.",
                eventDate: new Date("1933-07-25"),
                order: 3,
            },
            {
                caseId: machineGun.id,
                title: "FBI Inicia Investigação Nacional",
                description: "Agentes federais começam a cruzar informações de diferentes estados, analisando registros financeiros, relatos de testemunhas e padrões de deslocamento relacionados ao caso.",
                eventDate: new Date("1933-08-01"),
                order: 4,
            },
            {
                caseId: machineGun.id,
                title: "Propriedades no Texas Entram na Mira",
                description: "A análise de pistas leva os investigadores a propriedades rurais próximas a Paradise, Texas, ligadas à família Shannon e ao possível cativeiro de Urschel.",
                eventDate: new Date("1933-08-10"),
                order: 5,
            },
            {
                caseId: machineGun.id,
                title: "Operação de Prisões Coordenadas",
                description: "Autoridades realizam uma série de prisões envolvendo integrantes da rede responsável pelo sequestro, revelando a extensão da organização criminosa por trás do caso.",
                eventDate: new Date("1933-08-20"),
                order: 6,
            },
            {
                caseId: machineGun.id,
                title: "George e Kathryn Kelly São Identificados",
                description: "As investigações apontam George Kelly e sua esposa Kathryn Kelly como figuras centrais na organização do sequestro e na movimentação do dinheiro do resgate.",
                eventDate: new Date("1933-09-01"),
                order: 7,
            },
            {
                caseId: machineGun.id,
                title: "Captura em Memphis",
                description: "George Kelly e Kathryn Kelly são localizados e presos por agentes federais em Memphis, Tennessee, encerrando uma intensa caçada interestadual.",
                eventDate: new Date("1933-09-26"),
                order: 8,
            },
            {
                caseId: machineGun.id,
                title: "Condenação à Prisão Perpétua",
                description: "Após o julgamento, George Kelly e Kathryn Kelly são condenados à prisão perpétua pelo envolvimento no sequestro de Charles Urschel.",
                eventDate: new Date("1933-10-12"),
                order: 9,
            },
            {
                caseId: machineGun.id,
                title: "Legado para o FBI",
                description: "O caso Kelly-Urschel passa a ser considerado um marco na história da investigação criminal americana, consolidando o FBI como uma força nacional de combate ao crime organizado.",
                eventDate: new Date("1934-01-01"),
                order: 10,
            }
        ],
    });

    await prisma.caseTag.createMany({
        data: [
            {
                caseId: machineGun.id,
                tagId: crimeTag.id,
            },
            {
                caseId: machineGun.id,
                tagId: grandeDepressaoTag.id,
            },
            {
                caseId: machineGun.id,
                tagId: fbiTag.id,
            },
            {
                caseId: machineGun.id,
                tagId: anos1930Tag.id,
            },
            {
                caseId: machineGun.id,
                tagId: historiaCriminalTag.id,
            },
            {
                caseId: machineGun.id,
                tagId: sequestroTag.id,
            },
            {
                caseId: machineGun.id,
                tagId: oklahomaTag.id,
            },
            {
                caseId: machineGun.id,
                tagId: texasTag.id,
            }
        ],
    });

        const kansasCityMassacre = await prisma.case.upsert({
        where: {
            slug: "massacre-kansas-city",
        },
        update: {},
        create: {
            title: "O Massacre de Kansas City: Trinta Segundos que Mudaram o FBI",

            slug: "massacre-kansas-city",

            summary: "Em junho de 1933, uma tentativa ousada de libertar um prisioneiro federal transformou uma estação ferroviária em cenário de guerra. O confronto durou menos de um minuto, deixou mortos de ambos os lados e desencadeou mudanças que redefiniriam o papel do FBI no combate ao crime organizado americano.",

            content: `Na manhã de 17 de junho de 1933, a cidade de Kansas City despertava para mais um dia comum. Passageiros desembarcavam de trens vindos de diferentes partes do país, trabalhadores atravessavam a imponente Union Station e policiais realizavam suas rotinas habituais. Nada indicava que, em poucos minutos, aquele local se transformaria em palco de uma das emboscadas mais violentas da história do crime americano.

O homem no centro de tudo chamava-se Frank Nash. Veterano do submundo do crime, Nash carregava um longo histórico de condenações que remontava às primeiras décadas do século XX. Assassinato, roubos e fugas faziam parte de sua trajetória. Depois de escapar da Penitenciária Federal de Leavenworth em 1930, tornou-se alvo de uma extensa caçada conduzida pelo FBI. Durante quase três anos, agentes federais cruzaram estados inteiros em busca de pistas sobre seu paradeiro, enquanto Nash permanecia protegido por uma rede de criminosos espalhada pelo Meio-Oeste americano.

A busca finalmente chegou ao fim em junho de 1933, quando agentes federais localizaram o fugitivo em Hot Springs, Arkansas. A prisão ocorreu sem grande resistência. Para as autoridades, parecia o encerramento de uma longa perseguição. Para os aliados de Nash, porém, era apenas o início de uma operação desesperada.

A notícia de sua captura espalhou-se rapidamente pelos círculos criminosos. Entre aqueles que decidiram agir estavam alguns dos homens mais perigosos da época: Vernon Miller, um ex-xerife que havia trocado a lei pelo crime, Adam Richetti, jovem assaltante em ascensão, e Charles Arthur Floyd, conhecido nacionalmente como "Pretty Boy" Floyd. O objetivo era simples e extremamente arriscado: interceptar o transporte do prisioneiro e libertá-lo antes que retornasse à prisão.

Durante a noite de 16 de junho, enquanto Nash era transportado de trem para Kansas City sob forte escolta, os conspiradores preparavam os detalhes da emboscada. O plano dependia de velocidade, surpresa e poder de fogo. Os criminosos sabiam exatamente quando o trem chegaria e onde o prisioneiro desembarcaria. Tudo indicava que o confronto aconteceria diante de dezenas de testemunhas.

Pouco depois das sete da manhã, os agentes federais conduziram Frank Nash para fora da estação ferroviária. O grupo parecia seguro. Após uma rápida inspeção da área, nada chamou a atenção dos policiais. Os veículos estavam posicionados do lado de fora, prontos para partir. Nash, algemado, caminhava cercado por agentes e policiais locais. O transporte estava prestes a começar.
Então tudo aconteceu.

Quando os oficiais começaram a entrar nos automóveis, homens armados surgiram entre os veículos estacionados. Um grito rompeu o silêncio da estação. Em seguida vieram os disparos.
O ataque durou cerca de trinta segundos.

Metralhadoras e pistolas despejaram uma quantidade devastadora de tiros sobre os agentes. Os policiais Frank Hermanson e William Grooms caíram quase imediatamente. O agente federal Raymond Caffrey foi atingido mortalmente enquanto tentava entrar no carro. Dentro do veículo, Frank Nash e o chefe de polícia Otto Reed também foram mortos pelos disparos que atravessavam portas, vidros e lataria. Outros agentes sobreviveram apenas porque se jogaram no assoalho do automóvel enquanto os tiros destruíam tudo ao redor.

Quando a fumaça começou a dissipar-se, os atacantes correram até o veículo dos policiais para verificar o resultado da emboscada. Convencidos de que ninguém havia sobrevivido, abandonaram o local em alta velocidade. O objetivo da operação era libertar Frank Nash. Em vez disso, o próprio prisioneiro estava morto junto de seus escoltas.

A cena deixada para trás chocou o país inteiro. Corpos espalhados diante da principal estação ferroviária de Kansas City, veículos perfurados por dezenas de disparos e testemunhas incapazes de compreender o que haviam acabado de presenciar. A imprensa rapidamente transformou o episódio em manchete nacional. O caso passaria à história como o Massacre de Kansas City.

A resposta das autoridades foi imediata. O FBI iniciou uma investigação em escala nacional para identificar todos os envolvidos. Impressões digitais encontradas em esconderijos, relatos de testemunhas e conexões entre membros do submundo permitiram reconstruir gradualmente a conspiração. As evidências apontavam para Vernon Miller, Adam Richetti e Pretty Boy Floyd como os principais executores da emboscada.

Nos meses seguintes, iniciou-se uma intensa caçada. Miller desapareceu entre diferentes cidades até que seu corpo foi encontrado em uma vala nos arredores de Detroit. Espancado e estrangulado, tornou-se mais uma vítima das disputas internas do crime organizado. Richetti foi capturado após um confronto policial e levado a julgamento, sendo posteriormente condenado à morte. Floyd, por sua vez, conseguiu escapar por mais de um ano, tornando-se um dos homens mais procurados dos Estados Unidos.

Sua fuga terminou em outubro de 1934, em uma área rural de Ohio. Cercado por agentes federais e policiais locais, Floyd foi baleado durante uma tentativa de abordagem. Segundo testemunhas presentes, suas últimas palavras teriam sido simples e diretas: "Estou acabado."

O caso parecia encerrado. Os responsáveis estavam mortos, presos ou condenados. Mas o verdadeiro impacto do Massacre de Kansas City estava apenas começando.

A violência do episódio provocou uma profunda transformação no sistema federal de investigação. Até então, os agentes do FBI possuíam limitações significativas em suas funções operacionais. A repercussão nacional do massacre levou o Congresso a conceder novos poderes à agência, incluindo autoridade para portar armas e realizar prisões diretamente. Pouco tempo depois, a organização passaria por mudanças estruturais que consolidariam sua identidade moderna.

Assim, o Massacre de Kansas City tornou-se muito mais do que uma tentativa fracassada de resgate. Foi um acontecimento que expôs a ousadia das quadrilhas da Era dos Gângsteres e demonstrou que o crime organizado havia alcançado um nível de coordenação capaz de desafiar as próprias autoridades federais. Em apenas trinta segundos de violência, uma emboscada transformou-se em um marco histórico que redefiniria para sempre a forma como os Estados Unidos combateriam o crime.`,

            coverImage: "/images/cases/kansas-city-massacre-1.jpeg",

            status: CaseStatus.PUBLISHED,
        },
    });

    await prisma.evidence.createMany({
        data: [
            {
                caseId: kansasCityMassacre.id,
                title: "Vigilância Federal Durante a Caçada aos Conspiradores",
                description: "Agente federal realiza observação discreta de uma propriedade rural enquanto utiliza equipamento portátil de comunicação de longo alcance. Operações de vigilância semelhantes foram empregadas durante a investigação do Massacre de Kansas City para localizar suspeitos ligados à conspiração que resultou na morte de Frank Nash e de agentes da lei em 1933.",
                image: "/images/evidences/kansas-city-massacre-2.jpeg",
                order: 1,
            },
            {
                caseId: kansasCityMassacre.id,
                title: "Análise de Pertences Apreendidos na Investigação",
                description: "Investigadores examinam o conteúdo de uma mala apreendida durante diligências relacionadas à rede criminosa associada ao Massacre de Kansas City. Objetos pessoais, documentos e outros materiais recolhidos em operações policiais frequentemente serviam para conectar suspeitos, esconderijos e rotas utilizadas pelos envolvidos.",
                image: "/images/evidences/kansas-city-massacre-3.jpeg",
                order: 2,
            },
            {
                caseId: kansasCityMassacre.id,
                title: "Union Station de Kansas City",
                description: "Vista da fachada principal da Union Station, local onde ocorreu a emboscada de 17 de junho de 1933. Foi diante desta estação ferroviária que agentes federais, policiais locais e o prisioneiro Frank Nash foram surpreendidos por homens armados, em um ataque que se tornaria conhecido como o Massacre de Kansas City.",
                image: "/images/evidences/kansas-city-massacre-4.jpeg",
                order: 3,
            },
            {
                caseId: kansasCityMassacre.id,
                title: "Registro Criminal de Frank Nash",
                description: "Fotografia de identificação de Frank Nash, criminoso procurado por autoridades federais após sua fuga da Penitenciária Federal de Leavenworth. Sua captura em Arkansas e posterior transporte para Kansas City desencadearam os eventos que culminaram na emboscada de 1933.",
                image: "/images/evidences/kansas-city-massacre-5.jpeg",
                order: 4,
            },
            {
                caseId: kansasCityMassacre.id,
                title: "Charles 'Pretty Boy' Floyd",
                description: "Fotografia de identificação de Charles Arthur Floyd, conhecido como 'Pretty Boy' Floyd. Considerado um dos criminosos mais procurados dos Estados Unidos durante a Era dos Gângsteres, seu nome foi associado à conspiração responsável pelo Massacre de Kansas City, tornando-se alvo de uma intensa caçada federal após o ataque.",
                image: "/images/evidences/kansas-city-massacre-6.png",
                order: 5,
            }
        ],
    });

    await prisma.timelineEvent.createMany({
        data: [
            {
                caseId: kansasCityMassacre.id,
                title: "Fuga de Frank Nash de Leavenworth",
                description: "Frank Nash escapa da Penitenciária Federal de Leavenworth, tornando-se um dos fugitivos mais procurados pelas autoridades americanas.",
                eventDate: new Date("1930-01-01"),
                order: 1,
            },
            {
                caseId: kansasCityMassacre.id,
                title: "Início da Caçada Nacional",
                description: "O FBI inicia uma extensa busca por Frank Nash, cruzando informações entre diversos estados e monitorando possíveis contatos do criminoso.",
                eventDate: new Date("1930-06-01"),
                order: 2,
            },
            {
                caseId: kansasCityMassacre.id,
                title: "Captura em Hot Springs",
                description: "Após quase três anos de buscas, agentes federais localizam e prendem Frank Nash em Hot Springs, Arkansas.",
                eventDate: new Date("1933-06-16"),
                order: 3,
            },
            {
                caseId: kansasCityMassacre.id,
                title: "Conspiração para Libertar Nash",
                description: "Criminosos ligados ao submundo americano organizam uma operação para interceptar o transporte de Frank Nash e impedir seu retorno à prisão.",
                eventDate: new Date("1933-06-16"),
                order: 4,
            },
            {
                caseId: kansasCityMassacre.id,
                title: "Chegada à Union Station",
                description: "Frank Nash desembarca em Kansas City sob escolta de agentes federais e policiais locais, sem saber que uma emboscada já estava preparada.",
                eventDate: new Date("1933-06-17"),
                order: 5,
            },
            {
                caseId: kansasCityMassacre.id,
                title: "O Massacre de Kansas City",
                description: "Homens armados abrem fogo contra os agentes responsáveis pelo transporte de Frank Nash. O ataque dura cerca de trinta segundos e deixa mortos tanto entre os policiais quanto entre os criminosos envolvidos.",
                eventDate: new Date("1933-06-17"),
                order: 6,
            },
            {
                caseId: kansasCityMassacre.id,
                title: "Investigação Federal é Iniciada",
                description: "O FBI mobiliza recursos em escala nacional para identificar os responsáveis pela emboscada e reconstruir os acontencimentos ocorridos na estação ferroviária.",
                eventDate: new Date("1933-06-18"),
                order: 7,
            },
            {
                caseId: kansasCityMassacre.id,
                title: "Vernon Miller é Encontrado Morto",
                description: "Um dos principais suspeitos da emboscada é encontrado morto nos arredores de Detroit, encerrando qualquer possibilidade de julgamento.",
                eventDate: new Date("1933-11-29"),
                order: 8,
            },
            {
                caseId: kansasCityMassacre.id,
                title: "Captura de Adam Richetti",
                description: "Adam Richetti é preso após meses de fuga e posteriormente condenado por participação na conspiração relacionada ao massacre.",
                eventDate: new Date("1934-10-22"),
                order: 9,
            },
            {
                caseId: kansasCityMassacre.id,
                title: "Queda de Pretty Boy Floyd",
                description: "Charles Arthur Floyd é localizado em Ohio e morto durante uma operação policial, encerrando a caçada contra um dos nomes associados ao massacre.",
                eventDate: new Date("1934-10-22"),
                order: 10,
            },
            {
                caseId: kansasCityMassacre.id,
                title: "Novos Poderes para o FBI",
                description: "A repercussão nacional do massacre contribui para mudanças legislativas que ampliam a autoridade dos agentes federais, incluindo o porte de armas e a realização de prisões.",
                eventDate: new Date("1934-06-01"),
                order: 11,
            },
            {
                caseId: kansasCityMassacre.id,
                title: "Um Marco na História da Investigação Criminal",
                description: "O Massacre de Kansas City passa a ser reconhecido como um dos eventos que impulsionaram a transformação do FBI em uma agência federal moderna de combate ao crime organizado.",
                eventDate: new Date("1935-01-01"),
                order: 12,
            }
        ],
    });

    await prisma.caseTag.createMany({
        data: [
            {
                caseId: kansasCityMassacre.id,
                tagId: crimeTag.id,
            },
            {
                caseId: kansasCityMassacre.id,
                tagId: fbiTag.id,
            },
            {
                caseId: kansasCityMassacre.id,
                tagId: anos1930Tag.id,
            },
            {
                caseId: kansasCityMassacre.id,
                tagId: historiaCriminalTag.id,
            },
            {
                caseId: kansasCityMassacre.id,
                tagId: kansasCityTag.id,
            },
            {
                caseId: kansasCityMassacre.id,
                tagId: eraDosGangstersTag.id,
            },
            {
                caseId: kansasCityMassacre.id,
                tagId: prettyBoyFloydTag.id,
            },
            {
                caseId: kansasCityMassacre.id,
                tagId: frankNashTag.id,
            }
        ],
    });

    const seaburyInvestigation = await prisma.case.upsert({
        where: {
            slug: "investigação-seabury",
        },
        update: {},
        create: {
            title: "A Investigação Seabury: O Homem que Derrubou a Máquina de Nova York",

            slug: "investigação-seabury",

            summary: "Em uma Nova York marcada pela corrupção política e pela influência de Tammany Hall, uma investigação iniciada nos tribunais revelou uma rede de favorecimentos, enriquecimento ilícito e abusos de poder que alcançou os mais altos níveis do governo municipal. O que começou como uma simples apuração administrativa acabaria provocando uma das maiores crises políticas da história da cidade.",

            content: `No início da década de 1930, Nova York era uma cidade de contrastes. Enquanto arranha-céus continuavam a redefinir o horizonte urbano e milhares de pessoas lotavam as ruas em busca de trabalho durante a Grande Depressão, uma rede de corrupção silenciosa operava nos bastidores do poder municipal. Juízes, policiais, funcionários públicos e políticos influentes movimentavam-se por um sistema que, para muitos cidadãos, parecia intocável. Era uma engrenagem construída ao longo de décadas, protegida por interesses políticos e alimentada pela convicção de que ninguém seria capaz de desmontá-la.

Foi nesse cenário que surgiu Samuel Seabury.

Advogado respeitado, ex-juiz e conhecido defensor de reformas públicas, Seabury havia construído uma carreira sólida nos tribunais de Nova York. Poderia ter permanecido confortavelmente em seu escritório, administrando uma prática jurídica lucrativa e distante dos escândalos políticos da cidade. Em vez disso, em 1930, aceitou uma missão que poucos desejavam assumir: investigar denúncias de corrupção nos Tribunais de Magistrados de Nova York.

O que inicialmente parecia uma auditoria limitada rapidamente revelou algo muito maior.

Ao reunir uma equipe de jovens advogados e investigadores, Seabury iniciou um trabalho meticuloso que consumiria os dois anos seguintes. Centenas de testemunhas foram entrevistadas. Documentos foram analisados. Audiências públicas passaram a expor detalhes que, até então, circulavam apenas como rumores pelos corredores do governo municipal. Quanto mais a investigação avançava, mais evidente se tornava que o problema não estava restrito a alguns indivíduos isolados.

O sistema inteiro estava comprometido.

Os depoimentos revelaram que cargos de magistrados frequentemente não eram ocupados por mérito ou experiência jurídica, mas distribuídos como recompensas políticas. A influência da poderosa máquina política de Tammany Hall estendia-se profundamente pelos tribunais da cidade. Líderes partidários intercediam em processos, protegiam aliados e pressionavam magistrados em benefício de interesses particulares. A justiça, em muitos casos, havia deixado de ser imparcial.

Entre as descobertas mais chocantes estavam os abusos praticados pela chamada Vice Squad, uma divisão policial responsável pelo combate à prostituição e aos chamados crimes de moralidade. A investigação demonstrou que mulheres inocentes haviam sido enquadradas como prostitutas por policiais corruptos, muitas vezes para alimentar estatísticas ou atender interesses específicos. Algumas dessas condenações eram baseadas em provas fabricadas e testemunhos manipulados. Anos depois, várias vítimas seriam oficialmente perdoadas graças às evidências trazidas à tona pela investigação.

Mas Seabury não pretendia parar nos tribunais.

À medida que sua reputação crescia, novas investigações começaram a ser abertas. O foco expandiu-se para diferentes setores da administração pública, alcançando promotores, chefes de departamento e figuras influentes da política nova-iorquina. Em cada nova audiência surgiam indícios de favorecimentos, acordos secretos e enriquecimento incompatível com os salários oficiais dos envolvidos.

O momento mais emblemático ocorreu quando as investigações alcançaram o gabinete do xerife de Nova York. Questionado sobre a origem de sua fortuna, muito superior aos rendimentos que declarava receber, o funcionário apresentou uma explicação que rapidamente se tornaria motivo de piada em toda a cidade. Segundo ele, o dinheiro vinha de uma misteriosa "caixa de lata" onde teria guardado economias ao longo dos anos.

A justificativa era tão absurda que entrou para a história.

Logo outros investigados passaram a recorrer a versões semelhantes. Sempre que surgiam perguntas sobre riqueza inexplicável, aparecia uma nova "caixa de lata". A expressão tornou-se símbolo do esforço desesperado de autoridades corruptas para justificar o injustificável.

Enquanto isso, Seabury continuava avançando.

O passo seguinte levou a investigação ao mais alto nível do governo municipal: o gabinete do prefeito James J. Walker. Carismático, popular e cercado por admiradores, Walker era uma das figuras políticas mais influentes da cidade. Muitos acreditavam que sua posição era inabalável. Seabury pensava diferente.

Antes mesmo de convocar o prefeito para depor, sua equipe passou meses analisando registros financeiros, movimentações bancárias e documentos particulares. O objetivo era simples: construir um caso baseado em fatos, não em suspeitas. Quando as audiências começaram, o confronto transformou-se em um dos eventos políticos mais acompanhados dos Estados Unidos.

Durante dias, Walker negou qualquer envolvimento em irregularidades. Seabury, porém, apresentava documentos, registros e contradições que enfraqueciam progressivamente a defesa do prefeito. A pressão pública aumentava a cada nova revelação.
As evidências foram encaminhadas ao governador de Nova York, Franklin D. Roosevelt, que passou a avaliar a possibilidade de remover Walker do cargo. Antes que uma decisão oficial fosse anunciada, porém, o prefeito tomou sua própria decisão.

Em setembro de 1932, James Walker renunciou.

A queda do prefeito representou o ponto culminante das investigações. Em pouco mais de dois anos, Samuel Seabury havia exposto um sistema de corrupção que muitos acreditavam ser permanente. Magistrados renunciaram, funcionários foram afastados, autoridades perderam seus cargos e a influência de Tammany Hall sofreu um dos golpes mais severos de sua história.

Ao final dos trabalhos, mais de dois mil depoimentos haviam sido coletados e centenas de audiências realizadas. O impacto foi tão profundo que diversas reformas administrativas e judiciais foram implementadas nos anos seguintes, alterando significativamente o funcionamento da administração municipal de Nova York.

Curiosamente, Seabury recusou qualquer recompensa financeira por seu trabalho. Quando lhe foi oferecida uma quantia considerável pelos serviços prestados à cidade, respondeu que preferia contribuir gratuitamente para corrigir as injustiças que havia encontrado. Para ele, a investigação não era uma oportunidade profissional, mas um dever cívico.

Décadas depois, seu nome continua associado a uma das maiores campanhas anticorrupção da história americana. Não por causa de prisões espetaculares ou perseguições cinematográficas, mas porque demonstrou algo mais raro: que mesmo os sistemas mais profundamente enraizados podem ser desmontados quando alguém está disposto a seguir as evidências até o fim.

A Investigação Seabury não revelou apenas a corrupção de uma cidade. Revelou como o poder opera quando acredita estar acima da fiscalização e o que pode acontecer quando alguém decide desafiar essa certeza.`,

            coverImage: "/images/cases/seabury-investigation-5.jpg",

            status: CaseStatus.PUBLISHED,
        },
    });

    await prisma.evidence.createMany({
        data: [
            {
                caseId: seaburyInvestigation.id,
                title: "James J. Walker Durante as Audiências da Investigação Seabury",
                description: "Fotografia do prefeito James J. Walker prestando depoimento durante as audiências conduzidas por Samuel Seabury. As sessões públicas examinaram suspeitas de corrupção e favorecimento político na administração municipal de Nova York, tornando-se um dos momentos mais emblemáticos da investigação.",
                image: "/images/evidence/seabury-investigation-2.jpeg",
                order: 1,
            },
            {
                caseId: seaburyInvestigation.id,
                title: "New York and The Seabury Investigation",
                description: "Este livro de John Dewey analisa os impactos políticos e institucionais das investigações conduzidas por Samuel Seabury, documentando como as audiências ajudaram a revelar práticas de corrupção profundamente enraizadas na administração pública de Nova York.",
                image: "/images/evidences/seabury-investigation-4.jpeg",
                order: 2,
            },
            {
                caseId: seaburyInvestigation.id,
                title: "Manchete do New York Times Sobre a Investigação Seabury",
                description: "Edição do The New York Times destacando os desdobramentos da Investigação Seabury. A publicação apresenta Samuel Seabury ao centro e evidencia a enorme repercussão pública das audiências, que expuseram magistrados, funcionários públicos e líderes políticos envolvidos em esquemas de corrupção na cidade de Nova York.",
                image: "/images/evidences/seabury-investigation-6.png",
                order: 3,
            }
        ],
    });

    await prisma.timelineEvent.createMany({
        data: [
            {
                caseId: seaburyInvestigation.id,
                title: "Samuel Seabury Assume a Investigação",
                description: "Samuel Seabury aceita liderar uma investigação sobre denúncias de corrupção nos Tribunais de Magistrados de Nova York, iniciando uma apuração que rapidamente ultrapassaria os limites do sistema judiciário.",
                eventDate: new Date("1930-01-01"),
                order: 1,
            },
            {
                caseId: seaburyInvestigation.id,
                title: "Audiência Revelam Corrupção Sistêmica",
                description: "Depoimentos e documentos analisados pela comissão demonstram que cargos públicos e decisões judiciais estavam sendo influenciados por interesses políticos ligados à máquina de Tammany Hall.",
                eventDate: new Date("1930-09-01"),
                order: 2,
            },
            {
                caseId: seaburyInvestigation.id,
                title: "Escândalo da Vice Squad Vem à Tona",
                description: "A investigação expõe abusos cometidos por policiais da Vice Squad, incluindo prisões injustificadas e manipulação de provas contra mulheres acusadas de prostituição.",
                eventDate: new Date("1931-03-01"),
                order: 3,
            },
            {
                caseId: seaburyInvestigation.id,
                title: "Investigação Alcança Altos Funcionários",
                description: "As audiências passam a examinar promotores, chefes de departamento e outras autoridades municipais suspeitas de favorecimento político e enriquecimento incompatível com seus salários.",
                eventDate: new Date("1931-08-01"),
                order: 4,
            },
            {
                caseId: seaburyInvestigation.id,
                title: "Surge o Escândalo da 'Caixa de Lata'",
                description: "Questionado sobre a origem de sua fortuna, um funcionário público atribui sua riqueza a economias guardadas em uma suposta 'caixa de lata', tornando-se símbolo do descrédito das justificativas apresentadas pelos investigados.",
                eventDate: new Date("1931-12-01"),
                order: 5,
            },
            {
                caseId: seaburyInvestigation.id,
                title: "O Gabinete do Prefeito Entra na Mira",
                description: "As investigações avançam até o prefeito James J. Walker, considerado uma das figuras políticas mais poderosas e populares de Nova York.",
                eventDate: new Date("1932-04-01"),
                order: 6,
            },
            {
                caseId: seaburyInvestigation.id,
                title: "Confronto Público com James Walker",
                description: "Durante audiências amplamente acompanhadas pela imprensa, Samuel Seabury apresenta documentos e registros que colocam em dúvida as explicações do prefeito sobre suas finanças e relações políticas.",
                eventDate: new Date("1932-07-01"),
                order: 7,
            },
            {
                caseId: seaburyInvestigation.id,
                title: "Renúncia do Prefeito de Nova York",
                description: "Sob crescente pressão política e diante das evidências reunidas pela investigação, James J. Walker renuncia ao cargo de prefeito antes que medidas formais sejam adotadas pelo governador Franklin D. Roosevelt.",
                eventDate: new Date("1932-09-01"),
                order: 8,
            },
            {
                caseId: seaburyInvestigation.id,
                title: "Legado das Investigações Seabury",
                description: "Após mais de dois mil depoimentos e centenas de audiências, as conclusões da investigação impulsionam reformas administrativas e judiciais que alteram significativamente o funcionamento do governo municipal de Nova York.",
                eventDate: new Date("1932-12-01"),
                order: 9,
            }
        ],
    });

    await prisma.caseTag.createMany({
        data: [
            {
                caseId: seaburyInvestigation.id,
                tagId: grandeDepressaoTag.id,
            },
            {
                caseId: seaburyInvestigation.id,
                tagId: corrupcaoPoliticaTag.id,
            },
            {
                caseId: seaburyInvestigation.id,
                tagId: novaYorkTag.id,
            },
            {
                caseId: seaburyInvestigation.id,
                tagId: tammanyHallTag.id,
            },
            {
                caseId: seaburyInvestigation.id,
                tagId: investigacaoPublicaTag.id,
            },
            {
                caseId: seaburyInvestigation.id,
                tagId: historiaAmericanaTag.id,
            },
            {
                caseId: seaburyInvestigation.id,
                tagId: reformaGovernamentalTag.id,
            }
        ],
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (error) => {
        console.log(error);
        await prisma.$disconnect();
        throw error;
    });
