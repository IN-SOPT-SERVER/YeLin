//DTO(Data Transfer Object): 계층간 데이터 교환을 위한 객체
//DB의 데이터를 Service나 Controller 등으로 보낼 때 사용하며 로직을 갖고 있지 않는 순수한 데이터 객체
// Typescript에서는 Interface를 이용해 구현
export interface ImageCreateResponseDTO {
    image: string;
    id: number;
}