export interface IGameState {
    boxSelected: boolean,
    playedMana: boolean,
    unplayedMana: number[],
    availableMana: number[],
    tappedMana: number[],
    sacrificedMana: number[],
    lastPlayed: number,
    lastSacrified: number,
    packTapped: number[],
    packUntapped: number[],
}

export const defaultGameState: IGameState = {
    boxSelected: false,
    unplayedMana: [],
    availableMana: [],
    tappedMana: [],
    playedMana: false,
    sacrificedMana: [],
    lastPlayed: 20,
    lastSacrified: 20,
    packTapped: [],
    packUntapped: [],
}

// export enum packOptions {
//     allyMana = `allyMana`,
//     enemyMana = `enemyMana`,
//     untappedMana = `untappedMana`,
//     tappedMana = `tappedMana`,
//     shockMana = `shockMana`,
//     allyShock = `allyShock`,
//     enemyShock = `enemyShock`,

// }

export const pack = {
    allyMana: [0, 1, 2, 3, 4, 10, 11, 12, 13, 14],
    enemyMana: [0, 1, 2, 3, 4, 15, 16, 17, 18, 19],
    untappedMana: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    tappedMana: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    shockMana: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    allyShock: [0, 1, 2, 3, 4, 10, 11, 12, 13, 14],
    enemyShock: [0, 1, 2, 3, 4, 15, 16, 17, 18, 19]
}

// export const manaList = [
//     // Untapped Mana
//     'w',
//     'u',
//     'b',
//     'r',
//     'g',
//     'w',
//     'u',
//     'b',
//     'r',
//     'g',
//     // 5 Allied Tapped Mana
//     'wu',
//     'ub',
//     'br',
//     'rg',
//     'wg',
//     // 5 Enemy Tapped Mana
//     'ur',
//     'ug',
//     'bg',
//     'wb',
//     'wr',
// ]

export const altTextList = [
    // Untapped Mana
    'White Mana',
    'Blue Mana',
    'Black Mana',
    'Red Mana',
    'Green Mana',
    'White Mana',
    'Blue Mana',
    'Black Mana',
    'Red Mana',
    'Green Mana',
    // 5 Allied Tapped Mana
    'White/Blue Mana',
    'Blue/Black Mana',
    'Black/Red Mana',
    'Red/Green Mana',
    'White/Green Mana',
    // 5 Enemy Tapped Mana
    'Blue/Red Mana',
    'Blue/Green Mana',
    'Black/Green Mana',
    'White/Black Mana',
    'White/Red Mana',
]

export const imageArray = [
    `white`,
    `blue`,
    `black`,
    `red`,
    `green`,
    `white`,
    `blue`,
    `black`,
    `red`,
    `green`,
    // 5 Allied Tapped Mana
    `azorius`,
    `dimir`,
    `rakdos`,
    `gruul`,
    `selesnya`,
    // 5 Enemy Tapped Mana
    `izzet`,
    `simic`,
    `golgari`,
    `orzhov`,
    `boros`,
]