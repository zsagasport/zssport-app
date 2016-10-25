import { Match } from "./match.model";

const
    CHELSEA = "Chelsea",
    LEICESTER = "Leicester City",
    ARSENAL = "Arsenal",
    SWANSEA = "Swansea City",
    MUNITED = "Man United",
    LIVERPOOL = "Liverpool FC";

export const MATCHES:Match[] = [
     {
        id: 2016170910,
        awayClub: MUNITED,
        awayGoals: 0,
        date: '2016/10/17',
        finished: true,
        homeClub: LIVERPOOL,
        homeGoals: 0,
        round: 8
    },
    {
        id: 2016170901,
        homeClub: CHELSEA,
        homeGoals: 3,
        awayClub: LEICESTER,
        awayGoals: 0,
        finished: true,
        date: '2016/10/15',
        round: 8
    },
    {
        id: 2016170902,
        homeClub: ARSENAL,
        homeGoals: 3,
        awayClub: SWANSEA,
        awayGoals: 2,
        finished: true,
        date: '2016/10/15',
        round: 8
    },
];