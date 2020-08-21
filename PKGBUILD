# Maintainer:  Calvin Lee <calvins.lee@utah.edu>
# Contributor: Sven-Hendrik Haase <svenstaro@gmail.com>
# Contributor: Maxim Baz <$pkgname at maximbaz dot com>
# Contributor: Fabio 'Lolix' Loli <lolix@disroot.org> -> https://github.com/FabioLolix
# Contributor: Maximilian Kindshofer <maximilian@kindshofer.net>

pkgname=(kitty-bitmap)
pkgver=0.18.3
pkgrel=1
pkgdesc="A modern, hackable, featureful, OpenGL-based terminal emulator. Patched to support bitmap fonts."
arch=('x86_64')
url="https://github.com/kovidgoyal/kitty"
license=('GPL3')
depends=('python3' 'freetype2'  'fontconfig' 'wayland' 'libx11' 'libxkbcommon-x11' 'libxi' 'hicolor-icon-theme' 'libgl' 'libcanberra' 'dbus' 'kitty-terminfo')
makedepends=('libxinerama' 'libxcursor' 'libxrandr' 'wayland-protocols' 'python-sphinx')
optdepends=('imagemagick: viewing images with icat')
provides=('kitty')
conflicts=('kitty')
source=("${pkgname/-bitmap}-${pkgver}.tar.gz::https://github.com/kovidgoyal/${pkgname/-bitmap/}/archive/v$pkgver.tar.gz" "Allow-bitmap-fonts.patch")
sha512sums=('dee04572905f735ac098e8406ec3f36c2eb4d21ff0c6ff1b94216fab2b861c4d72a865b36cc18be1d9ed77235c33cc01a207e1992260da47679ff8b83f62f6e8' 'SKIP')

prepare() {
  cd "$srcdir/${pkgname/-bitmap}-$pkgver"
  patch --strip=1 --input="${srcdir}/Allow-bitmap-fonts.patch"
}

build() {
  cd "$srcdir/${pkgname/-bitmap}-$pkgver"
  python3 setup.py linux-package --update-check-interval=0
}

package() {

  cd "$srcdir/${pkgname/-bitmap}-$pkgver"

  cp -r linux-package "${pkgdir}"/usr

  # completions
  python __main__.py + complete setup bash | install -Dm644 /dev/stdin "${pkgdir}"/usr/share/bash-completion/completions/kitty
  python __main__.py + complete setup fish | install -Dm644 /dev/stdin "${pkgdir}"/usr/share/fish/vendor_completions.d/kitty.fish
  # doesn't know how to http://zsh.sourceforge.net/Doc/Release/Completion-System.html#Autoloaded-files
  # so we write our own header
  {
      echo "#compdef kitty"
      python __main__.py + complete setup zsh
  } | install -Dm644 /dev/stdin "${pkgdir}"/usr/share/zsh/site-functions/_kitty

  install -Dm644 "${pkgdir}"/usr/share/icons/hicolor/256x256/apps/kitty.png "${pkgdir}"/usr/share/pixmaps/kitty.png

  rm -r "$pkgdir"/usr/share/terminfo

  install -Dm644 docs/generated/conf/kitty.conf "${pkgdir}"/usr/share/doc/${pkgname}/kitty.conf
}
