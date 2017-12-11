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

    export class Card {
        public id: number;
        public place: Array<Place>;
        public units: string;
        public cost: number;
        public datezap: Date;
        public docnumber: number;
        public material: Array<Material>;
        public control: string;
        public status: string;
    }

    export class Place{
        public id: number;
        public mark: string;
        public sort: string;
        public profile: string;
        public size: number;
        public nomenklaturnumber: number;
    }
    export class Material{
        public id: number;
        public name: string;
        public type: string;
        public mass: number;
        public passnumber: number;
    }


}
