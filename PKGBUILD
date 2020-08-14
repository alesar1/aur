# Maintainer: alpha0x00 <li_tking@163.com>
# Maintainer: lightning1141 <lightning1141@gmail.com>

pkgname=xmind-2020
# the versin is from deb package
pkgver=10.2.1
pkgrel=1
pkgdesc="XMind - The most popular mind mapping software"
arch=("x86_64")
url="https://www.xmind.net/"
license=('custom')
depends=('libxss' 'nss' 'libxtst' 'alsa-lib' 'gtk3')

source=("https://dl3.xmind.net/XMind-2020-for-Linux-amd-64bit-$pkgver-202008051959.deb"
        'xmind.xml')

sha256sums=('SKIP'
            '833f6f1a7ddd73ea2487a21390e16b57c3fa817a560f385a034efdd1ed754a8d')

package() {
    tar xf data.tar.xz -C ${pkgdir}/

    chmod 755 ${pkgdir}"/opt/XMind/" \
              ${pkgdir}"/opt/XMind/locales/" \
              ${pkgdir}"/opt/XMind/resources/"

    mkdir -p ${pkgdir}/usr/bin/
    ln -s "/opt/XMind/XMind" ${pkgdir}/usr/bin/xmind-2020

    mkdir -p ${pkgdir}/usr/share/mime/packages
    install -Dm644 xmind.xml ${pkgdir}/usr/share/mime/packages/

    mkdir -p ${pkgdir}/usr/share/licenses/xmind-2020
    cp ${pkgdir}"/opt/XMind/resources/app.asar.unpacked/static/license/"license{-cn,}.pdf ${pkgdir}/usr/share/licenses/xmind-2020/
}
