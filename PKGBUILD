# Maintainer: lightning1141 <lightning1141@gmail.com>

pkgname='cn.com.10jqka'
# the versin is from deb package
pkgver=2.7.1.2
pkgrel=0
pkgdesc="cn.com.10jqka - a tool for scanning the stock infomation"
arch=("x86_64")
url="https://www.10jqka.com.cn"
license=('custom')
depends=()

source=("http://resource.thsi.cn/soft/${pkgname}_${pkgver}_amd64.deb")

sha256sums=('40c9a5c551cdc48e10b51e003e70254919d89aa0a1481ab63324a37a363648fd')

package() {
    tar xf data.tar.xz -C ${pkgdir}/

    # remove apps dir
    mv "${pkgdir}/opt/apps/cn.com.10jqka" "${pkgdir}/opt/"
    rm -r "${pkgdir}/opt/apps"
    sed -i 's/apps\///' "${pkgdir}/opt/cn.com.10jqka/entries/applications/cn.com.10jqka.desktop"

    chmod 755 -R "${pkgdir}/opt/cn.com.10jqka/files"

    # fix cannot find deps error
    sed -i '/\.a"/,+2 d' "${pkgdir}/opt/cn.com.10jqka/files/HevoNext.B2CApp.deps.json"

    install -d "${pkgdir}/usr/share/applications"
    install -m644 "${pkgdir}/opt/cn.com.10jqka/entries/applications/cn.com.10jqka.desktop" "${pkgdir}/usr/share/applications/"
}
