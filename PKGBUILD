# Maintainer: sukanka <su975853527 [AT] gmail.com>

pkgname=dida-bin
_pkgname=dida
pkgver=1.0.40
pkgrel=1
pkgdesc="Official Dida client, a todo list."
arch=("any")
url="https://dida365.com/home"
license=("BSD")
depends=(electron19)
provides=(${_pkgname})
source=("${_pkgname}_${pkgver}-${arch}.deb::https://cdn.dida365.cn/download/linux/linux_deb_x64/dida-${pkgver}-amd64.deb"
"${_pkgname}".sh
)
sha512sums=('a54abf2cc1588eb24acb5346c536ebc4f34a5cdaad42bc97a7eae3fcd78a5704316792dff2288fffcfd78d07cac7e9ad2b1f6b420ad3a27f8108201be15d1a85'
            '377e636918eb4cccee100d9a21437a2a356b049179481920f7d1020c6c85df52500232334aa541ad9885d3d218c38438c67637b13753501f0c1a9d66ef653a74')

prepare(){
    cd ${srcdir}
    tar -Jxvf data.tar.xz -C "${srcdir}"
    cp -f  opt/*/resources/app.asar ${_pkgname}.asar
    cd usr/share/applications
    sed -i 's|^Exec=.*|Exec=dida %U|g' dida.desktop
}

package(){
    cd ${srcdir}
    mv usr ${pkgdir}
    install -Dm644 ${_pkgname}.asar -t ${pkgdir}/usr/share/${_pkgname}
    install -Dm755 ${_pkgname}.sh ${pkgdir}/usr/bin/${_pkgname}
}
