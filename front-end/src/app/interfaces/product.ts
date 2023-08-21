export interface Product {
    product_id : number;

    category : string[];
    name : string ;
    sn : string ;
    accessory ?: string[];
    client_diag : string;
    tech_diag : string;
    etat : string[];
    create_date ?: Date;

    id_client : number;

}