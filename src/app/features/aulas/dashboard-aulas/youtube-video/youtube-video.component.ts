import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.css'],
})
export class YoutubeVideoComponent implements OnInit {
  @ViewChild('youTubePlayer') youTubePlayer:
    | ElementRef<HTMLDivElement>
    | undefined;

  videoId = 'https://www.youtube.com/watch?v=wlTa_yTElGM';
  videoHeight: number | undefined;
  videoWidth: number | undefined;

  @Input('videoID') videoID: string | undefined;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    //private responsive: BreakpointObserver
  ) {}

  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize.bind(this));
  }

  onResize(): void {
    // you can remove this line if you want to have wider video player than 1200px
    this.videoWidth = Math.min(
      //@ts-ignore
      this.youTubePlayer.nativeElement.clientWidth,
      920
    );
    // so you keep the ratio
    this.videoHeight = this.videoWidth * 0.6;
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {
  }
}
