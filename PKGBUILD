# Maintainer: Bryan Gilbert <gilbertw1 at gmail dot com>
pkgname=collate-notes
pkgver=0.3.0
pkgrel=1
pkgdesc="A flexible, locally hosted, cross-platform note-taking application"
arch=('x86_64')
url="https://collatenotes.com"
license=('Commercial')
depends=()
source=("https://s3.us-east-2.amazonaws.com/collate-releases/$pkgver/linux/Collate_${pkgver}_amd64.deb")
sha256sums=('fc6e1e8f9deee8e02c0b3ba88901817c881ee373e064fc4a8d1842813beef90e')

package() {
  # Extract the core package
  tar -xf data.tar.xz -C "${pkgdir}"

  # Setup usr folder
  chmod -R go-w ${pkgdir}/usr
  mkdir -p ${pkgdir}/usr/bin

  # Setup the start script and permissions
  ln -s /opt/Collate/collate ${pkgdir}/usr/bin/collate

  install -d ${pkgdir}/usr/share/applications
  install -d ${pkgdir}/usr/share/icons
  install -d ${pkgdir}/usr/share/doc
  install -d ${pkgdir}/opt/Collate
}
