# Maintainer: Dmitry Kharitonov <darksab0r at gmail com>
# Contributor: paul2lv [at] gmail dot com

pkgname=foldingathome-beta
pkgver=7.4.17
pkgrel=1
pkgdesc="Folding@Home is a distributed computing project which studies protein folding, misfolding, aggregation, and related diseases - beta version."
arch=('x86_64')
url="http://folding.stanford.edu/"
license=('CUSTOM')
depends=('glibc')
optdepends=('opencl-icd-loader: for folding with a GPU'
            'opencl-driver: for folding with a GPU (choose Nvidia/AMD/Mesa package which matches your GPU)')
conflicts=('foldingathome' 'fahclient')
provides=('foldingathome=7.4.17' 'fahclient=7.4.17')
install=foldingathome.install
source=("https://download.foldingathome.org/releases/beta/release/fahclient/debian-stable-64bit/v7.4/fahclient_${pkgver}-64bit-release.tar.bz2"
"foldingathome.service")
sha256sums=('91205c4892bbf5a16942b49a9ce3db8f6c4e8bc5dca14af74ed71371415c3c82'
            'ad1bb4f104bc3446db7bb91a7d199bfeda5d80e15e08fe17bc69de1c276e2010')

package() {
  cd ${srcdir}

  install -D -c -m755 fahclient_${pkgver}-64bit-release/FAHClient ${pkgdir}/opt/fah/FAHClient
  install -D -c -m755 fahclient_${pkgver}-64bit-release/FAHCoreWrapper ${pkgdir}/opt/fah/FAHCoreWrapper
  install -D -c -m755 fahclient_${pkgver}-64bit-release/sample-config.xml ${pkgdir}/opt/fah/sample-config.xml

  chmod 755 ${pkgdir}/opt/fah/FAHClient
  chmod 755 ${pkgdir}/opt/fah/FAHCoreWrapper
  install -D -m644 fahclient_${pkgver}-64bit-release/copyright ${pkgdir}/usr/share/licenses/${pkgname}/copyright
  install -D -m644 fahclient_${pkgver}-64bit-release/README.md ${pkgdir}/opt/fah/README.md
  install -D -m644 fahclient_${pkgver}-64bit-release/CHANGELOG.md ${pkgdir}/opt/fah/CHANGELOG.md
  install -D -m644 ${srcdir}/foldingathome.service ${pkgdir}/usr/lib/systemd/system/foldingathome.service
}

