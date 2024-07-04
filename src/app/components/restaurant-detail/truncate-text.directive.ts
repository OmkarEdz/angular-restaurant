import { Directive, ElementRef, Renderer2, AfterViewInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appTruncateText]'
})
export class TruncateTextDirective implements AfterViewInit {
  private isTruncated: boolean = true;
  private maxLength: number = 90; // Maximum length of the text
  private originalText: string = ''; // Declare originalText property

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.originalText = this.el.nativeElement.innerText;
    this.truncateText();
  }

  private truncateText(): void {
    if (this.originalText.length > this.maxLength) {
        const truncatedText = this.originalText.substring(0, this.maxLength) + '<span class="more-link">...more</span>';
        this.renderer.setProperty(this.el.nativeElement, 'innerHTML', truncatedText);
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    }
  }

  @HostListener('click')
  private toggleText(): void {
    if (this.isTruncated) {
      this.renderer.setProperty(this.el.nativeElement, 'innerText', this.originalText);
    } else {
      this.truncateText();
    }
    this.isTruncated = !this.isTruncated;
  }
}
