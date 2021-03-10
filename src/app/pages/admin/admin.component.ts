import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// shared
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    constructor(
        private auth: AuthService,
        private route: Router
    ) { }

    ngOnInit() {
    }

    public sair() {
        this.auth.sair();
    }

    /**
     * @author Lucas
     * @description Método responsável por navegar até a rota do e-commerce
     */
    public irParaLoja() {
        this.route.navigate(['/']);
    }
}
