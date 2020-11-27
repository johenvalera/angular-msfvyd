import { Component, OnInit } from "@angular/core";
import { Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alert.component.html",
  styleUrls: ["./product-alert.component.css"]
})
export class ProductAlertComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
