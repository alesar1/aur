# Maintainer: Lev Lybin <lev.lybin@gmail.com>

pkgname=upwork-alpha
pkgver=4.1.297.0
_rawver=${pkgver//./_}
_hashver="ucf68p0z2ywzennv"
pkgrel=1
pkgdesc="Team App (ex. oDesk)"
arch=('i686' 'x86_64')
url="https://www.upwork.com/downloads/new-team-application"
license=('unknown')
conflicts=('upwork' 'upwork-beta')
depends=('gtk2' 'nss' 'gconf' 'alsa-lib' 'glu' 'libxtst' 'gtkglext' 'libgcrypt15' 'libxss')
install=upwork.install

# how to get links Standart, Beta, Alpha: grep updates.getVersionToDownload ~/.Upwork/Upwork/Logs/* | tail -n 1 | grep -o 'http://[a-zA-Z/.0-9_]*.deb'
source_x86_64=(upwork_amd64_${pkgver}.deb::http://updates.team.odesk.com/binaries/v${_rawver}_${_hashver}/upwork_amd64.deb)
source_i686=(upwork_i386_${pkgver}.deb::http://updates.team.odesk.com/binaries/v${_rawver}_${_hashver}/upwork_i386.deb)
md5sums_i686=('0cc2c98cd5ac0f3ade8f8bcc2cbe5025')
md5sums_x86_64=('033f0d1f2fe21ef86829792163abf5ab')

prepare() {
    cd "${srcdir}"
    tar -zxf "${srcdir}/data.tar.gz"
}

package() {
    cd "${srcdir}"
    cp -rp usr "${pkgdir}/usr"

    ln -s /usr/lib/libssl.so "${pkgdir}/usr/share/upwork/libssl.so.6"
    ln -s /usr/lib/libcrypto.so "${pkgdir}/usr/share/upwork/libcrypto.so.6"
    ln -s /usr/lib/libudev.so "${pkgdir}/usr/share/upwork/libudev.so.0"
}
