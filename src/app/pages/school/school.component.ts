import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {HttpService} from "../../services/http/http.service";
import {firstValueFrom} from "rxjs";

@Component({
    selector: 'app-school',
    templateUrl: './school.component.html',
    styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {
    products: Product[] = []

    constructor(private httpService: HttpService) {
    }

    ngOnInit(): void {
        this.getProducts().then(() => console.log("Products loaded"))
    }

    async getProducts()
    {
        this.products = await firstValueFrom(this.httpService.getAllProducts())
        console.log(this.products)
    }

}
