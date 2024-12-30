'use client';

import { useKeenSlider } from 'keen-slider/react'; // Import KeenSlider hook
import 'keen-slider/keen-slider.min.css'; // Import KeenSlider styles

export default function HorizontalGallery() {
  // Set up KeenSlider with options
  const [sliderRef] = useKeenSlider({
    loop: true, // Enable looping for continuous sliding
    mode: 'free-snap', // Allows slides to "snap" to position
    slides: {
      perView: 2.2, // Number of slides visible at once
      spacing: 15, // Some space between slides (adjust as needed)
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 1.2, // Show one slide at a time on smaller screens
          spacing: 10, // Adjust spacing on smaller screens
        },
      },
    },
    created: (slider) => {
      let touchTimeout: NodeJS.Timeout | undefined;
      let wheelActive = false;
      let position = { x: 0, y: 0 };

      // Dispatch function for controlling wheel movement
      const dispatch = (e: WheelEvent, name: string) => {
        position.x -= e.deltaX;
        position.y -= e.deltaY;

        slider.container.dispatchEvent(
          new CustomEvent(name, {
            detail: {
              x: position.x,
              y: position.y,
            },
          })
        );
      };

      // Start wheel scroll event
      const wheelStart = (e: WheelEvent) => {
        position = { x: e.pageX, y: e.pageY };
        dispatch(e, 'ksDragStart');
      };

      // Trigger the scroll action
      const wheel = (e: WheelEvent) => {
        dispatch(e, 'ksDrag');
      };

      // End of wheel scroll event
      const wheelEnd = (e: WheelEvent) => {
        dispatch(e, 'ksDragEnd');
      };

      // The actual wheel event handler
      const eventWheel = (e: WheelEvent) => {
        // Allow horizontal scroll with more horizontal movement than vertical
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
          e.preventDefault();
          if (!wheelActive) {
            wheelStart(e);
            wheelActive = true;
          }
          wheel(e);
          clearTimeout(touchTimeout);
          touchTimeout = setTimeout(() => {
            wheelActive = false;
            wheelEnd(e);
          }, 50);
        }
      };

      // Adding wheel event listener for smooth scrolling
      slider.container.addEventListener('wheel', eventWheel, {
        passive: false, // Ensure we can prevent default behavior
      });
    },
  });

  return (
    <div className="keen-slider-container" style={{ padding: 0, margin: 0 }}>
      {/* KeenSlider wrapper */}
      <div ref={sliderRef} className="keen-slider" style={{ display: 'flex', alignItems: 'flex-start' }}>
        {/* Image 1 */}
        <div className="keen-slider__slide flex-shrink-0">
          <img
            src="/images/image1.png"
            alt="Image 1"
            className="rounded-lg"
            style={{
              width: 'auto', // Auto width based on content
              height: '90vh', // Keep height as you wanted
              maxWidth: '1000px', // Limit max width to 1000px
              objectFit: 'contain', // Ensure image fits within container without cutting off
              marginBottom: 'auto', // Ensures the content aligns at the top, any remaining space goes below
            }}
          />
        </div>
        {/* Video 1 */}
        <div className="keen-slider__slide flex-shrink-0">
          <video
            src="/videos/video1.mov"
            title="Video 1"
            autoPlay
            loop
            muted
            className="rounded-lg"
            style={{
              width: 'auto', // Auto width based on content
              height: '90vh', // Keep height as you wanted
              maxWidth: '1000px', // Limit max width to 1000px
              objectFit: 'contain', // Ensure video fits within container without cutting off
              marginBottom: 'auto', // Ensures the content aligns at the top, any remaining space goes below
            }}
          />
        </div>
        {/* Video 2 */}
        <div className="keen-slider__slide flex-shrink-0">
          <video
            src="/videos/video2.mp4"
            title="Video 2"
            autoPlay
            loop
            muted
            className="rounded-lg"
            style={{
              width: 'auto', // Auto width based on content
              height: '90vh', // Keep height as you wanted
              maxWidth: '1000px', // Limit max width to 1000px
              objectFit: 'contain', // Ensure video fits within container without cutting off
              marginBottom: 'auto', // Ensures the content aligns at the top, any remaining space goes below
            }}
          />
        </div>
      </div>
    </div>
  );
}
