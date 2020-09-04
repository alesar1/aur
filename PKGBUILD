# Maintainer: Helg1980 <depositmail@rambler.ru>
pkgname=cine-encoder
_name=${pkgname#python-}
pkgver=2.3
pkgrel=1
pkgdesc="Cine Encoder 2020SE"
arch=(x86_64)
url="https://github.com/CineEncoder/cine-encoder.git"
license=('GPL')
depends=('mkvtoolnix-cli>=49.0' 'ffmpeg>=4.3' 'mediainfo>=20.03' 'python>=3.6' 'python-pyqt5' 'python-pymediainfo')
source=("https://github.com/CineEncoder/cine-encoder/archive/2.3.tar.gz")
md5sums=('SKIP')

build() {
  cd "${srcdir}/cine-encoder-${pkgver}"
  python setup.py build
}

package() {
  cd "${srcdir}/cine-encoder-${pkgver}"
  python setup.py install --root="$pkgdir/" --skip-build  --optimize=1
  # install documentation
  install -Dm644 ABOUT -t "${pkgdir}/usr/share/doc/${pkgname}"
  # install license
  install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
  # install icon
  install -Dm644 cine_encoder/cine-encoder.png -t "${pkgdir}/usr/share/icons/hicolor/64x64/apps/"
  # install .desktop
  install -Dm644 cine_encoder/cine-encoder.desktop -t "${pkgdir}/usr/share/applications/"

}
