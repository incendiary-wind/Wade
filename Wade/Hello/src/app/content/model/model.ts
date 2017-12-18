namespace Model {
    export class Card {
        public id: number;
        public units: string;
        public cost: number;
        public datezap: Date;
        public docnumber: number;
        public control: string;
        public status: string;
    }

    export class Place {
        public id: number;
        public mark: string;
        public sort: string;
        public profile: string;
        public size: number;
        public nomenklaturnumber: number;
    }
    export class Material {
        public id: number;
        public name: string;
        public type: string;
        public mass: number;
        public passnumber: number;
    }
    export class CArdExp extends Card {
        public place: Array<Place>;
        public material: Array<Material>;
    }

    export class Warehouse {
        public id: number;
        public name: string;
        public isActive: boolean;
        public type ?: string;
    }

}
