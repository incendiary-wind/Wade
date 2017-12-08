namespace Model {
    export class DiaryItem {
        public id: number;
        public start: Date;
        public end: Date;
        public taskId: number;
    }
    export class Task {
        public id: number;
        public title: string;
        public descrption: string;
        public statusId: number;
        public deadline: Date;
    }
    export class TaskStatus {
        public id: number;
        public title: string;
    }
    export declare type PeriodType = 'day'|'week'|'month'|'year';
}
