import { PrismaClient, CaseStatus } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
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

    const bonnieAndClyde = await prisma.case.create({
        data: {
            title: "Bonnie & Clyde: A Última Estrada do Crime",

            slug: "bonnie-clyde-a-ultima-estrada-do-crime",

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
