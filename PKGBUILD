# Maintainer: Grigorii Horos <horosgrisa@gmail.com>

_git=2ebf0e5956d20c06435245307d5617e4afec5e82
_repo=papirus-pack-kde
pkgname=papirus-kmail-theme
pkgver=20150826
pkgrel=1
pkgdesc="Modified and adaptive Paper theme for Kmail"
arch=('any')
url="https://github.com/varlesh/${_repo}"
license=('CCPL:by-sa')
depends=('kmail')
options=('!strip')
source=("${_repo}-${pkgver}.tar.gz::${url}/archive/${_git}.tar.gz")
sha256sums=('4ea1ef367cfd0ddd91fd16a043808ae36bb7000f0174b8ab9337b2b0a61f7795')

package() {
    install -d ${pkgdir}/usr/share/messageviewer/themes
    cp -r ${srcdir}/${_repo}-${_git}/kmail-theme/papirus* ${pkgdir}/usr/share/messageviewer/themes/
    install -D -m644  ${srcdir}/${_repo}-${_git}/color-schemes/LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
    find ${pkgdir}/usr -type f -exec chmod 644 {} \;
    find ${pkgdir}/usr -type d -exec chmod 755 {} \;
} 