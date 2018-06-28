# Maintainer: Mario Ray MahardhikZza <leledumbo_cool@yahoo.co.id>

pkgname=vdhcoapp-bin
pkgver=1.2.3
pkgrel=1
pkgdesc="Companion application for Video DownloadHelper browser add-on, precompiled binary version"
arch=('i686' 'x86_64')
url="https://github.com/mi-g/vdhcoapp"
license=('GPL2')
depends=('ffmpeg' 'orc')
makedepends=()
options=('!strip') # IMPORTANT! DO NOT REMOVE THIS, OTHERWISE THE BINARY WILL BE BROKEN!
source=(https://github.com/mi-g/${pkgname}/releases/download/v${pkgver}/net.downloadhelper.coapp-${pkgver}-${pkgrel}_amd64.deb
        vdhcoapp-install.hook
        vdhcoapp-remove.hook)
sha256sums=('6fb56491aed5a60643cbfccba2b03c82372b48bffb463e53bdd19a6075453a47'
            'a2b56e6ae3f7f8933e20762baa90e69f63f0802b2e6d213b51e0bc68843e5d27'
            '3287859986d67e15e269965676bf9c75d1e853ea0ec97695811072fb8f10a7a8')

prepare() {
  rm control.tar.gz
  rm debian-binary
  mkdir -p ${srcdir}/${pkgname}
  tar xf data.tar.gz -C ${pkgname}
}

package() {
  cp -Rfp ${srcdir}/${pkgname}/* ${pkgdir}/
  mkdir -p ${srcdir}/${pkgname}/usr/bin
  ln -s /opt/net.downloadhelper.coapp/bin/net.downloadhelper.coapp-linux-64 ${pkgdir}/usr/bin/vdhcoapp
}
