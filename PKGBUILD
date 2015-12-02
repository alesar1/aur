# Maintainer: Alexandre `Zopieux` Macabies <web+aur@zopieux.com>
pkgname=ffdec
pkgver=7.1.1
pkgrel=1
pkgdesc="Open source Flash SWF decompiler and editor"
arch=('any')
url="https://www.free-decompiler.com/flash/"
license=('GPL3')
depends=('java-runtime=8')
conflicts=('jpexs-decompiler-git')
source=(https://www.free-decompiler.com/flash/download/${pkgname}_${pkgver}.zip
        $pkgname
        $pkgname.desktop
        $pkgname.png)
md5sums=('99703681a9c849e7fcecab1406355fde'
         '29a00ab7cb71ec337ed028493914009f'
         'b9da710cc2a4af62f1fa8690e0fb5553'
         'c6f354af3fdfe3f45623fb3949e23f8f')

package() {
    cd "$srcdir"
    install -Ddm755 "${pkgdir}/usr/share/java/${pkgname}/lib"
    install -Ddm755 "${pkgdir}/usr/share/licenses/${pkgname}"
    install -Dm755 "${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
    install -Dm644 "${pkgname}.jar" "${pkgdir}/usr/share/java/${pkgname}/${pkgname}.jar"
    install -Dm644 "license.txt" "${pkgdir}/usr/share/licenses/${pkgname}/license.txt"
    install -Dm644 "${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
    install -Dm644 "${pkgname}.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
    cd "$srcdir/lib"
    for f in *.license.txt; do
        cp -d --no-preserve=ownership "$f" "${pkgdir}/usr/share/licenses/${pkgname}/$f"
    done
    for f in *.jar; do
        cp -d --no-preserve=ownership "$f" "${pkgdir}/usr/share/java/${pkgname}/lib/$f"
    done
}
