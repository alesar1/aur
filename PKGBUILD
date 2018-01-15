# Maintainer: ava1ar <mail(at)ava1ar(dot)me>
# Maintainer: Kewl <echo kewl@blto.eu.org | tr b a>
# Contributor: Star Brilliant <echo bTEzMjUzQGhvdG1haWwuY29tCg== | base64 -d>

pkgname=realvnc-vnc-server
pkgver=6.2.1
pkgrel=1
pkgdesc='VNC remote desktop server software by RealVNC'
arch=('x86_64' 'i686' 'armv7h' 'armv7' 'armv8')
url='https://www.realvnc.com/'
license=('custom')
depends=('glibc' 'gcc-libs' 'libice' 'libsm' 'libx11' 'libxext' 'libxtst' 'gconf')
optdepends=('cups: Printer support')
install='realvnc-vnc-server.install'
conflicts=('tightvnc' 'tigervnc' 'turbovnc')
source_x86_64=("https://www.realvnc.com/download/file/vnc.files/VNC-Server-${pkgver}-Linux-x64.deb")
source_i686=("https://www.realvnc.com/download/file/vnc.files/VNC-Server-${pkgver}-Linux-x86.deb")
source_armv7h=("https://www.realvnc.com/download/file/vnc.files/VNC-Server-${pkgver}-Linux-ARM.deb")
sha1sums_x86_64=('01fea367777ad24f91cfff58c0f4db18cc9c6907')
sha1sums_i686=('1bdd75aff00319c9424c3eb2665513e759631126')
sha1sums_armv7h=('e47ebc56928bfe9b12d836391c36854f93c3437d')
options=(!strip)

package() {
    bsdtar -xv -C "${pkgdir}" -f "${srcdir}/data.tar.gz"
    mkdir -p "${pkgdir}/usr/share/licenses/${pkgname}"
    ln -s /usr/share/doc/${pkgname}/copyright "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
