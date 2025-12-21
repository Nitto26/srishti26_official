"use client";
import React, { useEffect } from 'react';
import Script from 'next/script';

export function AnimeCarousel() {
  useEffect(() => {
    const initCarousel = (options) => {
      function CustomCarousel(options) {
        this.init(options);
        this.addListeners();
        return this;
      }

      CustomCarousel.prototype.init = function (options) {
        this.node = options.node;
        if (!this.node) return;
        this.node.slider = this;
        this.slides = this.node.querySelector('.slides')?.children;
        if (!this.slides) return;
        this.slidesN = this.slides.length;
        this.pagination = this.node.querySelector('.pagination');
        if (!this.pagination) return;
        this.pagTransf = 'translate( -50%, -50% )';
        this.dots = this.pagination.children;
        this.dotsN = this.dots.length;
        this.step = -360 / this.dotsN;
        this.angle = 0;
        this.next = this.node.querySelector('.next');
        this.prev = this.node.querySelector('.prev');
        this.activeN = options.activeN || 0;
        this.prevN = this.activeN;
        this.speed = options.speed || 300;
        this.autoplay = options.autoplay || false;
        this.autoplayId = null;

        this.setSlide(this.activeN);
        this.arrangeDots();
        this.pagination.style.transitionDuration = this.speed + 'ms';
        if (this.autoplay) this.startAutoplay();

        this.mouseTarget = this.node.querySelector('.slide_nav');
      }

      CustomCarousel.prototype.addListeners = function () {
        if (!this.node) return;
        var slider = this;

        if (this.next) {
          this.next.addEventListener('click', function () {
            slider.setSlide(slider.activeN + 1);
          });
        }

        if (this.prev) {
          this.prev.addEventListener('click', function () {
            slider.setSlide(slider.activeN - 1);
          });
        }

        for (var i = 0; i < this.dots.length; i++) {
          this.dots[i].addEventListener('click', (function (i) {
            return function () {
              slider.setSlide(i);
            }
          })(i));
        }

        if (this.autoplay && this.mouseTarget) {
          this.mouseTarget.addEventListener('mouseenter', function () {
            slider.stopAutoplay();
          });

          this.mouseTarget.addEventListener('mouseleave', function () {
            slider.startAutoplay();
          });
        }
      };

      CustomCarousel.prototype.setSlide = function (slideN) {
        if (!this.slides || !this.dots) return;
        if (this.slides[this.activeN]) this.slides[this.activeN].classList.remove('active');
        if (this.dots[this.activeN]) this.dots[this.activeN].classList.remove('active');

        this.prevN = this.activeN;
        this.activeN = slideN;
        if (this.activeN < 0) this.activeN = this.slidesN - 1;
        else if (this.activeN >= this.slidesN) this.activeN = 0;

        if (this.slides[this.activeN]) this.slides[this.activeN].classList.add('active');
        if (this.dots[this.activeN]) this.dots[this.activeN].classList.add('active');

        this.rotate();
      };

      CustomCarousel.prototype.rotate = function () {
        if (!this.pagination) return;
        if (this.activeN < this.dotsN) {
          this.angle += (function (dots, next, prev, step) {
            var inc, half = dots / 2;
            if (prev > dots) prev = dots - 1;
            if (Math.abs(inc = next - prev) <= half) return step * inc;
            if (Math.abs(inc = next - prev + dots) <= half) return step * inc;
            if (Math.abs(inc = next - prev - dots) <= half) return step * inc;
            return 0;
          }(this.dotsN, this.activeN, this.prevN, this.step))
          
          this.pagination.style.transform = 'rotate(' + this.angle + 'deg)';
        }
      };

      CustomCarousel.prototype.startAutoplay = function () {
        var slider = this;
        this.autoplayId = setInterval(function () {
          slider.setSlide(slider.activeN + 1);
        }, this.autoplay);
      };

      CustomCarousel.prototype.stopAutoplay = function () {
        clearInterval(this.autoplayId);
      };

      CustomCarousel.prototype.arrangeDots = function () {
        if (!this.dots) return;
        for (var i = 0; i < this.dotsN; i++) {
          this.dots[i].style.transform = 'rotate(' + 360 / this.dotsN * i + 'deg)';
        }
      };

      return new CustomCarousel(options);
    }
    
    const carousels = document.querySelectorAll('.circle-carousel');
    if (carousels.length) {
      for (var i = 0; i < carousels.length; i++) {
        initCarousel({
          node: carousels[i],
          speed: carousels[i].getAttribute('data-speed'),
          autoplay: carousels[i].getAttribute('data-autoplay')
        });
      }
    }
  }, []);

  return (
    <>
      <section className="ksfe-section">
          <div className="ksfe-wrapper">
              <div className="circle-carousel" data-speed="1000" data-autoplay="6000">
                  <div className="slides">
                      <div className="slide active">
                          <div className="ksfe-text">
                              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headline" style={{ color: '#007FFF'}}>One piece</h2>
                              <p className="text-lg text-foreground/80">One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since July 1997, with its chapters compiled in 110 tankōbon volumes as of November 2024.</p>
                          </div>
                      </div>
                      <div className="slide">
                          <div className="ksfe-text">
                              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headline" style={{ color: '#007FFF'}}>Naruto</h2>
                              <p className="text-lg text-foreground/80">Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.</p>
                          </div>
                      </div>
                      <div className="slide">
                          <div className="ksfe-text">
                              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headline" style={{ color: '#007FFF'}}>Dragon Balls</h2>
                              <p className="text-lg text-foreground/80">"Dragon Ball Z" follows the adventures of Goku who, along with the Z Warriors, defends the Earth against evil. The action adventures are entertaining and reinforce the concept of good versus evil. "Dragon Ball Z" teaches valuable character virtues such as teamwork, loyalty, and trustworthiness.</p>
                          </div>
                      </div>
                      <div className="slide">
                          <div className="ksfe-text">
                              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headline" style={{ color: '#007FFF'}}>Demon Slayer</h2>
                              <p className="text-lg text-foreground/80">Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from February 2016 to May 2020, with its chapters collected in 23 tankōbon volumes.</p>
                          </div>
                      </div>
                  </div>

                  <div className="pagin_outr">
                    <div className="pagination">
                        <div className="item active">
                            <img src="/KSFE_files/op.jpg" alt="One Piece" />
                        </div>
                        <div className="item">
                            <img src="/KSFE_files/n.jpg" alt="Naruto" />
                        </div>
                        <div className="item">
                            <img src="/KSFE_files/g.jpg" alt="Dragon Ball Z" />
                        </div>
                        <div className="item">
                            <img src="/KSFE_files/ds.jpg" alt="Demon Slayer" />
                        </div>
                    </div>
                  </div>
                  <div className="slide_nav">
                      <div className="swiper-button-prev prev"></div>
                      <div className="swiper-button-next next"></div>
                  </div>
              </div>
          </div>
      </section>
      <Script src="/KSFE_files/jquery.3.4.1.min.js" strategy="lazyOnload" />
      <Script src="/KSFE_files/main.js" strategy="lazyOnload" />
    </>
  );
}
