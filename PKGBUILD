# Maintainer: Alexander F. Rødseth <xyproto@archlinux.org>
# Contributor: Mateusz Herych <heniekk@gmail.com>
# Contributor: Sergio Jovani Guzman <moret.sjg@gmail.com>
# Contributor: royrocks <royrocks13@gmail.com>

pkgname=tuxpaint
pkgver=0.9.25
pkgrel=1
pkgdesc='Drawing program designed for young children'
arch=('x86_64')
url='http://tuxpaint.org/' # no https available
license=('GPL')
backup=('etc/tuxpaint/tuxpaint.conf')
depends=('fribidi' 'libpaper' 'librsvg' 'libimagequant' 'sdl_image'
         'sdl_mixer' 'sdl_pango' 'sdl_ttf')
makedepends=('gperf' 'setconf' 'imagemagick')
optdepends=('tuxpaint-stamps: more stamps'
            'tuxpaint-config: configuration manager'
            'python2: zh_tw font generator script')
source=("https://downloads.sourceforge.net/sourceforge/tuxpaint/$pkgname-$pkgver.tar.gz")
sha256sums=('c1185b7ba97701ae48639ade3e55488bd695a919a7b5b38f5b2ab0df93b6e19d')

prepare() {
  cd "$pkgname-$pkgver"

  # python2 fix
  for f in docs/zh_tw/mkTuxpaintIM.py fonts/locale/zh_tw_docs/maketuxfont.py; do
    sed -i '0,/on/s//on2/' $f
  done

  # desktop shortcut categories
  setconf src/tuxpaint.desktop Categories='Game;KidsGame;Graphics;RasterGraphics;'

  # fullscreen by default
  setconf -u src/tuxpaint.conf fullscreen=true

  # location of bash completion files
  setconf Makefile COMPLETIONDIR='$(DESTDIR)/usr/share/bash-completion/completions'

  # no KDE4-related requirements at installation-time
  setconf Makefile ARCH_INSTALL=''
}

build() {
  make -C "$pkgname-$pkgver" PREFIX=/usr clean translations all -j1
}

package() {
  make -C "$pkgname-$pkgver" \
    PREFIX=/usr \
    GNOME_PREFIX=/usr \
    X11_ICON_PREFIX="$pkgdir/usr/share/pixmaps" \
    DESTDIR="$pkgdir" \
    install -j1

  # bash completions
  mv "$pkgdir/usr/share/bash-completion/completions/tuxpaint-completion.bash" \
    "$pkgdir/usr/share/bash-completion/completions/tuxpaint"

  # docs
  mv "$pkgdir/usr/share/doc/$pkgname-$pkgver" \
    "$pkgdir/usr/share/doc/$pkgname"

  # desktop shortcut
  install -Dm644 "$pkgname-$pkgver/src/$pkgname.desktop" \
    "$pkgdir/usr/share/applications/$pkgname.desktop"
}

# getver: tuxpaint.org/download/source
# vim: ts=2 sw=2 et:
