# Maintainer: stiglers-eponym
pkgname=beamerpresenter
pkgver=r104.9828af1
pkgrel=1
pkgdesc="Simple dual screen pdf presentation software"
arch=('x86_64')
url="https://github.com/stiglers-eponym/BeamerPresenter"
license=('GPL3')
depends=('poppler-qt5>=0.50.0' 'qt5-multimedia>=5.9.0')
optdepends=('mupdf-tools: external rendering'
	'gst-libav: video support'
	'gst-plugins-good: multimedia support')
makedepends=('git')
source=('git://github.com/stiglers-eponym/BeamerPresenter.git')
md5sums=('SKIP')
backup=("etc/${pkgname}/${pkgname}.conf" "etc/${pkgname}/pid2wid.sh")

pkgver() {
  cd "${srcdir}/BeamerPresenter"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "${srcdir}/BeamerPresenter"
  qmake && make
}

package() {
  cd "${srcdir}/BeamerPresenter"
  install -Dm755 beamerpresenter "${pkgdir}/usr/bin/${pkgname}"
  sed -ie 's/^pid2wid=.*$/pid2wid=\/etc\/beamerpresenter\/pid2wid.sh/' beamerpresenter.conf
  install -Dm644 beamerpresenter.conf "${pkgdir}/etc/${pkgname}/${pkgname}.conf"
  install -Dm644 pid2wid.sh "${pkgdir}/etc/${pkgname}/pid2wid.sh"
  [ -f beamerpresenter.1.gz ] || gzip -9 beamerpresenter.1
  install -Dm644 beamerpresenter.1.gz "${pkgdir}/usr/share/man/man1/${pkgname}.1.gz"
}
