/* 
도전 과제 조건
1. Member, Dinner interface 만들고 타입 지정하기
2. organize 내부 로직 채우기
*/

interface Member {
    name: string;
    group: string;
}

interface Dinner {
    member: Member[];
    menu: string[];
    shuffle(array: any[]): any[];
    organize(array: Member[]): void;
}

const dinner: Dinner = {
    member: [
        {
            name: "권세훈",
            group: "ob",
        }, {
            name: "김예린",
            group: "yb"
        }, {
            name: "이서우",
            group: "yb"
        }, {
            name: "조하얀",
            group: "yb"
        }
    ],

    menu: ["고기", "볶음밥", "라면"],

    shuffle(array: any[]) {
        //console.log(typeof array);
        array.sort(() => Math.random() - 0.5);
        return array;
    },
    organize(array: Array<Member>) {
        const dinnerMember = new Array(2);

        array = this.shuffle(array);    //shuffle 한 멤버array 받아오기
        dinnerMember[0] = array[0];
        dinnerMember[1] = array[array.length - 1];     //shuffle한 array 의 맨 앞과 끝 두명 매칭
        //console.log(array.length);            //array.length : 배열 원소 개수 반환
        this.menu = this.shuffle(this.menu);    //shuffle 한 메뉴array 받아오기
        //맨 앞의 메뉴로 선정

        console.log(`결과: ${dinnerMember[0].name}, ${dinnerMember[1].name} 매칭성공 | 메뉴: ${this.menu[0]}`);
    },
};

dinner.organize(dinner.member);