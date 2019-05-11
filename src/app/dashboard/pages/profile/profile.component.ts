import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild("parent") parentTag : ElementRef

  constructor(private renderer2: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.createElement()
  }

  createElement(){
    this.parentTag = this.el.nativeElement
    console.log(this.parentTag)
    const div = this.renderer2.createElement("div");
    this.renderer2.addClass(div, "main-text")
    const ul = this.renderer2.createElement("ul");
    const li= this.renderer2.createElement("li");
    const text = this.renderer2.createText("This is li element created with renderer2")
    this.renderer2.appendChild(li, text);
    this.renderer2.appendChild(ul, li);
    this.renderer2.appendChild(div, ul)
    this.renderer2.appendChild(this.parentTag, div)
    this.renderer2.setStyle(ul, "text-decoration","none" )
    // this.renderer2.removeClass()
  }

}
