# Maintainer: Michael Asher <michael@wesolveeverything.com> 
pkgname="electerm-bin"
pkgver=1.4.4
pkgrel=1
pkgdesc="An electron-based SSH/SFTP Connection manager and terminal"
arch=('x86_64')
url="https://electerm.html5beta.com"
license=('MIT')
_pkgname="electerm"
provides=("electerm")
source=(
        "https://github.com/electerm/electerm/releases/download/v${pkgver}/${_pkgname}-${pkgver}-linux-x64.tar.gz"
        "https://raw.githubusercontent.com/electerm/electerm/master/LICENSE"
)

sha256sums=('efdd3850a9e9c3a79d3dd71201996344ea98986ae6dc4c653c9117698c8d0f1a'
            'b6d96207cff171127c04f59f9eb545b575b71cd93ebc355247cad63e23ca500d')
package() {
        cd "${srcdir}/${_pkgname}-${pkgver}-linux-x64" || exit 2
        mkdir -p ${pkgdir}/usr/share/electerm
        mkdir -p ${pkgdir}/usr/bin
        cp -r . "${pkgdir}/usr/share/electerm"
        ln -s "/usr/share/${_pkgname}/electerm"  "${pkgdir}/usr/bin/${_pkgname}"
        install -Dm644 ${srcdir}/LICENSE "${pkgdir}/usr/share/licenses/${_pkgname}/LICENSE"
}

