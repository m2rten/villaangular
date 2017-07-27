import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <style>
  .navbar {
    padding-top: 15px;
    padding-bottom: 15px;
    border: 0;
    border-radius: 0;
    margin-bottom: 0;
    font-size: 12px;
    letter-spacing: 5px;
}

.navbar-nav li a:hover {
    color: #1abc9c !important;
}
  </style>
<html>
<body>
<div>
  <nav class="navbar navbar-default navbar-fixed-top">
      <a href="#" class="navbar-right"><img style="max-height:50px; margin-right:30px" src="../../assets/villa.jpg"></a>
      <div class="navbar-header">
        <a class="navbar-brand" href="#" style="color:blue">Eston Villa</a>
      </div>
      <ul class="nav navbar-nav">
        <li><a href="#">Home</a></li>
        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown">Valikud<span class="caret"></span></a>
          <ul class="dropdown-menu">
                <li><a ui-sref="app.saldo">Saldo</a></li>
                <li><a ui-sref="app.player">Player</a></li>
                <li><a ui-sref="app.sisestamine">Nõude sisestamine</a></li>
                <li><a ui-sref="app.sulalaekumine">Sula Laekumine</a></li>
                <li><a ui-sref="app.sulamakse">Sula Makse</a></li>
                <li><a ui-sref="app.kokku">Kokkuvõte</a></li>
                <li><a ui-sref="app.sulaliikumised">Sula liikumised</a></li>
                <li><a ui-sref="app.pangaliikumised">Panga liikumised</a></li>
                <li><a ui-sref="app.sisestapank">Sisesta Pank</a></li>
                <li><a ui-sref="app.saajad">Saajad</a></li>
          </ul>
        </li>
      </ul>
  </nav>
  </div>
  <div>  <router-outlet></router-outlet></div>
  </body>
  </html>
  `,
})
export class AppComponent  { name = 'Angular'; }
