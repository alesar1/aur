# Maintainer:Integral<luckys68@126.com>
# Maintainer:ston<2424284164@qq.com>
pkgname=rishiqing-uos
pkgver=3.3.1
pkgrel=2
pkgdesc="日事清 A teamwork management software."
arch=('x86_64')
url="https://www.rishiqing.com/"
license=('custom')
depends=('gtk3' 'nss' 'libxss' 'alsa-lib')
source=(
    "https://home-store-packages.uniontech.com/appstore/pool/appstore/c/com.rishiqing.uos/com.rishiqing.uos_${pkgver}_amd64.deb"
)
sha512sums=('0c5897b6e1f0d3de8ec6f054a3bfce1df866afa3405bd6bac9a827431f13f2146a02eff44d35c83ac1d7f12c5a90810b518b9a9860607cc8317615a04c9358f3')

package() {
    echo "  -> Extracting the data.tar.xz..."
    bsdtar -xvf data.tar.xz -C "${pkgdir}/"
    chmod -R 755 "${pkgdir}/opt/"      
    echo "  -> Installing..."
    # Launcher
    install -d ${pkgdir}/usr/bin/
    ln -s /opt/apps/com.rishiqing.uos/files/rishiqing ${pkgdir}/usr/bin/rishiqing-uos
    # Desktop Entry 
    install -Dm644 "${pkgdir}/opt/apps/com.rishiqing.uos/entries/applications/com.rishiqing.uos.desktop" -t "${pkgdir}/usr/share/applications/"
    # Icons
    for i in 16x16 24x24 32x32 48x48 128x128 256x256 512x512; do
	install -Dm644 "$pkgdir"/opt/apps/com.rishiqing.uos/entries/icons/hicolor/$i/apps/com.rishiqing.uos.png "$pkgdir"/usr/share/icons/hicolor/$i/apps/com.rishiqing.uos.png
    done
    install -Dm644 "$pkgdir"/opt/apps/com.rishiqing.uos/entries/icons/hicolor/scalable/apps/com.rishiqing.uos.svg "$pkgdir"/usr/share/icons/hicolor/$i/apps/com.rishiqing.uos.svg
    # License
    install -Dm644 "${pkgdir}/opt/apps/com.rishiqing.uos/files/LICENSE.electron.txt" -t "${pkgdir}/usr/share/licenses/${pkgname}/"
    install -Dm644 "${pkgdir}/opt/apps/com.rishiqing.uos/files/LICENSES.chromium.html" -t "${pkgdir}/usr/share/licenses/${pkgname}/"
}
