# Maintainer: nightuser <nightuser at ya dot ru>

pkgname=plata-theme
pkgver=0.8.91
pkgrel=1
pkgdesc='A Gtk+ theme based on Material Design Refresh'
arch=('any')
url='https://gitlab.com/tista500/plata-theme'
license=('CCPL' 'GPL2')
makedepends=('git' 'inkscape' 'libxml2' 'parallel' 'sassc' 'zip')
optdepends=('gtk-engine-murrine: for gtk2 themes'
            'ttf-roboto: Recommended font')
source=("git+https://gitlab.com/tista500/plata-theme.git#tag=${pkgver}")
sha256sums=('SKIP')

build() {
  cd plata-theme

  ./autogen.sh \
    --prefix='/usr' \
    --enable-parallel \
    --enable-plank \
    --enable-telegram \
    --disable-mate \
    --enable-airforsteam
  make
}

package() {
  cd plata-theme

  make DESTDIR="${pkgdir}" install

  install -dm 755 "${pkgdir}"/usr/share/plank/themes
  ln -s /usr/share/themes/Plata/plank "${pkgdir}"/usr/share/plank/themes/Plata

  install -Dm 644 LICENSE_CC_BY_SA4 -t "${pkgdir}"/usr/share/licenses/plata-theme/
}

# vim: ts=2 sw=2 et:
