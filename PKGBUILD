# Maintainer: glatavento <glatavento at outlook dot com>

pkgname=siyuan-note-bin
_pkgname=siyuan-note
pkgver=1.9.9
pkgrel=1
pkgdesc="A local-first personal knowledge management system"
arch=('x86_64')
url="https://b3log.org/siyuan/"
license=('unknown')
depends=(electron15)
optdepends=('pandoc: docx export.')
provides=($_pkgname)
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/siyuan-note/siyuan/releases/download/v${pkgver}/siyuan-${pkgver}-linux.tar.gz"
"$_pkgname.sh"
"$_pkgname.desktop"
)
sha512sums=('d71e89ee39777f24228b12bcc1eda112fdad371c234b534da6ee31cc6823ef7e4e48ae7a7c8e72143f3e12b1bb7acab91255b82eb0f4dc2f066687b4c024148c'
            'fa9199bbae9f35942e42512f4050fe793d22effff96f9f16c6fe24ca2221baa7fb1ec2e48d65fb4c0e262f38c58c3f93790c103c00e8338a6538d022f22dc7b0'
            '4ca7d777c2dce64d89a874af268773009ba0ebe064c3ce0034913c447666bf6636a3c81d1145579fe1b0b6a35195b1f97b1b4cd56b50e990fb0642c4aae281f0')

prepare(){
    cd $srcdir/siyuan-${pkgver}-linux
}

package() {
    cd $srcdir 
    install -Dm755 ${_pkgname}.sh  ${pkgdir}/usr/bin/${_pkgname}
    install -Dm644 ${_pkgname}.desktop -t ${pkgdir}/usr/share/applications
    
    cd $srcdir/siyuan-${pkgver}-linux
    install -Dm644 resources/stage/icon.png  ${pkgdir}/usr/share/icons/hicolor/512x512/apps/${_pkgname}.png
    mkdir -p ${pkgdir}/usr/lib
    mv resources ${pkgdir}/usr/lib/${_pkgname}
}
# vim: ts=2 sw=2 et:
