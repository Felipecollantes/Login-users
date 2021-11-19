import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  paginacion: number[] = [];
  page: number;
  totalPage: number;

  constructor(public usuarioService: UsuarioService) {
    this.page = 1;
  }

  ngOnInit() {
    this.getInitUsers();
  }

  /**
   * Get Users and pagination
   */
  getInitUsers() {
    this.usuarioService
      .getUsers(this.page)
      .pipe(take(1))
      .subscribe(resp => {
        this.usuarios = resp.data;
        this.totalPage = resp.total_pages;
        this.paginacion = [];
        for (let i = 0; i < resp.total_pages; i++) {
          this.paginacion.push(i + 1);
        }
      });
  }

  /**
   * Get Users
   */
  getUsers() {
    this.usuarioService
      .getUsers(this.page)
      .pipe(take(1))
      .subscribe(resp => (this.usuarios = resp.data));
  }

  /**
   * Select the page
   * @param page the page
   */
  selectPage(page: number) {
    this.page = page;
    this.getUsers();
  }

  /**
   * Go to the next page
   */
  nextPage() {
    if (this.page === this.totalPage) {
      this.page = this.totalPage;
    } else {
      this.page += 1;
    }
    this.getUsers();
  }

  /**
   * Go back to the previous page
   */
  previousPage() {
    if (this.page === 0) {
      this.page = 0;
    } else {
      this.page -= 1;
    }
    this.getUsers();
  }
}
