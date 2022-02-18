export interface ISubmission{
    task: {
            id: number,
            title: string,
            description: string,
        },
    player: {
        id: number
    },
    solution: string,
    description: string,
}