# Maintainer: TheBill2001 <tuantran1632001 at gmail dot com>

pkgname=hunspell-vi-git
provides=('hunspell-vi')
conflicts=('hunspell-vi')
pkgver=v2.2.0.r35.g507d07e
pkgrel=1
pkgdesc="Vietnamese dictionaries for Hunspell"
arch=('x86_64')
url="https://github.com/1ec5/hunspell-vi.git"
license=('GPL3')
depends=('hunspell')
source=("git+${url}")
sha256sums=('SKIP')

pkgver() {
    cd "${srcdir}/hunspell-vi"
    git describe --long --tags | sed 's/-/.r/;s/-/./'
}

package() {
    cd "${srcdir}/hunspell-vi/dictionaries"
    install -D -m644 "vi-DauMoi.dic" "${pkgdir}/usr/share/hunspell/vi_VN.dic"
    install -D -m644 "vi-DauMoi.aff" "${pkgdir}/usr/share/hunspell/vi_VN.aff"

    install -d -m755 "${pkgdir}/usr/share/myspell/dicts"
    ln -sv "/usr/share/hunspell/vi_VN.dic" "${pkgdir}/usr/share/myspell/dicts/vi_VN.dic"
    ln -sv "/usr/share/hunspell/vi_VN.aff" "${pkgdir}/usr/share/myspell/dicts/vi_VN.aff"
}
