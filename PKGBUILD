# Maintainer: Tércio Martins <echo dGVyY2lvd2VuZGVsQGdtYWlsLmNvbQo= | base64 -d>
# Contributor: M.Reynolds <blackboxnetworkproject@gmail.com>

pkgname=thonny
pkgver=3.3.7
pkgrel=1
pkgdesc="Python IDE for beginners"
arch=('any')
url="https://thonny.org"
license=('MIT')
depends=('hicolor-icon-theme' 'mypy' 'python-astroid' 'python-asttokens' 'python-docutils' 'python-jedi' \
         'python-pip' 'python-pylint' 'python-pyserial' 'python-send2trash' 'python-setuptools' 'tk')
optdepends=('python-birdseye: Debug support with Birdseye'
            'python-pgzero: Run programs made with Pygame Zero')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/${pkgname}/${pkgname}/archive/v${pkgver}.tar.gz")
sha512sums=('438f3a838d32e1dbfb94b93c5ef29d60b24a9786a6d95b25a857c00fe6891b4858df2ebe297bb89dd9bb11c40c315a49e39964178f611bc5404b395145890857')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  python setup.py build
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  python setup.py install --root="$pkgdir" --optimize=1 --skip-build

  _xdg_desktop_name=org.${pkgname}.${pkgname^}

  install -Dm 644 "packaging/linux/${_xdg_desktop_name}.desktop" \
                  "${pkgdir}/usr/share/applications/${_xdg_desktop_name}.desktop"

  sed -i "s/Icon=${pkgname}/Icon=${_xdg_desktop_name}/" \
         "${pkgdir}/usr/share/applications/${_xdg_desktop_name}.desktop"

  install -Dm 644 "packaging/linux/${_xdg_desktop_name}.appdata.xml" \
                  "${pkgdir}/usr/share/metainfo/${_xdg_desktop_name}.appdata.xml"

  for size in 16 22 32 48 64 128 256; do
    install -Dm 644 "packaging/icons/${pkgname}-${size}x${size}.png" \
                    "${pkgdir}/usr/share/icons/hicolor/${size}x${size}/apps/${_xdg_desktop_name}.png"
  done

  install -Dm 644 "LICENSE.txt" \
                  "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
