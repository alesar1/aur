# Maintainer: Romain Bazile <gromain d0t baz at gmail dot com>

pkgname=mcuxpresso-config-tools
pkgver=5.0
pkgrel=1
epoch=
pkgdesc="Integrated suite of configuration tools for NXP's microcontrollers. From DEB package distributed by NXP."
arch=('x86_64')
url="http://www.nxp.com/products/software-and-tools/run-time-software/mcuxpresso-software-and-tools/mcuxpresso-config-tools:MCUXpresso-Config-Tools"
license=('custom:"NXP"')
depends=('java-environment' 'libxslt' 'libxtst' 'gcc-libs-multilib' 'gtk2' 'alsa-lib' 'libnet')
source=("https://cache.nxp.com/secured/NMG/mcuxpresso-config-tools-v5-1_amd64.deb?__gda__=1553430714_0bcc48b6e34738215a3ffef68915f9d0&fileExt=.deb" "LICENSE" "${pkgname}.install")

sha256sums=('78302f30526acceb2a036645543f16aba278b8e0574bf9ff8368081b8c2d53a7'
            '10b7132837be893b36d5a136cf7688abe3f7cff76653381797e54110c6d46006'
            '6435144e9b28ec594ebea3e598e01e23a4d41c3787a67de68dafedcf71bc18ed')

options=('!strip')

prepare() {
        cd ${srcdir}/
        bsdtar -x -f data.tar.gz
}

package() {
        cp -r ${srcdir}/usr ${pkgdir}/;
        cp -r ${srcdir}/opt ${pkgdir}/;
        install -D -m644 ${srcdir}/LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE;
}
