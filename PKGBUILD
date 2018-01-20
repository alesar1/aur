# Maintainer: Ainola
# Contributor: Michael Herold

pkgname=scudcloud
pkgver=1.64
pkgrel=2
epoch=2
pkgdesc="A Slack client for Linux"
arch=('any')
url="https://github.com/raelgc/scudcloud"
license=('MIT')
depends=('libnotify' 'python-setuptools' 'python-dbus' 'python-gobject'
         'python-pyqt5' 'qt5-webkit')
groups=('messaging')
source=("https://github.com/raelgc/scudcloud/archive/v${pkgver}.tar.gz")
sha256sums=('669d51cb9ef619afccbf0f9cf2f1d065cc88139e2adbf9d5f355c976e2f44328')

package() {
    cd "${pkgname}-${pkgver}"
    python setup.py install --prefix=/usr --root="${pkgdir}"
    mkdir -p "$pkgdir"/usr/share/licenses/scudcloud
    install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/scudcloud/LICENSE
    rm -rf "${pkgdir}/usr/share/icons/ubuntu"**
}
