 
# Maintainer: Taiko2k <captain dot gxj at gmail dot com>

pkgname='tauon-music-box'
pkgdesc='A streamlined music player that uses BASS'
url="https://github.com/taiko2k/tauonmb"
arch=('x86_64')
license=('custom')

pkgver=2.5.0
pkgrel=1

depends=('python3' 'noto-fonts' 'noto-fonts-emoji' 'sdl2_image' 'python-pillow' 'python-pylast' 'python-xlib' 'python-gobject' 'xdg-utils' 'python-beautifulsoup4' 'python-requests' 'python-cairo' 'python-stagger' 'python-hsaudiotag3k')

optdepends=('python-flask: Web interface' 'ffmpeg: File Transcoding')

source=('https://github.com/Taiko2k/tauonmb/releases/download/v2.5.0/Tauon.Music.Box.v2.5.0.Linux.Bass.64bit.zip')

sha1sums=('09f50e25bad3940e1f95b4fbb1897e3cd46a9019')

package() {

  install -D -m755 "$srcdir/$pkgname/tauonmb.desktop" "$pkgdir/usr/share/applications/tauonmb.desktop"
  
  install -D -m644 "$srcdir/$pkgname/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  
  install -dm755 $pkgdir/opt/
  cp -R "$srcdir/$pkgname/" "$pkgdir/opt/$pkgname"
  }
  


