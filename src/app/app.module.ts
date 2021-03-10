import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

// material
import { MaterialModule } from './modules/material.module';

// aplicação
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';

// formulario
import { FormularioModule } from './modules/formulario/formulario.module';

// shared
import { HttpInterceptadorService } from './services/http-interceptador.service';
import { AuthService } from './services/auth.service';
import { ProdutoService } from './services/produto.service';

// produto
import { ProdutoComponent } from './components/produto/produto.component';

// ngx-mask
import { NgxMaskModule } from 'ngx-mask';

registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    CadastroComponent,
    HomeComponent,
    ProdutoComponent,
    SobreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormularioModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptadorService, multi: true, deps: [AuthService] },
    ProdutoService,
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
