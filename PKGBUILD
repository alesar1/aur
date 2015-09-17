# Maintainer: Grigorii Horos <horosgrisa@gmail.com>

_git=4a2012a4ddc7f34e4d9c84364035458980bdd617
_repo=papirus-pack-kde
pkgname=papirus-konsole-colorscheme
pkgver=20150916
pkgrel=1
pkgdesc="Modified and adaptive Paper colorscheme for Konsole"
arch=('any')
url="https://github.com/varlesh/${_repo}"
license=('CCPL:by-sa')
options=('!strip')
depends=('konsole')
source=("${_repo}-${pkgver}.tar.gz::${url}/archive/${_git}.tar.gz")
sha256sums=('6ae56de2019c285c79bdb8bfdfc4ddf0ef478614caa04fcdb5f2958472405fc3')

package() {
    install -d ${pkgdir}/usr/share/apps/konsole
    install -d ${pkgdir}/usr/share/konsole
    cp -r ${srcdir}/${_repo}-${_git}/konsole-colorschemes/Papirus*.colorscheme ${pkgdir}/usr/share/apps/konsole/
    cp -r ${srcdir}/${_repo}-${_git}/konsole-colorschemes/Papirus*.colorscheme ${pkgdir}/usr/share/konsole/
    install -D -m644  ${srcdir}/${_repo}-${_git}/konsole-colorschemes/LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
    find ${pkgdir}/usr -type f -exec chmod 644 {} \;
    find ${pkgdir}/usr -type d -exec chmod 755 {} \;
} 