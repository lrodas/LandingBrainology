import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
  }

  public scrollTo(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);

    const getSiblings = (element: any) => {
      // Setup siblings array and get the first sibling
      const siblings = [];
      let sibling = element.parentNode.firstChild;

      // Loop through each sibling and push to the array
      while (sibling) {
        if (sibling.nodeType === 1 && sibling !== element) {
          siblings.push(sibling);
        }
        sibling = sibling.nextSibling
      }
      return siblings;
    };

    Array.from(getSiblings(document.getElementById(`menu-${elementId}`))).forEach(element => {
      element?.classList.remove('active');
    });

    document.getElementById(`menu-${elementId}`)?.classList.add('active');
  }
}
