# Maintainer: willemw <willemw12@gmail.com>

_pkgname=youtube-dl-gui
pkgname=$_pkgname-git
pkgver=0.3.8.r53.gaa74cc2
pkgrel=1
pkgdesc="A cross platform front-end GUI of the popular youtube-dl written in wxPython"
arch=('any')
url="https://github.com/MrS0m30n3/youtube-dl-gui"
license=('custom:UNLICENSE')
depends=('gtk-update-icon-cache' 'python2' 'wxpython')
optdepends=('ffmpeg: convert video files to audio-only files'
            'youtube-dl: alternative to the youtube-dl program file downloaded by youtube-dl-gui')
makedepends=('git')
provides=($_pkgname)
conflicts=($_pkgname)
install=$pkgname.install
source=($pkgname::git://github.com/MrS0m30n3/youtube-dl-gui.git
        youtube-dl-gui.desktop
        UNLICENSE)
#        http://unlicense.org/UNLICENSE)
md5sums=('SKIP'
         '298421ed0a9e2c6475e0bb3f86d2d2a7'
         '7246f848faa4e9c9fc0ea91122d6e680')

pkgver() {
  cd $pkgname
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

package() {
  install -Dm644 youtube-dl-gui.desktop "$pkgdir/usr/share/applications/youtube-dl-gui.desktop"
  install -Dm644 UNLICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

  cd $pkgname
  python2 setup.py install --root="$pkgdir" --optimize=1

  # Patch: add "youtube-dl-gui.png" icon filenames
  for dir in "$pkgdir"/usr/share/icons/hicolor/*/apps "$pkgdir/usr/share/pixmaps"; do
    cd "$dir"
    for icon in youtube-dl-gui_*.png; do
      ln -s $icon youtube-dl-gui.png
    done
  done
}

