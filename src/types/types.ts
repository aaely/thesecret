export interface MySyntheticEvent {
    bubbles: boolean;
    cancelable: boolean;
    currentTarget: EventTarget;
    defaultPrevented: boolean;
    eventPhase: number;
    isTrusted: boolean;
    nativeEvent: Event;
    preventDefault(): void;
    stopPropagation(): void;
    target: EventTarget;
    timeStamp: Date;
    type: string;
}

interface EventTarget {
    id: string,
    value: any
}

export type Chapter = {
    chapterId: number,
    pages: [number],
    title: string,
    description: string
}

export type Page = {
    pageNumber: number,
    chapterId: number,
    content: string
}

export type eBook = {
    owner: string,
    pageCount: number,
    chapterCount: number,
    openingMessage: string,
    newestVersionHash: string,
    coverImageHash: string,
    title: string,
    chapters: [Chapter],
    pages: [Page],
    legalDisclaimer: string
}

export const chapterConstructor = (): Chapter => ({
    'chapterId': 0,
    'pages': [0],
    'title': '',
    'description': ''
})

export const pageConstructor = (): Page => ({
    'pageNumber': 0,
    'chapterId': 0,
    'content': ''
})

export const eBookConstructor = (): eBook => ({
    'owner': '',
    'pageCount': 0,
    'chapterCount': 0,
    'openingMessage': '',
    'newestVersionHash': '',
    'coverImageHash': '',
    'title': '',
    'chapters': [chapterConstructor()],
    'pages': [pageConstructor()],
    'legalDisclaimer': ''
})