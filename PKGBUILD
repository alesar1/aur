# Maintainer: Tomasz Zok <tomasz.zok [at] gmail.com>
pkgname=x3dna-dssr
pkgver=1.5.7_2016jun16
pkgrel=1
pkgdesc="DSSR, an integrated software tool for Dissecting the Spatial Structure of RNA. Please see: http://forum.x3dna.org/site-announcements/download-instructions/"
arch=('i686' 'x86_64')
url="http://x3dna.org/"
license=('custom')
depends=('glibc')
source_i686=("http://x3dna.bio.columbia.edu/downloads/dssr/linux-32bit/x3dna-dssr")
md5sums_i686=('ce1d6360a94f840b0f77763b6da98ac6')
source_x86_64=("http://x3dna.bio.columbia.edu/downloads/dssr/linux-64bit/x3dna-dssr")
md5sums_x86_64=('a025989b53185ec13769e9153a8e790b')

package() {
    install -D ${pkgname} ${pkgdir}/usr/bin/${pkgname}
}
