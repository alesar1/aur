# Maintainer: Lev Lybin <lev.lybin@gmail.com>

pkgname=upwork-beta
pkgver=4.0.144.0
_rawver=${pkgver//./_}
_hashver="mj9j7zmoj9asg5f0"
pkgrel=1
pkgdesc="Team App (ex. oDesk)"
arch=('i686' 'x86_64')
url="https://www.upwork.com/downloads/new-team-application"
license=('unknown')
conflicts=('upwork')
depends=('gtk2' 'nss' 'gconf' 'alsa-lib' 'glu' 'libxtst' 'gtkglext' 'libgcrypt15' 'libxss')
install=upwork.install

# how to get links Standart, Beta, Alpha: grep UPDATE_GET_VERSIONS_SUCCESS ~/.Upwork/Upwork/Logs/* | tail -n 1 | grep -o 'http://[a-zA-Z/.0-9_]*.deb'
source_x86_64=(upwork_amd64_${pkgver}.deb::http://updates.team.odesk.com/binaries/v${_rawver}_${_hashver}/upwork_amd64.deb)
source_i686=(upwork_i386_${pkgver}.deb::http://updates.team.odesk.com/binaries/v${_rawver}_${_hashver}/upwork_i386.deb)
md5sums_x86_64=('1e246cf5e1e49f62d41fb4b7f5d72533')
md5sums_i686=('45fde53fe6c41f37ae607d79bce87d7d')

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