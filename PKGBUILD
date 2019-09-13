# Maintainer: Dónal Murray <dmurray654@gmail.com>

pkgname=protonvpn-applet
pkgver=0.0.4
pkgrel=1
pkgdesc='Unofficial basic systray applet for protonvpn-cli written in python + PyQt5'
url='https://github.com/seadanda/protonvpn-applet'
arch=('i686' 'x86_64')
license=('MIT')
makedepends=('git')
depends=('python' 'libnotify' 'python-pyqt5' 'protonvpn-cli')

source=("https://github.com/seadanda/${pkgname}/archive/${pkgver}.tar.gz")
md5sums=('c785449878d3c9afca0526e88451de45')

prepare() {
    tar xzf ${pkgver}.tar.gz
}

package() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    make DESTDIR="${pkgdir}" PREFIX='/usr' ICONDIR='/usr/share/icons/hicolor/16x16/apps' install
    sed -i "s@${pkgdir}@@g" ${pkgdir}/usr/bin/${pkgname}
    install -Dm644 -D LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
