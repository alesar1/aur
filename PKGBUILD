# Maintainer: Donald Webster (fryfrog@gmail.com)

pkgname=unifi-video
pkgver=3.9.6
pkgrel=1
pkgdesc="Centralized management system for Ubiquiti UniFi Surveillance Cameras"
arch=('x86_64')
url="https://www.ubnt.com/"
license=('custom')
depends=('mongodb' 'java-runtime>=8' 'java-jsvc' 'lsb-release')
conflicts=('unifi-video-beta')
install=unifi-video.install
source=("${pkgname}-${pkgver}.deb::https://dl.ubnt.com/firmwares/ufv/v${pkgver}/${pkgname}.Ubuntu16.04_amd64.v${pkgver}.deb"
        'unifi-video.service'
        'unifi-video.sysusers'
        'unifi-video.tmpfiles'
        'unifi-video.patch')

sha256sums=('3d7eef9ebda7a45104560647ef2e00442da33f8d6ba6331332e361f46983aa10'
            '9df948b046347c25e7c83e4837284ef63d9f8d3f28daa20a6c36e203e3ebfdb3'
            '90fb2f826a70d3b7815cd6a2253c2af6754c17504be28ef92ee223bd02093730'
            'c31918e3ef0eb55f44639af0ae5db029654230b84d5ae0c55c18fbb2c80dfc70'
            '6f52396de7f587372c66b4f269fa3ed51c9c230dc4ca1c4c83f56d8cfb714990')
            
package() {
    tar xf "${srcdir}/data.tar.gz" -C "${pkgdir}"/
    rm -r "${pkgdir}/etc"
    mv "${pkgdir}/usr/sbin" "${pkgdir}/usr/bin"
    chmod +x ${pkgdir}/usr/bin/unifi-video ${pkgdir}/usr/lib/unifi-video/bin/ubnt.* ${pkgdir}/usr/lib/unifi-video/bin/evo*

    cd "${pkgdir}/usr/bin"
    patch -N < "${srcdir}/unifi-video.patch"

    install -D -m 644 "${srcdir}/unifi-video.service" "${pkgdir}/usr/lib/systemd/system/unifi-video.service"
    install -D -m 644 "${srcdir}/unifi-video.sysusers" "${pkgdir}/usr/lib/sysusers.d/unifi-video.conf"
    install -D -m 644 "${srcdir}/unifi-video.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/unifi-video.conf"
}

# vim:set ts=2 sw=2 et:
